import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http: HttpClient) { }

  getDistrictWise(): Observable<any>{
    return <Observable<any>>this.http.get(environment.coronaUPISecond);
  }
  getStateWise(): Observable<any>{
    return <Observable<any>>this.http.get(environment.coronaUPI);
  }
  getDailyChange():Observable<any>{
    return <Observable<any>>this.http.get(environment.dailyChange);
  }

  getTestData(): Observable<any>{
    return this.http.get<any>("https://api.covid19india.org/data.json");
  }

}
