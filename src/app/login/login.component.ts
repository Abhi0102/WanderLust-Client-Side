import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Users } from '../Model/Users';
import { MessageService } from 'primeng/api';

import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: Users;
  submitted;


  constructor( private location:Location, private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private messageSevice:MessageService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      contactNumber: ['',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]],
      password: ['',Validators.required]
    });
  }
  

  login(){
    this.submitted=true;
    console.log("Inside Login");
    this.loginService.login(this.loginForm.value).subscribe(
      (response) => {
        this.submitted=true;
        this.user=new Users();
        this.user=response;
        sessionStorage.setItem('userName',this.user.userName);
        sessionStorage.setItem('userId',this.user.userId.toString());
        this.showSuccess();
        setTimeout(() => {
          this.location.back();
      }, 3000);
      },
      (errorResponse) =>{
        this.submitted=false;
        this.showError(errorResponse);
        sessionStorage.clear();
      }
    );
  }

  register(){
    this.router.navigate(['/register']);
  }

  showSuccess(){
    this.messageSevice.add({severity:'success',summary:'Login Successful',detail:"Please wait while we proceed"});
  }
  showError(errorResponse){
    this.messageSevice.add({severity:'error',summary:'Error Message', detail:errorResponse});
  }




}
