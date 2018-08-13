import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../_services/data.service';
import { DefboardComponent } from './defboard/defboard.component';
import { InputBoardComponent } from './inputboard/inputboard.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, OnDestroy {
  id: number;
  paramsSub: any;
  @ViewChild(DefboardComponent)
  private defboard: DefboardComponent;
  @ViewChild(InputBoardComponent)
  private inputBoard: InputBoardComponent;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => (this.id = params['id'])
    );
    this.dataService
      .get_description(this.paramsSub)
      .subscribe((res: DefboardComponent) => {
        this.defboard = res;
      });
    // this.inputBoard.id = this.id;
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
