import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../../_services/data.service';
import { ComunicationService } from '../../../_services';
import { Description, DivisionResult, MultiplicationResult, AdditionResult } from '../../../_models';
import { JsonConvert, OperationMode } from 'json2typescript';

@Component({
  selector: 'app-inputboard',
  templateUrl: './inputboard.component.html'
})
export class InputBoardComponent implements OnInit {
  inputForm: FormGroup;
  loading = false;
  submitted = false;
  firstnumber: string;
  secondnumber: string;
  additionResult: AdditionResult;
  multiplicationResult: MultiplicationResult;
  divisionResult: DivisionResult;
  jsonConvert: JsonConvert;
  id: number;
  private numberValidator = '^[0-9]{1,6}$';
  constructor(
    private formBuilder: FormBuilder,
    // private activatedRoute: ActivatedRoute,
    private data: DataService,
    private comunicationService: ComunicationService
  ) {}
  ngOnInit() {
    this.comunicationService.DescriptionMessage.subscribe((res) => {
      this.id = res.id;
    });
    // Check the detailed reference in the chapter "JsonConvert class properties and methods"
    this.jsonConvert = new JsonConvert();
    this.jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
    this.jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    // Input data
    this.inputForm = this.formBuilder.group({
      firstnumber: ['', [Validators.required, Validators.pattern(this.numberValidator)]],
      secondnumber: ['', [Validators.required, Validators.pattern(this.numberValidator)]]
    });
  }
  // getter for access to the forms fields
  get f() {
    return this.inputForm.controls;
  }

  // formreset
  onResetClick(): void {
    this.inputForm.reset();
  }

  // Send request to the calculation service
  onSubmit() {
    this.submitted = true;
    // return if form is invalid
    if (this.inputForm.invalid) {
      return;
    }
    // Make Http request
    this.data
      .get_result(this.id, this.f.firstnumber.value, this.f.secondnumber.value)
      .subscribe((res: any) => {
        // depends on selected operation type read corresponding responce
        switch (res.id) {
          case 1: {
            this.additionResult = this.jsonConvert.deserialize(res, AdditionResult);
            this.additionResult.setAddition();
            // broadcast result
            this.comunicationService.changeAdditionResult(this.additionResult);
            break;
          }
          case 2: {
            this.additionResult = this.jsonConvert.deserialize(res, AdditionResult);
            this.additionResult.setSubtraction();
            // broadcast result
            this.comunicationService.changeAdditionResult(this.additionResult);
            break;
          }
          case 3: {
            this.multiplicationResult = this.jsonConvert.deserialize(res, MultiplicationResult);
            // broadcast result
            this.comunicationService.changeMultiplycationResult(this.multiplicationResult);
            break;
          }
          case 4:
          case 5: {
            this.divisionResult = this.jsonConvert.deserialize(res, DivisionResult);
            // broadcast result
            this.comunicationService.changeDivisionResult(this.divisionResult);
            break;
          }
        }
      });
  }
}
