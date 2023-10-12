import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/Core/services/wishlist.service';
import { CartService } from 'src/app/Core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(
    private _WishlistService:WishlistService,
    private _Renderer2:Renderer2,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    ){}
  wishlistDetails:any='';
  ngOnInit(): void {
    this._WishlistService.getUserWishlist().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.wishlistDetails=response.data;
      }
    })
  }


  
AddProduct(_id:any,element:HTMLButtonElement):void{
  this._Renderer2.setAttribute(element,'disabled','true')
  this._CartService.addToCart(_id).subscribe({
    next: (response)=>{
      this._ToastrService.success(response.message)
      this._Renderer2.removeAttribute(element,'disabled')
      this._CartService.cartNumber.next(response.numOfCartItems)
    },
    error:()=>{
      this._Renderer2.removeAttribute(element,'disabled')
    }
  })
}

removeProduct(id:any,element:HTMLButtonElement):void{
  this._WishlistService.removeWishlist(id).subscribe({
    next: (response)=>
    {
      console.log(response);
      this._ToastrService.error(response.message)
      this._Renderer2.setAttribute(element,'disabled','true')
      this.wishlistDetails=response.data;
    },
    error:()=>{
      this._Renderer2.removeAttribute(element,'disabled')
    }
  })
}


}
