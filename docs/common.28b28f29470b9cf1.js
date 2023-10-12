"use strict";(self.webpackChunkFreshCard=self.webpackChunkFreshCard||[]).push([[592],{8799:(m,u,a)=>{a.d(u,{r:()=>t});var l=a(4769);let t=(()=>{class c{transform(g,n){return g.split(" ").slice(0,n).join("")}static#t=this.\u0275fac=function(n){return new(n||c)};static#e=this.\u0275pipe=l.Yjl({name:"cuttext",type:c,pure:!0,standalone:!0})}return c})()},5342:(m,u,a)=>{function l(r){this.message=r}a.d(u,{e:()=>v}),(l.prototype=new Error).name="InvalidCharacterError";var t=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(r){var i=String(r).replace(/=+$/,"");if(i.length%4==1)throw new l("'atob' failed: The string to be decoded is not correctly encoded.");for(var e,o,h=0,d=0,f="";o=i.charAt(d++);~o&&(e=h%4?64*e+o:o,h++%4)?f+=String.fromCharCode(255&e>>(-2*h&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return f};function s(r){this.message=r}(s.prototype=new Error).name="InvalidTokenError";var p=a(4769),_=a(9862);let v=(()=>{class r{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}register(e){return this._HttpClient.post(this.baseUrl+"auth/signup",e)}login(e){return this._HttpClient.post(this.baseUrl+"auth/signin",e)}decodeUser(){const e=localStorage.getItem("userToken");if(null!==e){const o=function g(r,i){if("string"!=typeof r)throw new s("Invalid token specified");var e=!0===(i=i||{}).header?0:1;try{return JSON.parse(function c(r){var i=r.replace(/-/g,"+").replace(/_/g,"/");switch(i.length%4){case 0:break;case 2:i+="==";break;case 3:i+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(t(i).replace(/(.)/g,function(o,h){var d=h.charCodeAt(0).toString(16).toUpperCase();return d.length<2&&(d="0"+d),"%"+d}))}catch{return t(i)}}(r.split(".")[e]))}catch(o){throw new s("Invalid token specified: "+o.message)}}(e);this.userInfo=o}}GetUserData(e){return this._HttpClient.get(this.baseUrl+`users?limit=1&email=${e}`)}static#t=this.\u0275fac=function(o){return new(o||r)(p.LFG(_.eN))};static#e=this.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},1171:(m,u,a)=>{a.d(u,{M:()=>c});var l=a(4769),t=a(9862);let c=(()=>{class s{constructor(n){this._HttpClient=n,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}addToWishList(n){return this._HttpClient.post(this.baseUrl+"wishlist",{productId:n})}getUserWishlist(){return this._HttpClient.get(this.baseUrl+"wishlist")}removeWishlist(n){return this._HttpClient.delete(this.baseUrl+`wishlist/${n}`)}static#t=this.\u0275fac=function(p){return new(p||s)(l.LFG(t.eN))};static#e=this.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},7913:(m,u,a)=>{a.d(u,{c:()=>c});var l=a(6814),t=a(4769);let c=(()=>{class s{static#t=this.\u0275fac=function(p){return new(p||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:30,vars:0,consts:[[1,"bg-main-light","py-4"],[1,"container"],[1,"fw-bold"],[1,"text-main"],[1,"d-flex","gap-3"],["type","email","placeholder"," Enter Your Email",1,"form-control"],[1,"main-btn","flex-shrink-0"],[1,"row"],[1,"col-md-6","d-flex","gap-3","align-items-center"],["src","../../../assets/imgs/amazonpay.svg","alt","amazonas"],["src","../../../assets/imgs/american-express.svg","alt","american"],["src","../../../assets/imgs/mastercard.svg","alt","mastercard"],["src","../../../assets/imgs/paypal.svg","alt","paypal"],[1,"col-md-6","d-flex","gap-3","align-items-3","my-4","pt-3","footer-img"],["src","../../../assets/imgs/appstore-btn.svg","alt","app store"],["src","../../../assets/imgs/googleplay-btn.svg","alt","google play"],[1,"h6","text-center"],[1,"fw-bold","text-main"]],template:function(p,_){1&p&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"h3",2),t._uU(3,"Get The Fresh Cart App"),t.qZA(),t.TgZ(4,"p")(5,"span",3),t._uU(6," We Well Send You a Link"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"input",5),t.TgZ(9,"button",6),t._uU(10,"Share App Link"),t.qZA()(),t._UZ(11,"hr"),t.TgZ(12,"div",7)(13,"div",8)(14,"h6"),t._uU(15,"Payment Partners"),t.qZA(),t._UZ(16,"img",9)(17,"img",10)(18,"img",11)(19,"img",12),t.qZA(),t.TgZ(20,"div",13)(21,"h5"),t._uU(22,"Get Deliveries With Fresh Cart"),t.qZA(),t._UZ(23,"img",14)(24,"img",15),t.qZA()(),t._UZ(25,"hr"),t.TgZ(26,"h3",16),t._uU(27,"\xa9 2023 FreshCart eCommerce . All rights reserved. Powered by "),t.TgZ(28,"span",17),t._uU(29," Ismaeel Abu-Elmaaty... "),t.qZA()()()())},dependencies:[l.ez],styles:[".footer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px}[_nghost-%COMP%]{margin-top:auto}"]})}return s})()}}]);