// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'tokhr'
// })
// export class TokhrPipe implements PipeTransform {

//   transform(price:number): unknown {
//     let res: number = price * 4100;
//     let roundedKHR = Math.round(res / 100) * 100;
//     let formatted = roundedKHR.toLocaleString() + " ៛";
//     return formatted;
//   }

// }




//   import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'tokhr'
// })
// export class TokhrPipe implements PipeTransform {

//   transform(amount: number, rate: number, type: 'out' | 'in' = 'out'): string {
//     const res = amount * rate;

//     if (type === 'out') {
//       // Format the full amount with commas
//       return res.toLocaleString() + ' ៛';
//     } else {
//       // Round to nearest 100 and format
//       const rounded = Math.round(res / 100) * 100;
//       return rounded.toLocaleString() + ' ៛';
//     }
//   }

// }




import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokhr'
})
export class TokhrPipe implements PipeTransform {

  transform(amount: number, rate: number, type: 'out' | 'in' | 'floor' = 'out'): string {
    const res = amount * rate;
    

    if (type === 'floor') {
    
      const rounded = Math.floor(res / 100) * 100;
      return rounded.toLocaleString() + ' ៛';
    } else if (type === 'in') {
      
      const rounded = Math.round(res / 100) * 100;
      return rounded.toLocaleString() + ' ៛';
    }

    return res.toLocaleString() + ' ៛';
  }
}
