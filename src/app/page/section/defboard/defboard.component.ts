import { Component, Input } from "@angular/core";

@Component({
  selector: "defboard",
  templateUrl: "./defboard.component.html",
  styleUrls: ["./defboard.component.css"]
})
export class DefboardComponent {
  @Input() title: string;
  @Input() description: string;
}
