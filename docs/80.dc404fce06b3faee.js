"use strict";(self.webpackChunkFreshCard=self.webpackChunkFreshCard||[]).push([[80],{779:(b,_,r)=>{r.d(_,{N:()=>h});var d=r(5619),t=r(4769),u=r(9862);let h=(()=>{class c{constructor(i){this._HttpClient=i,this.cartNumber=new d.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}addToCart(i){return this._HttpClient.post(this.baseUrl+"cart",{productId:i})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(i){return this._HttpClient.delete(this.baseUrl+`cart/${i}`)}updateCartCount(i,a){return this._HttpClient.put(this.baseUrl+`cart/${i}`,{count:a})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(i,a){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${i}?url=http://localhost:4200`,{shippingAddress:a})}getAllOrders(){let i=localStorage.getItem("userId");return this._HttpClient.get(this.baseUrl+`orders/user/${i}`)}static#t=this.\u0275fac=function(a){return new(a||c)(t.LFG(u.eN))};static#e=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},5080:(b,_,r)=>{r.r(_),r.d(_,{WishlistComponent:()=>C});var d=r(6814),t=r(4769),u=r(1171),h=r(779),c=r(2425);function f(n,m){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"div",12)(4,"h5",13),t._uU(5),t.qZA()(),t.TgZ(6,"div",14)(7,"p",15),t._uU(8),t.TgZ(9,"span"),t._uU(10,"EGP"),t.qZA()()(),t.TgZ(11,"div",16)(12,"div")(13,"button",17,18),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.MAs(14),g=t.oxw(2);return t.KtG(g.AddProduct(l._id,p))}),t._uU(15,"+Add Cart"),t.qZA()(),t.TgZ(16,"div")(17,"button",19,20),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.MAs(18),g=t.oxw(2);return t.KtG(g.removeProduct(l._id,p))}),t._UZ(19,"i",21),t._uU(20,"Delete "),t.qZA()()()()}if(2&n){const e=m.$implicit;t.xp6(2),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title),t.xp6(3),t.Oqu(e.title),t.xp6(3),t.hij("",e.price," ")}}function i(n,m){if(1&n&&(t.TgZ(0,"section",3)(1,"div",4)(2,"div",5),t._UZ(3,"i",6),t.qZA(),t.TgZ(4,"div",7)(5,"h2",5),t._uU(6,"My WishList"),t.qZA()(),t.YNc(7,f,21,4,"div",8),t.qZA()()),2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngForOf",e.wishlistDetails)}}function a(n,m){1&n&&t._UZ(0,"div",22)}let C=(()=>{class n{constructor(e,s,o,l){this._WishlistService=e,this._Renderer2=s,this._CartService=o,this._ToastrService=l,this.wishlistDetails=""}ngOnInit(){this._WishlistService.getUserWishlist().subscribe({next:e=>{console.log(e.data),this.wishlistDetails=e.data}})}AddProduct(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addToCart(e).subscribe({next:o=>{this._ToastrService.success(o.message),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNumber.next(o.numOfCartItems)},error:()=>{this._Renderer2.removeAttribute(s,"disabled")}})}removeProduct(e,s){this._WishlistService.removeWishlist(e).subscribe({next:o=>{console.log(o),this._ToastrService.error(o.message),this._Renderer2.setAttribute(s,"disabled","true"),this.wishlistDetails=o.data},error:()=>{this._Renderer2.removeAttribute(s,"disabled")}})}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(u.M),t.Y36(t.Qsj),t.Y36(h.N),t.Y36(c._W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","paddin",4,"ngIf","ngIfElse"],["class","paddin my-5"],["mssg",""],[1,"paddin"],[1,"copntainer","w-75","mx-auto","rounded","shadow","bg-main-light","my-5","p-5"],[1,"text-center"],[1,"fa-regular","fa-heart","fa-beat","text-main","text-center","fa-3x"],[1,"text-center","border-bottom","mb-2"],["class","row d-flex justify-content-between align-items-center border-bottom text-center",4,"ngFor","ngForOf"],[1,"row","d-flex","justify-content-between","align-items-center","border-bottom","text-center"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-3","text-left"],[1,"my-2","mb-3"],[1,"col-md-2","d-flex","align-items-center","justify-content-center"],[1,"fw-bold","my-2"],[1,"col-md-3"],[1,"btn","mb-3","buton",3,"click"],["btn",""],[1,"btn","mb-3","btn-outline-danger",3,"click"],["btnWish",""],[1,"fa-solid","fa-xmark","fa-fade","fa-x","mx-2"],[1,"w-50","mx-auto","templet","my-5","p-5"]],template:function(s,o){if(1&s&&(t.YNc(0,i,8,1,"section",0),t.YNc(1,a,1,0,"ng-template",1,2,t.W1O)),2&s){const l=t.MAs(2);t.Q6J("ngIf",o.wishlistDetails)("ngIfElse",l)}},dependencies:[d.ez,d.sg,d.O5],styles:["h2[_ngcontent-%COMP%]{font-weight:800;font-size:2rem;border-bottom:3px solid #ffc908;display:inline-block}.buton[_ngcontent-%COMP%]{border:1px solid #0aad0a;color:#0aad0a}.buton[_ngcontent-%COMP%]:hover{background-color:#0aad0a;color:#fff}.templet[_ngcontent-%COMP%]{height:300px;background-image:url(f6e464230662e7fa4c6a4afb92631aed.3be6da92346f5257.png);background-size:cover;background-position:center}"]})}return n})()}}]);