import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeData'
})
export class CustomeDataPipe implements PipeTransform {

  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        var temprature = (value - 32) / 1.8;
        return temprature.toFixed(2);
      }
      else if (unit === 'F') {
        var temprature = (value * 1.8) + 32
        return temprature.toFixed(2);
      }
    }
    return;
    
  }
}


