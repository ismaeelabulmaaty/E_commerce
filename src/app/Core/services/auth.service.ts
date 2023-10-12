import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`
  constructor(private _HttpClient:HttpClient) { }
  userInfo:any ;

register(userData:object):Observable<any>{
  return this._HttpClient.post(this.baseUrl+'auth/signup',userData)
}

login(userData:object):Observable<any>{
  return this._HttpClient.post(this.baseUrl+'auth/signin',userData)
}

decodeUser():void{
  const encoded=localStorage.getItem('userToken')
  if(encoded!==null){
    const decode=jwtDecode(encoded)
    this.userInfo=decode;
  }
}

GetUserData(email:string):Observable<any>{
  debugger
  return this._HttpClient.get(this.baseUrl+`users?limit=1&email=${email}`)
}



}
