import { Component, Input } from "@angular/core";

@Component({
  selector: "inputboard",
  templateUrl: "./inputboard.component.html",
  styleUrls: ["./inputboard.component.css"]
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
