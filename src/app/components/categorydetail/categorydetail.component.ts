import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/services/products.service';
import { Category } from 'src/app/Core/interfaces/category';


@Component({
  selector: 'app-categorydetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.scss']
})
export class CategorydetailComponent implements OnInit {
categoryId: string|null='';
categoryData:Category={}as Category;
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService){}
  ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
   this.categoryId=params.get('id')
  },
})
this._ProductsService.getCategoriesDetail(this.categoryId).subscribe({
  next:(response)=>{
    console.log(response);
    this.categoryData=response.data
  }
})


  }





}
