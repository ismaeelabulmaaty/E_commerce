import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/services/products.service';
import { Product } from 'src/app/Core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/Core/pipe/cuttext.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Core/services/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { WishlistService } from 'src/app/Core/services/wishlist.service';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(
    private _ProductsService:ProductsService,
    private _CartService:CartService,
    private _ToastrService :ToastrService ,
    private _Renderer2:Renderer2,
    private  _WishlistService:WishlistService
    
    ){}
  products:Product[]=[];
  pageSize:number=0;
currentPage:number=1;
total:number=0;

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(response)=>{
        console.log(response);
       this.products= response.data;
       this.pageSize=response.metadata.limit;
       this.currentPage=response.metadata.currentPage;
       this.total=response.results;
        ;
      },error:(err)=>{console.log(err)}
    })
  }
  AddProduct(_id:any,element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element,'disabled','true')
  
    this._CartService.addToCart(_id).subscribe({
      next: (response)=>{console.log(response);
        this._ToastrService.success(response.message)
        this._Renderer2.removeAttribute(element,'disabled')
  
        this._CartService.cartNumber.next(response.numOfCartItems
          )
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element,'disabled')
      }
    })
  }

  pageChanged(event:any):void{
    this._ProductsService.getProducts(event).subscribe({
      next:(response)=>{
        console.log(response);
       this.products= response.data;
       this.pageSize=response.metadata.limit;
       this.currentPage=response.metadata.currentPage;
       this.total=response.results;
        ;
      },error:(err)=>{console.log(err)}
    })

  }
  addProductToWishList(_id:any,element:any):void{
    this._WishlistService.addToWishList(_id).subscribe({
      next:(response)=>
      {console.log(response)
        this._Renderer2.setAttribute(element,'disabled','true')
        this._ToastrService.info(response.message)
        this._Renderer2.removeAttribute(element,'disabled')
      },error:()=>{
        this._Renderer2.removeAttribute(element,'disabled')
      }
    })
  }


}
