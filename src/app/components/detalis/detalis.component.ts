import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/Core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalis',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.scss']
})
export class DetalisComponent  implements OnInit {
constructor(
            private _ActivatedRoute:ActivatedRoute,
            private _ProductsService:ProductsService,
            private _Renderer2:Renderer2,
            private _CartService:CartService ,
            private _ToastrService:ToastrService ,
            
            
            
            ){}

productId!:string|null;
productDetails:any=null;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId=params.get('_id')
        console.log(this.productId);
        
      }
    })
    
this._ProductsService.getProductDetails(this.productId).subscribe({
  next:({data})=>{
    // console.log(data);
    this.productDetails=data;
    
  }
})


  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplaySpeed:1000,
autoplayTimeout:2000,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
  items:1,
    nav: false
  }






  AddProduct(_id:any,element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element,'disabled','true')
  
    this._CartService.addToCart(_id).subscribe({
      next: (response)=>{
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



}
