import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/Core/services/cart.service';

@Component({
  selector: 'app-orderdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {

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
