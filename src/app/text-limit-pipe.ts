import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit',
})
export class TextLimitPipe implements PipeTransform {
  transform(text: string, limit: number): string {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }

    return text;
  }
}
