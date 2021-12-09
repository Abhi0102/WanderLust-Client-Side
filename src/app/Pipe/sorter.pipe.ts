import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(data: any, sortBy: any): any {
    if(sortBy==='priceInc'){
      return data.sort((a,b)=>{
        if((a.chargePerPerson*(1-a.discount/100)+a.flightCharge)>b.chargePerPerson*(1-b.discount/100)+b.flightCharge){
          return 1;
        }return -1;
      })
    }
    else if(sortBy==='priceDec'){
      return data.sort((a,b)=>{
        if((a.chargePerPerson*(1-a.discount/100)+a.flightCharge)<b.chargePerPerson*(1-b.discount/100)+b.flightCharge){
          return 1;
        }return -1;
      })

    }
    else if(sortBy==="destInc"){
      return data.sort((a,b)=>{
        if(a.destinationName>b.destinationName){
          return 1;
        }return -1;
      })
    }
    else if(sortBy==="destDec"){
      return data.sort((a,b)=>{
        if(a.destinationName<b.destinationName){
          return 1;
        }return -1;
      })
    }
    else if(sortBy==="nightInc"){
      return data.sort((a,b)=>{
        if(a.noOfNights>b.noOfNights){
          return 1;
        }return -1;
      })
    }
    else if(sortBy==="nightDec"){
      return data.sort((a,b)=>{
        if(a.noOfNights<b.noOfNights){
          return 1;
        }return -1;
      })
    }
    return data;
  }

}
