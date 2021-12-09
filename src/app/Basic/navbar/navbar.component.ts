import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string;
  loggedIn: Boolean = false;
  constructor(public router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.userName = sessionStorage.getItem('userName');
    if (this.userName != null) {
      this.loggedIn = true;
    }

  }
  logout() {
    sessionStorage.clear();
    this.loggedIn = false;
    this.userName = null;

  }

  toContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.logout();
        //Actual logic to perform a confirmation
      }
    });
  }
  toHotDeals(){
    document.getElementById('hot-deals').scrollIntoView({behavior:'smooth'});
  }

  toProfile(){
    this.router.navigate(['/profile']);
  }

}
