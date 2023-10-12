import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _authService:AuthService,private _Router:Router){}
  errMessage: string='';
  isLoading: boolean=false;

  loginForm:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
 
})




handleForm():void{
let userData=this.loginForm.value;
this.isLoading=true

if(this.loginForm.valid===true){
this._authService.login(userData).subscribe({
next:(response)=>{
if(response.message=='success'){
localStorage.setItem('userToken',response.token);
this._authService.GetUserData(response.user.email).subscribe(res=>{
  if(res.users?.length > 0) 
    localStorage.setItem('userId',res.users[0]._id);
})

this._authService.decodeUser();
this.isLoading=false;
this._Router.navigate(['/home']);
      
    }
},
error:(err)=>{
    this.errMessage=err.error.message;
    this.isLoading=false;
}
})
}
}
}
