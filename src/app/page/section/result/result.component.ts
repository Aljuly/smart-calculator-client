import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdditionResult, MultiplicationResult, DivisionResult, Description } from '../../../_models';
import { ComunicationService } from '../../../_services';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  description: Description;
  additionResult: AdditionResult;
  multiplicationResult: MultiplicationResult;
  divisionResult: DivisionResult;
  constructor(private comunicationService: ComunicationService) { }
  // Subscribe on changes
  ngOnInit(): void {
    this.comunicationService.DescriptionMessage
    .subscribe(description => this.description = description);
    this.comunicationService.additionResultMessage
    .subscribe(additionResult => this.additionResult = additionResult);
    this.comunicationService.multiplicationResultMessage
    .subscribe(multiplicationResult => this.multiplicationResult = multiplicationResult);
    this.comunicationService.divisionResultMessage
    .subscribe(divisionResult => this.divisionResult = divisionResult);
  }
}
