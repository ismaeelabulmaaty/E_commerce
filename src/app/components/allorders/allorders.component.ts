import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/Core/services/cart.service';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss'],
})
export class AllordersComponent implements OnInit {
  constructor(
    private _CartService: CartService
  ) {}
  userData: any[] = [];
  ngOnInit(): void {
    this._CartService.getAllOrders().subscribe({
      next: (response) => {
        console.log(response);
        this.userData = response;
      },
    });
  }
}

//  usersId:string|null='';
//   userData:any={};
//   itemData:any[]=[];
// this._CartService.getAllOrders(this.usersId,id).subscribe({
//   next:(response)=>{
//     console.log(response);
//     this.userData = response.data.filter((x : any)=>x.id === id)[0];
//     this.itemData = this.userData.cartItems;
//   }
// })
