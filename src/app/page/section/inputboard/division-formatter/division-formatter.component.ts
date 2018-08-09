import { Step } from '../../../../_models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './division-formatter.component.html',
  styleUrls: ['./division-formatter.component.css']
})
export class DivisionFormatterComponent implements OnInit {
  @Input() dividend: string;
  @Input() divisor: string;
  @Input() quotient: string;
  @Input() fraction: string;
  @Input() steps: Step[];
  second: string;
  stepsOut: Step[];
  result: string;
  constructor() {}

  ngOnInit() {
    let j: number;
    let diff: number;
    let i = 0;
    // lets make a first step
    let firstNumber: string = this.steps[0].firstnumber;
    let secondNumber: string = this.steps[0].secondnumber;
    this.result = this.quotient.concat(this.formatFraction(this.fraction, Number(this.divisor)));
    let difference: string = this.steps[0].difference;
    this.second = this.assemblyString(firstNumber.length - secondNumber.length + 1, ' ')
      .concat(secondNumber);
    j = firstNumber.length + 1;
    // define difference for the next step
    diff = Number(difference);
    for (let k = 1; k < this.steps.length; k++) {
      i++;
      if (i === this.steps.length) {
        firstNumber = this.removeLeadingZero(this.steps[k].firstnumber);
        j += firstNumber.length - String(diff).length;
        if (difference.length === 0) { j++; }
        this.stepsOut.push(new Step(firstNumber, '', ''));
      } else {
        firstNumber = this.removeLeadingZero(this.steps[k].firstnumber);
        secondNumber = this.steps[k].secondnumber;
        difference = this.steps[k].difference;
        // increase indent on count of added digits
        j += firstNumber.length - String(diff).length;
        // if the difference is 0 than omit it
        if (diff === 0) { j++; }
        // define the difference for the next step
        diff = Number(difference);
        this.stepsOut.push(new Step(this.assemblyString(j, ' ').concat(firstNumber),
          this.assemblyString(j, ' ').concat(secondNumber), ''));
      }
    }
  }
  // Utility function for removing leading zero (if exists)
  private removeLeadingZero(str: string) {
    if (str.length > 1 && str.charAt(0) === '0') {
      str = ' ' + str.substring(1);
    }
    return str;
  }
  // Utility function that forms string from given char of given length
  private assemblyString(numberOfSymbols: number, symbol: string) {
    return new Array(numberOfSymbols).join(symbol);
  }
  // formatting fraction with periodic part
  private formatFraction(fraction: string, divisor: number) {
    let denominator: number;
    if (fraction.length === 0) { return ''; }
    fraction.concat(' ');
    if (divisor % 2 === 0) {
      for (let nines = 1; nines < fraction.length; nines++) {
        for (let zeros = 1; zeros + nines < fraction.length - nines; zeros++) {
          denominator = Number(this.assemblyString(nines, '9')
            .concat(this.assemblyString(zeros, '0')));
          if (denominator % divisor === 0) {
            return '.'.concat(fraction.substring(0, zeros),
              '(', fraction.substring(zeros, zeros + nines), ')');
          }
        }
      }
    } else {
      for (let nines = String(divisor).length; nines < fraction.length; nines++) {
        denominator = Number(this.assemblyString(nines, '9'));
        if (denominator % divisor === 0) {
          return '.'.concat('(', fraction.substring(0, nines), ')');
        }
      }
    }
    return '.'.concat(fraction.substring(0, fraction.length - 1));
  }
}
