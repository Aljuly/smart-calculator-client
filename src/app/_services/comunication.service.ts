import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Description } from '../_models';

@Injectable()
export class ComunicationService {

    private descriptionMessageSource = new BehaviorSubject(new Description(0, '', ''));
    DescriptionMessage = this.descriptionMessageSource.asObservable();

    constructor() { }

    changeDescription(description: Description) {
        this.descriptionMessageSource.next(description);
    }
}

