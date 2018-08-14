import { JsonProperty } from 'json-typescript-mapper';

/**
 * Class for storing data of the one step of the calculations
 *
 * @author Alexander Zhulinsky
 * @version 1.0 07 Aug 2018
 */
export class Step {
  private _firstnumber: string;
  private _secondnumber: string;
  private _difference: string;

  constructor() {
    this._firstnumber = void 0;
    this._secondnumber = void 0;
    this._difference = void 0;
  }

  get firstnumber(): string {
    return this._firstnumber;
  }
  @JsonProperty('firstNumber')
  set firstnumber(value: string) {
    this._firstnumber = value;
  }

  get secondnumber(): string {
    return this._secondnumber;
  }
  @JsonProperty('secondNumber')
  set secondnumber(value: string) {
    this._secondnumber = value;
  }

  get difference(): string {
    return this._difference;
  }
  @JsonProperty('difference')
  set difference(value: string) {
    this._difference = value;
  }

}
