import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberStyle'
})
export class NumberStylePipe implements PipeTransform {

  transform(data: any): any {
    var x:string;
    if (data>=1000 && data<100000){
      x=(Math.round(data/100)/10).toString()+'K';
    }
    else if(data>=100000 && data<10000000){
      x=(Math.round(data/10000)/10).toString()+'L';
    }
    else if(data>=10000000){
      x=(Math.round(data/1000000)/10).toString()+'Cr';
    }
    else{
      x='-';
    }
    return x;
  }

}
