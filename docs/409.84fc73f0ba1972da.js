"use strict";(self.webpackChunkFreshCard=self.webpackChunkFreshCard||[]).push([[409],{8439:(g,c,a)=>{a.d(c,{s:()=>d});var n=a(4769),t=a(9862);let d=(()=>{class o{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(s=1){return this._HttpClient.get(this.baseUrl+`products?page=${s}`)}getProductDetails(s){return this._HttpClient.get(this.baseUrl+`products/${s}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoriesDetail(s){return this._HttpClient.get(this.baseUrl+`categories/${s}`)}getBrand(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}static#t=this.\u0275fac=function(r){return new(r||o)(n.LFG(t.eN))};static#e=this.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},5409:(g,c,a)=>{a.r(c),a.d(c,{CategorydetailComponent:()=>s});var n=a(6814),t=a(4769),d=a(1120),o=a(8439);function l(r,u){if(1&r&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"div",4),t._UZ(4,"img",5),t.qZA(),t.TgZ(5,"div",4)(6,"h2",6),t._uU(7),t.qZA()()()()()),2&r){const e=t.oxw();t.xp6(4),t.Q6J("src",e.categoryData.image,t.LSH)("alt",e.categoryData.name),t.xp6(3),t.hij(" ",e.categoryData.name,"")}}let s=(()=>{class r{constructor(e,i){this._ActivatedRoute=e,this._ProductsService=i,this.categoryId="",this.categoryData={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.categoryId=e.get("id")}}),this._ProductsService.getCategoriesDetail(this.categoryId).subscribe({next:e=>{console.log(e),this.categoryData=e.data}})}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(d.gz),t.Y36(o.s))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-categorydetail"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","paddin",4,"ngIf"],[1,"paddin"],[1,"container","my-5","p-3","w-75","mx-auto","shadow","ronded","bg-main-light"],[1,"row","g-4","align-items-center"],[1,"col-md-6"],[1,"w-75",3,"src","alt"],[1,"fw-bold","text-main"]],template:function(i,_){1&i&&t.YNc(0,l,8,3,"section",0),2&i&&t.Q6J("ngIf",_.categoryData._id)},dependencies:[n.ez,n.O5],styles:["h2[_ngcontent-%COMP%]{font-weight:800;font-size:2rem;border-bottom:3px solid #ffc908;display:inline-block}"]})}return r})()}}]);