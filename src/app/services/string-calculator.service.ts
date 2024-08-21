import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }
  add(numbers: string): number {
    console.log(numbers)
    if (!numbers) {
      return 0;
    }
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n', 2);
      const customDelimiter = parts[0].slice(2);
      delimiter = new RegExp(customDelimiter);
      numbers = parts[1];
    }
    const numberList = numbers.split(delimiter).map(num => parseInt(num, 10)).filter(num => !isNaN(num));

    return numberList.reduce((sum, num) => sum + num, 0);
  }
}
