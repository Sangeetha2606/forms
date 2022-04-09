import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  isElementSelected: boolean= false;
  public color: string="red";
  
  
  constructor(private el: ElementRef) { }
   @HostListener('click') 
   private onClick(){
         this.isElementSelected=!this.isElementSelected;
          if(this.isElementSelected){
            this.el.nativeElement.setAttribute('style','background:'+ this.color);
          }else {
            this.el.nativeElement.removeAttribute('style');
          }
          }
   }


