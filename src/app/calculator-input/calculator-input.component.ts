import { Component } from '@angular/core';
import { StringCalculatorService } from '../services/string-calculator.service';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.scss']
})
export class CalculatorInputComponent {
  inputString:any='';
  result: number | null = null;
  errorMessage: any = null;

  constructor(private calculatorService: StringCalculatorService) {}

  onCalculate() {
    console.log(this.inputString)
    this.result = this.calculatorService.add(this.inputString);
  

  }

}
