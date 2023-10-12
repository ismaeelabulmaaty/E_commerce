import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/services/products.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent  {
 constructor(private _ProductsService:ProductsService){}
 brands:any[]=[];
  ngOnInit(): void {
   this._ProductsService.getBrand().subscribe({
    next:(response)=>{
    this.brands= response.data}
   })
  }
 
 
}
