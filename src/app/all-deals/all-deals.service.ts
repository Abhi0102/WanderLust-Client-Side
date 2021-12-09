import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Destination } from '../Model/Destination';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllDealsService {

  constructor(private http: HttpClient) { }

  getAllDeals(): Observable<Destination[]>{
    return <Observable<Destination[]>>this.http.get(environment.allDeals).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    let errMsg:string='';
    if(err.status==0){
      errMsg="A connection to back end can not be established."
    }
    return throwError(errMsg);
  }
}
