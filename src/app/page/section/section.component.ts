import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../_services/data.service';
import { Description } from '../../_models';
import { JsonConvert, OperationMode } from 'json2typescript';
import { ComunicationService } from '../../_services';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, OnDestroy {
  id: number;
  paramsSub: any;
  description: Description;
  jsonConvert: JsonConvert;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private comunicationService: ComunicationService
  ) {}
  ngOnInit() {
    // Check the detailed reference in the chapter "JsonConvert class properties and methods"
    this.jsonConvert = new JsonConvert();
    this.jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
    this.jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    // Get the selected operation
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => (this.id = params['id'])
    );
    // Look up on the server for selected operation description
    this.dataService
      .get_description(this.paramsSub)
      .subscribe((res: any) => {
        this.description = this.jsonConvert.deserialize(Description, res);
      });
    // Broadcast this description
    this.comunicationService.changeDescription(this.description);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
