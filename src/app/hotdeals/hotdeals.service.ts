import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HotDealsModel } from '../Model/HotDealsModel';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotdealsService {

  constructor(private http: HttpClient) { }

  getHotDeals(data: any): Observable<HotDealsModel[]>{
   
    return <Observable<HotDealsModel[]>>this.http.post(environment.hotDealsUri,data).pipe(catchError(this.handleError));

  }
  private handleError(err: HttpErrorResponse){
    let errmsg:string='';
    if(err.status==0){
      errmsg="A connection to back end can not be established.";
    }
    return throwError(errmsg);

  }
}
