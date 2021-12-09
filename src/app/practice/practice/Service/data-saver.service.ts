import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataSaverService {
  // cor:Corona;
  dataStateWise: AsyncSubject<any>=new AsyncSubject<any>();
  dataDistrictWise: BehaviorSubject<any> =new BehaviorSubject<any>([]);
  dataDailyChanges: BehaviorSubject<any> =new BehaviorSubject<any>({});
  constructor(private http: HttpClient) { }

  setCoronaDataStateWise(data:any){
    this.dataStateWise.next(data);
  }
  setCoronaDataDistrictWise(data:any){
    this.dataDistrictWise.next(data);
  }
  setCoronaDataDailyChanges(data:any){
    this.dataDailyChanges.next(data);
  }
}
