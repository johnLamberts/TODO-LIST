import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges {

  @Input('appToolTip') toolTipContent: string;

  tippyInstance: any;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.toolTipContent
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('insde changed')
      if(changes['appToolTip']) {
        //content has changed'

        console.log('test');
        this.updateToolTip();
      }
  }


  updateToolTip() {
    if(this.tippyInstance) {
      this.tippyInstance.setContent(this.toolTipContent);
    }
  }
}
