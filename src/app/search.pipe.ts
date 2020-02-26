import {Component, NgModule, VERSION, Pipe, PipeTransform} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  public value: any;
  transform(term: any, args: any): any {
    if (!args) {
      return term;
    }
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = term.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      return term;
    }

     this.value.replace(re, '<mark>' + match[0] + '</mark>');
    return this.sanitizer.bypassSecurityTrustHtml(this.value);
  }

}
