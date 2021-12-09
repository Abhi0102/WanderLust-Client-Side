import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateTotal'
})
export class CalculateTotalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
