import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {
  constructor(private datePipe:DatePipe){}

  transform(data: any, filterBy: any): any { 
    if(filterBy==='plannedAll'){
      return data;
    }
    else if(filterBy==='plannedUpcoming'){
      let todayStr=this.datePipe.transform((new Date()),'yyyy-MM-dd');
      return data.filter((d)=>{
        if(d.checkIn>todayStr)return d;
      })
    }
    else if(filterBy==='plannedOngoing'){
      let todayStr=this.datePipe.transform((new Date()),'yyyy-MM-dd');
      return data.filter((d)=>{
        if(d.checkIn<=todayStr && d.checkOut>=todayStr)return d;
      })
    }
    else if(filterBy==='plannedCompleted'){
      let todayStr=this.datePipe.transform((new Date()),'yyyy-MM-dd');
      return data.filter((d)=>{
        if(d.checkOut<todayStr)return d;
      })
    }
    else if(filterBy!=null && filterBy.toLowerCase()!='all'){
      return data.filter((d)=>{if(d.continent.toLowerCase()===filterBy.toLowerCase())return d});
    }
    else{
      return data;
    }
    
  }

}
