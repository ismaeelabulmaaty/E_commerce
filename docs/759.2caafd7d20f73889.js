"use strict";(self.webpackChunkFreshCard=self.webpackChunkFreshCard||[]).push([[759],{5759:(x,d,o)=>{o.r(d),o.d(d,{DetalisComponent:()=>v});var a=o(6814),c=o(756),t=o(4769),u=o(1120),l=o(8439),p=o(779),m=o(2425);function g(s,_){if(1&s&&(t.TgZ(0,"div",18),t._UZ(1,"img",19),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e,t.LSH)}}function h(s,_){1&s&&(t.ynx(0),t.YNc(1,g,2,1,"ng-template",17),t.BQk())}function D(s,_){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"h2",4),t._uU(4,"Product Details"),t.qZA()(),t.TgZ(5,"div",5)(6,"div",6)(7,"owl-carousel-o",7),t.YNc(8,h,2,0,"ng-container",8),t.qZA()(),t.TgZ(9,"div",9)(10,"div",10)(11,"h3",11),t._uU(12),t.qZA(),t.TgZ(13,"p",12),t._uU(14),t.qZA(),t.TgZ(15,"div",13)(16,"span",11),t._uU(17),t.qZA(),t.TgZ(18,"SPan",11),t._UZ(19,"i",14),t._uU(20),t.qZA()(),t.TgZ(21,"button",15,16),t.NdJ("click",function(){t.CHM(e);const n=t.MAs(22),r=t.oxw();return t.KtG(r.AddProduct(r.productDetails._id,n))}),t._uU(23,"Add To Cart"),t.qZA()()()()()()}if(2&s){const e=t.oxw();t.xp6(7),t.Q6J("options",e.customOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(4),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(3),t.hij("",e.productDetails.price,"EGP"),t.xp6(3),t.Oqu(e.productDetails.ratingsAverage)}}let v=(()=>{class s{constructor(e,i,n,r,f){this._ActivatedRoute=e,this._ProductsService=i,this._Renderer2=n,this._CartService=r,this._ToastrService=f,this.productDetails=null,this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,autoplay:!0,autoplaySpeed:1e3,autoplayTimeout:2e3,dots:!0,navSpeed:700,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("_id"),console.log(this.productId)}}),this._ProductsService.getProductDetails(this.productId).subscribe({next:({data:e})=>{this.productDetails=e}})}AddProduct(e,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.addToCart(e).subscribe({next:n=>{this._ToastrService.success(n.message),this._Renderer2.removeAttribute(i,"disabled"),this._CartService.cartNumber.next(n.numOfCartItems)},error:n=>{this._Renderer2.removeAttribute(i,"disabled")}})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(u.gz),t.Y36(l.s),t.Y36(t.Qsj),t.Y36(p.N),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-detalis"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","paddin",4,"ngIf"],[1,"paddin"],[1,"container","bg-light","p-5","mb-5","mt-5","w-75","mx-auto","rounded","shadow","my-5"],[1,"text-center"],[1,"text-main","mb-4"],[1,"row","my-2","align-items-center","g-5","p-5"],[1,"col-md-4"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-8"],[1,""],[1,"fw-bold"],[1,"pt-3","pb-5","text-muted"],[1,"d-flex","justify-content-between","my-4","w-50","align-items-center"],[1,"fa-solid","fa-star","rating-color"],[1,"w-75","m-auto","bg-main","btn","fw-bold","text-light",3,"click"],["btnAdd",""],["carouselSlide",""],[1,"semo"],[1,"w-100",3,"src"]],template:function(i,n){1&i&&t.YNc(0,D,24,6,"section",0),2&i&&t.Q6J("ngIf",n.productDetails)},dependencies:[a.ez,a.sg,a.O5,c.bB,c.Fy,c.Mp],styles:["h2[_ngcontent-%COMP%]{font-weight:800;font-size:2rem;border-bottom:3px solid #ffc908;display:inline-block}"]})}return s})()}}]);