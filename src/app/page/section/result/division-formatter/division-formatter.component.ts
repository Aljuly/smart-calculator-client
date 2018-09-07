import { Step, DivisionResult } from '../../../../_models';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-division-formatter',
  templateUrl: './division-formatter.component.html',
  styleUrls: ['./division-formatter.component.css']
})
export class DivisionFormatterComponent implements OnChanges {
  @Input() divisionResult: DivisionResult;
  firstNumber: string[];
  secondNumber: string[];
  second: string[];
  stepsOut: any[];
  result: string[];
  constructor() {}

  ngOnChanges() {
    if (this.divisionResult.isEmpty()) { return; }
    let j: number;
    let diff: number;
    let i = 0;
    // lets make a first step
    this.firstNumber = Array.from(this.divisionResult.steps[0].firstnumber);
    this.secondNumber = Array.from(this.divisionResult.steps[0].secondnumber);
    this.result = Array.from(this.divisionResult.quotient.concat(this.formatFraction(this.divisionResult.fraction,
      Number(this.divisionResult.divisor))));
    let difference: string = this.divisionResult.steps[0].difference;
    this.second = Array.from(this.assemblyString(this.firstNumber.length - this.secondNumber.length + 1, ' ')
      .concat(this.divisionResult.steps[0].secondnumber));
    j = this.firstNumber.length + 1;
    // define difference for the next step
    diff = Number(difference);
    this.stepsOut = new Array();
    for (let k = 1; k < this.divisionResult.steps.length; k++) {
      i++;
      if (i === this.divisionResult.steps.length) {
        this.firstNumber = Array.from(this.removeLeadingZero(this.divisionResult.steps[k].firstnumber));
        j += this.firstNumber.length - String(diff).length;
        if (difference.length === 0) { j++; }
        this.stepsOut.push(new Step(this.divisionResult.steps[k].firstnumber, '', ''));
      } else {
        this.firstNumber = Array.from(this.removeLeadingZero(this.divisionResult.steps[k].firstnumber));
        this.secondNumber = Array.from(this.divisionResult.steps[k].secondnumber);
        difference = this.divisionResult.steps[k].difference;
        // increase indent on count of added digits
        j += this.firstNumber.length - String(diff).length;
        // if the difference is 0 than omit it
        if (diff === 0) { j++; }
        // define the difference for the next step
        diff = Number(difference);
        // one step to output
        const stepOut = {
          firstnumber: Array.from(this.assemblyString(j, ' ').concat(this.divisionResult.steps[k].firstnumber)),
          secondnumber: Array.from(this.assemblyString(j, ' ').concat(this.divisionResult.steps[k].secondnumber))
        };
        this.stepsOut.push(stepOut);
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
    if (numberOfSymbols === 0) { return ''; }
    let result = '';
    for (let i = 0; i < numberOfSymbols; i++) {
        result += symbol;
    }
    return result;
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
