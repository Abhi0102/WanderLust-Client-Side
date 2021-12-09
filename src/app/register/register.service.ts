import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private headers =new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  register(data: any):Observable<String> {
    return <Observable<String>>this.http.post<String>(environment.registerUri,data,{headers:this.headers,responseType: 'text' as 'json'}).pipe(catchError(this.handleError));

  }
  private handleError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg:string='';
    if (err.error instanceof Error) {
       
        errMsg=err.error.message;
        console.log(errMsg)
    }
     else if(typeof err.error === 'string'){
        errMsg=JSON.parse(err.error).message
    }
    else {
       
       if(err.status==0){
       
           errMsg="A connection to back end can not be established.";
       }else{
        
           errMsg=err.error.message;
          
       }
     }
        return throwError(errMsg);
}
}
