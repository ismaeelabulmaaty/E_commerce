import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgotpassService } from 'src/app/Core/services/forgotpass.service';

@Component({
  selector: 'app-forgotpasswoed',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgotpasswoed.component.html',
  styleUrls: ['./forgotpasswoed.component.scss']
})
export class ForgotpasswoedComponent {
constructor(private _ForgotpassService:ForgotpassService){}
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  email:string='';
  isLoading:boolean=false;
  successMsg:string='';
  errorMsg:string='';


successMessage: string='';
errorMessage: string='';

forgotForm:FormGroup=new FormGroup({
  email:new FormControl(null, [Validators.required,Validators.email])
})
resetCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl(null, [Validators.required])
})

forgotPassword(forgotForm: FormGroup){
  this.isLoading=true
  this._ForgotpassService.forgotPassword(forgotForm.value).subscribe({
next:(response)=>{
  this.isLoading=false
this.successMessage=response.message;
this.step1=false
this.step2=true
this.errorMessage='';
this.successMessage='';
},
error :(err)=>{
this.isLoading=false
this.errorMessage=err.error.message;
}
  })
}
verifyCode(verifyCode:FormGroup){
  this.isLoading=true
  this._ForgotpassService.verifyCode(verifyCode.value).subscribe({
    next:(response)=>{
      this.isLoading=false
      console.log(response);
    },
    error:(err)=>{
      console.log(err);
      this.isLoading=false
    }
  })
}


}
