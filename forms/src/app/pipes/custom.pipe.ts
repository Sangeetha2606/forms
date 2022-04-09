import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    debugger;
    if(value >18)
    return ('you are eligible' )
    else
      return ('You are not eligible')
    
  }

}
