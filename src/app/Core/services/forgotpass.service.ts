import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassService {

  constructor(private _HttpClient:HttpClient) { }


//   baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`
// forgotPassword(userEmail:object):Observable<any>{
//   return this._HttpClient.post(this.baseUrl+`forgotPasswords`,userEmail);
//  }
//  verifyCode(resetCode:any):Observable<any>{
//   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, resetCode);
//  }
// resetCode(resetCode:object):Observable<any>{
//   return this._HttpClient.post(this.baseUrl+`verifyResetCode`,resetCode);
//  }

forgotPassword(formData:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, formData);
 }

verifyCode(formData:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, formData);
 }

restPassword(formData:any):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, formData);
 }




}
