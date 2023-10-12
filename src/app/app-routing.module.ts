import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Core/guard/auth.guard';



const routes: Routes = [
{path:'',canActivate:[authGuard],loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:"Home"},
  {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:"Cart"},
  {path:'wishlist',loadComponent:()=>import('./components/wishlist/wishlist.component').then((m)=>m.WishlistComponent),title:"Wishlist"},
  {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:"products"},
  {path:'detalis/:_id',loadComponent:()=>import('./components/detalis/detalis.component').then((m)=>m.DetalisComponent),title:"products detalis"},
  {path:'categorydetails/:id',loadComponent:()=>import('./components/categorydetail/categorydetail.component').then((m)=>m.CategorydetailComponent),title:"category details"},
  {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent),title:"brands"},
  {path:'allorders',loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent),title:"allorders"},
  {path:'orderdetails/:id',loadComponent:()=>import('./components/orderdetails/orderdetails.component').then((m)=>m.OrderdetailsComponent),title:"Order details"},
  {path:'forgotPassword',loadComponent:()=>import('./components/forgotpasswoed/forgotpasswoed.component').then((m)=>m.ForgotpasswoedComponent),title:'forgotPassword'},
  {path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent),title:"payment"},
  {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:"categories"},
]},

{path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
children:[
  {path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'login'},
{path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent),title:'register'},
]},

{path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'notfound'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
