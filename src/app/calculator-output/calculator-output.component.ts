import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.scss']
})
export class CalculatorOutputComponent implements OnInit {

  @Input() result: number | null = null;

  ngOnInit(): void {
    console.log(this.result)
  }

}
