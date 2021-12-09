import { Component, OnInit } from '@angular/core';
import { Users } from '../Model/Users';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Users;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.user=new Users();
    this.profileService.getUserDetail().subscribe(data =>{
      this.user=data;
    });

  }

}
