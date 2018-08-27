import { Step } from './step';
import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * Class that strores info about division result
 * @author Alexander Zhulinsky
 * @version 1.0 13 Aug 2018
 */
@JsonObject('DivisionResult')
export class DivisionResult {
    private _dividend: string;
    private _divisor: string;
    private _quotient: string;
    private _reminder: string;
    private _alert: string;
    private _fraction: string;
    private _steps: Step[];

    constructor() {
        this._dividend = void 0;
        this._divisor = void 0;
        this._dividend = void 0;
        this._quotient = void 0;
        this._reminder = void 0;
        this._alert = void 0;
        this._fraction = void 0;
        this._steps = void 0;
    }
    @JsonProperty('dividend', String)
    public set dividend(value: string) {
        this._dividend = value;
    }
    public get dividend(): string {
        return this._dividend;
    }
    public get divisor(): string {
        return this._divisor;
    }
    @JsonProperty('divisor', String)
    public set divisor(value: string) {
        this._divisor = value;
    }
    public get quotient(): string {
        return this._quotient;
    }
    @JsonProperty('quotient', String)
    public set quotient(value: string) {
        this._quotient = value;
    }
    public get reminder(): string {
        return this._reminder;
    }
    @JsonProperty('reminder', String)
    public set reminder(value: string) {
        this._reminder = value;
    }
    public get alert(): string {
        return this._alert;
    }
    @JsonProperty('alert', String)
    public set alert(value: string) {
        this._alert = value;
    }
    public get fraction(): string {
        return this._fraction;
    }
    @JsonProperty('fraction', String)
    public set fraction(value: string) {
        this._fraction = value;
    }
    public get steps(): Step[] {
        return this._steps;
    }
    @JsonProperty('steps', [Step])
    public set steps(value: Step[]) {
        this._steps = value;
    }
}
