import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { AuthService } from 'src/app/Core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  errMessage: string='';
  isLoading: boolean=false;

  constructor(private _authService:AuthService,private _Router:Router){}


registerForm:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(`^[a-zA-Z0-9_@]{3,8}$`)]),
  rePassword:new FormControl(''),
  phone:new FormControl('',[Validators.required,Validators.pattern(`^01[0125][0-9]{8}$`)]),
},{validators:[this.confirmPassword]} as FormControlOptions)



confirmPassword(group:FormGroup):void{
const password=group.get('password');
const rePassword=group.get('rePassword');
if(rePassword?.value==''){
rePassword?.setErrors({required:true})
}else if(password?.value!=rePassword?.value){
rePassword?.setErrors({mismatch:true})
}

}


handleForm():void{

  let userData=this.registerForm.value;
this.isLoading=true
if(this.registerForm.valid===true){
this._authService.register(userData).subscribe({
  next:(response)=>{if(response.message=='success'){
    this._Router.navigate(['/login']);
    this.isLoading=false;
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