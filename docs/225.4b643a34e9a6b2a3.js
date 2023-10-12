"use strict";(self.webpackChunkFreshCard=self.webpackChunkFreshCard||[]).push([[225],{6225:(F,c,a)=>{a.r(c),a.d(c,{ForgotpasswoedComponent:()=>C});var p=a(6814),r=a(95),e=a(4769),g=a(9862);let m=(()=>{class s{constructor(t){this._HttpClient=t}forgotPassword(t){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",t)}verifyCode(t){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",t)}restPassword(t){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",t)}static#e=this.\u0275fac=function(o){return new(o||s)(e.LFG(g.eN))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function f(s,i){if(1&s&&(e.TgZ(0,"p",11),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.successMessage)}}function u(s,i){if(1&s&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.errorMessage)}}function l(s,i){1&s&&(e.TgZ(0,"span"),e._UZ(1,"i",13),e.qZA())}function d(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"section",2)(1,"div",3)(2,"form",4),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.forgotPassword(n.forgotForm))}),e.TgZ(3,"label",5),e._uU(4,"Email"),e.qZA(),e._UZ(5,"input",6),e.YNc(6,f,2,1,"p",7),e.YNc(7,u,2,1,"p",8),e.TgZ(8,"button",9),e._uU(9,"Send Code "),e.YNc(10,l,2,0,"span",10),e.qZA()()()()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.forgotForm),e.xp6(4),e.Q6J("ngIf",t.successMessage),e.xp6(1),e.Q6J("ngIf",t.errorMessage),e.xp6(3),e.Q6J("ngIf",t.isLoading)}}function _(s,i){if(1&s&&(e.TgZ(0,"p",11),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.successMessage)}}function h(s,i){if(1&s&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.errorMessage)}}function w(s,i){1&s&&(e.TgZ(0,"span"),e._UZ(1,"i",13),e.qZA())}function x(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"section",2)(1,"div",3)(2,"form",4),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.verifyCode(n.resetCodeForm))}),e.TgZ(3,"label",14),e._uU(4,"Reset Code"),e.qZA(),e._UZ(5,"input",15),e.YNc(6,_,2,1,"p",7),e.YNc(7,h,2,1,"p",8),e.TgZ(8,"button",16),e._uU(9,"Reset Code "),e.YNc(10,w,2,0,"span",10),e.qZA()()()()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.resetCodeForm),e.xp6(4),e.Q6J("ngIf",t.successMessage),e.xp6(1),e.Q6J("ngIf",t.errorMessage),e.xp6(3),e.Q6J("ngIf",t.isLoading)}}let C=(()=>{class s{constructor(t){this._ForgotpassService=t,this.step1=!0,this.step2=!1,this.step3=!1,this.email="",this.isLoading=!1,this.successMsg="",this.errorMsg="",this.successMessage="",this.errorMessage="",this.forgotForm=new r.cw({email:new r.NI(null,[r.kI.required,r.kI.email])}),this.resetCodeForm=new r.cw({resetCode:new r.NI(null,[r.kI.required])})}forgotPassword(t){this.isLoading=!0,this._ForgotpassService.forgotPassword(t.value).subscribe({next:o=>{this.isLoading=!1,this.successMessage=o.message,this.step1=!1,this.step2=!0,this.errorMessage="",this.successMessage=""},error:o=>{this.isLoading=!1,this.errorMessage=o.error.message}})}verifyCode(t){this.isLoading=!0,this._ForgotpassService.verifyCode(t.value).subscribe({next:o=>{this.isLoading=!1,console.log(o)},error:o=>{console.log(o),this.isLoading=!1}})}static#e=this.\u0275fac=function(o){return new(o||s)(e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-forgotpasswoed"]],standalone:!0,features:[e.jDz],decls:2,vars:2,consts:[["class"," paddin",4,"ngIf"],["class","paddin",4,"ngIf"],[1,"paddin"],[1,"container","my-5","w-50","mx-auto","ronded","shadow","p-4","bg-main-light"],[1,"my-3","pb-5",3,"formGroup","ngSubmit"],["for","email",1,"fw-bold","my-2"],["formControlName","email","type","email","placeholder","enter your emil",1,"form-control"],["class","alert alert-success text-white",4,"ngIf"],["class","alert alert-danger  ",4,"ngIf"],[1,"btn","text-white","bg-main","float-end","mt-4"],[4,"ngIf"],[1,"alert","alert-success","text-white"],[1,"alert","alert-danger"],[1,"fas","fa-spin","fa-spinner","text-warning"],["for","",1,"fw-bold","my-2"],["formControlName","resetCode","type","number","placeholder","enter your code",1,"form-control"],[1,"btn","bg-main","float-end","text-white","mt-4"]],template:function(o,n){1&o&&(e.YNc(0,d,11,4,"section",0),e.YNc(1,x,11,4,"section",1)),2&o&&(e.Q6J("ngIf",n.step1),e.xp6(1),e.Q6J("ngIf",n.step2))},dependencies:[p.ez,p.O5,r.UX,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u]})}return s})()}}]);