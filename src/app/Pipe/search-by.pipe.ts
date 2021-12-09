import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(data: any, searchBy: any): any {
    if(searchBy){
      let newList;
      // console.log(searchBy.toUpperCase())
      let regex=new RegExp(searchBy.toUpperCase());
    newList= data.filter((d)=>{
      // console.log(d.continent)
      if(regex.test(d.continent.toUpperCase()))
      return d;
      // console.log(d.details.highlights)
      else if(regex.test(d.details.highlights.toUpperCase()))
      return d;
    })
    // console.log(newList)
    return newList;
  }
  else return data;
    
    // return null;
  }

}
