import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(): boolean {
    let userName=sessionStorage.getItem('userName');
    if(userName!=null){
      this.router.navigate(['/home']);
    }

    return true;
  }
  
}
