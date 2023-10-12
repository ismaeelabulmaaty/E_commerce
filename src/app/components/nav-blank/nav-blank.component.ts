import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/Core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
constructor(private _Router:Router ,private _CartService:CartService,private _Renderer2:Renderer2){}

@ViewChild('navbar')navElement!:ElementRef;

@HostListener('window:scroll')
onScroll():void{
  if(scrollY>200){
    this._Renderer2.addClass(this.navElement.nativeElement,'px-5')
    this._Renderer2.addClass(this.navElement.nativeElement,'p-2')
    this._Renderer2.addClass(this.navElement.nativeElement,'shadow')
    this._Renderer2.addClass(this.navElement.nativeElement,'bg-main')

  }else{
    this._Renderer2.removeClass(this.navElement.nativeElement,'px-5')
    this._Renderer2.removeClass(this.navElement.nativeElement,'p-2')
    this._Renderer2.removeClass(this.navElement.nativeElement,'shadow')
    this._Renderer2.removeClass(this.navElement.nativeElement,'bg-main')
  }

}






cartData:number=0;

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next:(data)=>{
    this.cartData=data;
        // console.log('navbar',data);
      },
    })

this._CartService.getCartUser().subscribe({
  next:(response)=>{
    this.cartData=response.numOfCartItems
  }
});

  }


 

  signout(): void{
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  }



}
