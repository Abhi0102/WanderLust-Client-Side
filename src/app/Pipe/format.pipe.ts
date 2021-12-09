import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(data: any): any {
    let e=/\?/gi;
    return data.replace(e,'\'');
  }

}
