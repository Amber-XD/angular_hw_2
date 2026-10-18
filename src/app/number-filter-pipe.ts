import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFilter',
})
export class NumberFilterPipe implements PipeTransform {
  transform(numbers: number[], type: string): number[] {
    if (type == 'even') {
      return numbers.filter((n) => n % 2 == 0);
    }

    return numbers.filter((n) => n % 2 != 0);
  }
}
