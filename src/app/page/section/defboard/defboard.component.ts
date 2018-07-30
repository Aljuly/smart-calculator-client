import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defboard',
  templateUrl: './defboard.component.html',
  styleUrls: ['./defboard.component.css']
})
export class DefboardComponent {
  @Input() title: string;
  @Input() information: string;
}
