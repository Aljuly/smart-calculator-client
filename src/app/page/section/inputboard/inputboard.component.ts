import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inputboard',
  templateUrl: './inputboard.component.html'
})
export class InputBoardComponent implements OnInit, OnDestroy  {
  @Input() id: number;
  firstnumber: string;
  secondnumber: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {}
  ngOnDestroy() {}
  calculate() {}
}
