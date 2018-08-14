import { JsonProperty } from 'json-typescript-mapper';

/**
 * Class that strores info about multiplication result
 * @author Alexander Zhulinsky
 * @version 1.0 13 Aug 2018
 */
export class MultiplicationResult {
    private _firstFactor: string;
    private _secondFactor: string;
    private _product: string;
    private _steps: string[];
    constructor() {
        this._firstFactor = void 0;
        this._secondFactor = void 0;
        this._product = void 0;
        this._steps = void 0;
    }
    public get steps(): string[] {
        return this._steps;
    }
    @JsonProperty('steps')
    public set steps(value: string[]) {
        this._steps = value;
    }
    public get product(): string {
        return this._product;
    }
    @JsonProperty('product')
    public set product(value: string) {
        this._product = value;
    }
    public get secondFactor(): string {
        return this._secondFactor;
    }
    @JsonProperty('secondfactor')
    public set secondFactor(value: string) {
        this._secondFactor = value;
    }
    public get firstFactor(): string {
        return this._firstFactor;
    }
    @JsonProperty('firstfactor')
    public set firstFactor(value: string) {
        this._firstFactor = value;
    }
}
