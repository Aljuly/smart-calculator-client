import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputboard',
  templateUrl: './inputboard.component.html'
})
export class InputBoardComponent {
  @Input() id: number;
  firstnumber: string;
  secondnumber: string;
  firstInputOnKey(value: string) {
    this.firstnumber = value;
  }

  secondInputOnKey(value: string) {
    this.secondnumber = value;
  }

  calculate() {}
}
