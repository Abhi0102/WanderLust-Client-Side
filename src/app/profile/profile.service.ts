import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserDetail(): Observable<Users>{
    return <Observable<Users>>this.http.get(environment.userDetail+sessionStorage.getItem('userId'));
  }
}
