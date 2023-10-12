import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/services/products.service';
import { Category } from 'src/app/Core/interfaces/category';
import { CuttextPipe } from "../../Core/pipe/cuttext.pipe";
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    imports: [CommonModule, CuttextPipe,RouterLink]
})
export class CategoriesComponent implements OnInit {

  constructor(private _ProductsService:ProductsService){}
  categoryData:Category[]=[];
  ngOnInit(): void {
this._ProductsService.getCategories().subscribe({
  next:(response)=>{
    this.categoryData=response.data;
    // console.log(response);
    
  }
})
  }

}
