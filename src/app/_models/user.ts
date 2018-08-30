/**
 * Class that strores info about registered user
 * @author Alexander Zhulinsky
 * @version 1.0 07 Aug 2018
 */
export class User {

  private _username: string;
  private _login: string;
  private _email: string;
  private _password: string;

  constructor(
    username?: string,
    login?: string,
    email?: string,
    password?: string ) {
      this._username = username || void 0;
      this._login = login || void 0;
      this._email = email || void 0;
      this._password = password ||  void 0;
    }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
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
    return this._login;
  }
  public set firstName(value: string) {
    this._login = value;
  }

  public isEmpty(): boolean {
    return (this._username == null && this._email == null);
  }
}
