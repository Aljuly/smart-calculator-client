import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../_services/data.service';
import { Description } from '../../_models';
import { deserialize } from 'json-typescript-mapper';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private comunicationService: ComunicationService
  ) {}
  ngOnInit() {
    // Get the selected operation
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => (this.id = params['id'])
    );
    // Look up on the server for it's description
    this.dataService
      .get_description(this.paramsSub)
      .subscribe((res: any) => {
        this.description = deserialize(Description, res);
      });
    // Broadcast this description
    this.comunicationService.changeDescription(this.description);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
