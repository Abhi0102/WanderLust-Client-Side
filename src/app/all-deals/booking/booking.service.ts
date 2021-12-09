import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  confirmBooking(booking): Observable<number>{
    let x=this.http.post(environment.booking+"?userId="+sessionStorage.getItem("userId"),booking);
    console.log(x);
    return <Observable<number>>x;
  }

}
