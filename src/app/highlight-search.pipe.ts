import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    const re = new RegExp(args, 'gi'); // 'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    const match = value.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      return value;
    }
    return value.replace(re, '<mark>' + args.toLowerCase() + '</mark>');
}

}
