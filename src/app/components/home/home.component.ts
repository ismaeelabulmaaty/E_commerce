import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/services/products.service';
import { Product } from 'src/app/Core/interfaces/product';
import { CuttextPipe } from 'src/app/Core/pipe/cuttext.pipe';
import { Category } from 'src/app/Core/interfaces/category';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/Core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/Core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/Core/services/wishlist.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
constructor(private _ProductsService:ProductsService,
  private _CartService:CartService,
  private _ToastrService :ToastrService ,
  private _Renderer2:Renderer2,
  private _WishlistService:WishlistService,

  ){}
products:Product[]=[];
categories:Category[] = [];
brands:any[]=[];
term:string='';


  ngOnInit(): void {
  this._ProductsService.getProducts().subscribe({
    next:(response)=>{
      
     this.products= response.data
      ;
    },error:(err)=>{console.log(err)}
  })
  this._ProductsService.getCategories().subscribe({
    next:(response)=>{
      console.log(response.data)
      this.categories=response.data}
  })


  this._ProductsService.getBrand().subscribe({
    next:(response)=>{
      console.log(response.data)
      this.brands=response.data}
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
    error:()=>{
      this._Renderer2.removeAttribute(element,'disabled')
    }
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

 categoriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplaySpeed:1000,
    autoplayTimeout:3000,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
  
  }


  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    pullDrag: true,
    // dots: true,
    autoplaySpeed:1500,
    autoplayTimeout:3000 ,
    navSpeed: 500,
    // navText: [ '<i class="fa-solid fa-angles-left px-3 fa-1x"></i>', '<i class="fa-solid fa-angles-right px-3 bg-bg-main fa-1x"></i>' ],
    responsive: {
      0: {
        items: 1
      },
    },
    // nav: true
  }



}
