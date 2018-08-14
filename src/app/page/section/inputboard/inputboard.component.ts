import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../_services/data.service';

@Component({
  selector: 'app-inputboard',
  templateUrl: './inputboard.component.html'
})
export class InputBoardComponent implements OnInit, OnDestroy {
  id: number;
  inputForm: FormGroup;
  loading = false;
  submitted = false;
  firstnumber: string;
  secondnumber: string;
  private paramsSub: Subscription;
  constructor(
    private formBuilder,
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}
  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => (this.id = params['id'])
    );
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
      .get_result(this.id, this.firstnumber, this.secondnumber)
      .subscribe(res: any);
  }
}
