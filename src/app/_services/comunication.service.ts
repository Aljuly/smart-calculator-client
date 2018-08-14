import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Description, DivisionResult, AdditionResult, MultiplicationResult } from '../_models';

@Injectable()
export class ComunicationService {

    private descriptionMessageSource = new BehaviorSubject(new Description());
    private additionResultMessageSource = new BehaviorSubject(new AdditionResult());
    private multiplicationResultMessageSource = new BehaviorSubject(new MultiplicationResult());
    private divisionResultMassageSource = new BehaviorSubject(new DivisionResult());
    DescriptionMessage = this.descriptionMessageSource.asObservable();
    divisionResultMessage = this.divisionResultMassageSource.asObservable();
    constructor() { }

    changeDescription(description: Description) {
        this.descriptionMessageSource.next(description);
    }

    changeAdditionResult(additionResult: AdditionResult) {
        this.additionResultMessageSource.next(additionResult);
    }

    changeMultiplycationResult(multiplicationResult: MultiplicationResult) {
        this.multiplicationResultMessageSource.next(multiplicationResult);
    }

    changeDivisionResult(divisionResult: DivisionResult) {
        this.divisionResultMassageSource.next(divisionResult);
    }


}

