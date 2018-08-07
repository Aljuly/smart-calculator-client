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

  constructor(firstnumber: string, secondnumber: string, difference: string) {
    this._firstnumber = firstnumber;
    this._secondnumber = secondnumber;
    this._difference = difference;
  }

  get firstnumber(): string {
    return this._firstnumber;
  }
  set firstnumber(value: string) {
    this._firstnumber = value;
  }

  get secondnumber(): string {
    return this._secondnumber;
  }
  set secondnumber(value: string) {
    this._secondnumber = value;
  }

  get difference(): string {
    return this._difference;
  }
  set difference(value: string) {
    this._difference = value;
  }

}
