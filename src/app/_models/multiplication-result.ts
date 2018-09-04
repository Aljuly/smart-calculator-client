import { JsonObject, JsonProperty } from 'json2typescript';

/**
 * Class that strores info about multiplication result
 * @author Alexander Zhulinsky
 * @version 1.0 13 Aug 2018
 */
@JsonObject('MultiplicationResult')
export class MultiplicationResult {
    @JsonProperty('firstfactor', String)
    private _firstFactor: string;
    @JsonProperty('secondfactor', String)
    private _secondFactor: string;
    @JsonProperty('product', String)
    private _product: string;
    @JsonProperty('steps', [String])
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
    public set steps(value: string[]) {
        this._steps = value;
    }
    public get product(): string {
        return this._product;
    }
    public set product(value: string) {
        this._product = value;
    }
    public get secondFactor(): string {
        return this._secondFactor;
    }
    public set secondFactor(value: string) {
        this._secondFactor = value;
    }
    public get firstFactor(): string {
        return this._firstFactor;
    }
    public set firstFactor(value: string) {
        this._firstFactor = value;
    }
}
