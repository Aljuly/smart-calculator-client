/**
 * Class that strores info about registered user
 * @author Alexander Zhulinsky
 * @version 1.0 07 Aug 2018
 */
export class User {

  private _id: number;
  private _username: string;
  private _password: string;
  private _firstName: string;

  private _lastName: string;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}
