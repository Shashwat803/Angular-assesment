import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumber {

    regexStr = '^[0-9]*$';
    constructor(private el: ElementRef) { }
  
    @Input() OnlyNumber: boolean | undefined;
  
    @HostListener('keydown', ['$event']) onKeyDown(event:any) {
      let e = <KeyboardEvent> event;
      if (Number(e.key)) {
        // let ch = String.fromCharCode(e.keyCode);
        // let regEx =  new RegExp(this.regexStr);    
        // if(regEx.test(ch))
          return;
        }
        else{e.preventDefault();}

    }
  }