import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  successMessage:string = null;
  email:string;
  searchBy;

  constructor(private router: Router,private messageService:MessageService) { }

  ngOnInit(): void {
  }

  showInfo() {
    console.log(this.email)
    this.successMessage = "Thank you for subscribing. Updates will be sent to "+this.email;
    this.messageService.add({severity:'success', summary: this.successMessage, detail:''});
  }

  search(){
    this.router.navigate(['/all-deals',this.searchBy]);
  }

}
