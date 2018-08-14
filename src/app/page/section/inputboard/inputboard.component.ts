import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../_services/data.service';
import { ComunicationService } from '../../../_services';
import { Description, DivisionResult, MultiplicationResult, AdditionResult } from '../../../_models';
import { deserialize } from 'json-typescript-mapper';

@Component({
  selector: 'app-inputboard',
  templateUrl: './inputboard.component.html'
})
export class InputBoardComponent implements OnInit, OnDestroy {
  inputForm: FormGroup;
  loading = false;
  submitted = false;
  firstnumber: string;
  secondnumber: string;
  private paramsSub: Subscription;
  description: Description;
  additionResult: AdditionResult;
  multiplicationResult: MultiplicationResult;
  divisionResult: DivisionResult;
  constructor(
    private formBuilder,
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private comunicationService: ComunicationService
  ) {}
  ngOnInit() {
    this.comunicationService.DescriptionMessage.subscribe(description => this.description = description);
    /*
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => (this.id = params['id'])
    );
    */
    this.inputForm = this.formBuilder.group({
      firstnumber: ['', Validators.required],
      secondnumber: ['', Validators.required]
    });
  }
  // getter for access to the forms fields
  get f() {
    return this.inputForm.controls;
  }
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
  // Send request to the calculation service
  calculate() {
    // return if form is invalid
    if (this.inputForm.invalid) {
      return;
    }
    // Make Http request
    this.data
      .get_result(this.description.id, this.firstnumber, this.secondnumber)
      .subscribe((res: any) => {
        // depends on selected operation type read corresponding responce
        switch (this.description.id) {
          case 1: {
            this.additionResult = new AdditionResult();
            this.additionResult.firstTerm = this.firstnumber;
            this.additionResult.secondTerm = this.secondnumber;
            this.additionResult.sum = res;
            this.additionResult.setAddition();
            // broadcast result
            this.comunicationService.changeAdditionResult(this.additionResult);
            break;
          }
          case 2: {
            this.additionResult = new AdditionResult();
            this.additionResult.firstTerm = this.firstnumber;
            this.additionResult.secondTerm = this.secondnumber;
            this.additionResult.sum = res;
            this.additionResult.setSubtraction();
            // broadcast result
            this.comunicationService.changeAdditionResult(this.additionResult);
            break;
          }
          case 3: {
            this.multiplicationResult = deserialize(MultiplicationResult, res);
            // broadcast result
            this.comunicationService.changeMultiplycationResult(this.multiplicationResult);
            break;
          }
          case 4:
          case 5: {
            this.divisionResult = deserialize(DivisionResult, res);
            // broadcast result
            this.comunicationService.changeDivisionResult(this.divisionResult);
            break;
          }
        }
      });
  }
}
