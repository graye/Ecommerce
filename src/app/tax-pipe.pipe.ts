import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxPipe'
})
export class TaxPipePipe implements PipeTransform {

  transform(num: number, tax?: number): any {

    let rate = 7;
    if (tax || tax === 0) {
      rate = tax;
    }

    return num * rate / 100;
  }

}
