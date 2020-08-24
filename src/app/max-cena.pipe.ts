import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxCena'
})
export class MaxCenaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
