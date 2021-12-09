import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage;
  welcomeUser;
  submitted;

  constructor(private formBuilder: FormBuilder, private messageSevice: MessageService, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      userName: ['',Validators.required],
      emailId: ['',[Validators.required,Validators.email]],
      contactNumber: ['',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]],
      password: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]]
    },{
      validators: this.validatePassword('password','confirmPassword')
    })
  }

  validatePassword(password:string,matcingPassword:string){

    return (formGroup:FormGroup)=>{
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[matcingPassword];
      if(matchingControl.errors && !matchingControl.errors.validatePassword){
        return;
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({validatePassword:true});
      }
      else{
        matchingControl.setErrors(null);
      }
    }

  }

  register(){
    this.submitted=true;
    this.registerService.register(this.registerForm.value).subscribe(
      (response) => {
        this.submitted=true;
        this.errorMessage=null;
        this.welcomeUser=response;
        this.showSuccess();
        setTimeout(() => {
          this.router.navigate(["/login"]);
      }, 3000);
      },
      (errorResponse)=> {
        this.submitted=false;
        this.errorMessage=<any>errorResponse;
        this.welcomeUser=null;
        console.log(errorResponse);
        this.showError();
      }
    );
  }


  showSuccess(){
    this.messageSevice.add({severity:'success',summary:'Registration Successful',detail:this.welcomeUser});
  }
  showError(){
    this.messageSevice.add({severity:'error',summary:'Error Message', detail:this.errorMessage});
  }

}
