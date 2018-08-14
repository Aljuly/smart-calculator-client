import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../../_services';
import { Description } from '../../../_models';

@Component({
  selector: 'app-defboard',
  templateUrl: './defboard.component.html',
  styleUrls: ['./defboard.component.css']
})
export class DefboardComponent implements OnInit {
  description: Description;
  constructor(private comunicationService: ComunicationService) {  }
  ngOnInit(): void {
    // Be ready to optain actual data
    this.comunicationService.DescriptionMessage.subscribe(description => this.description = description);
  }
}

