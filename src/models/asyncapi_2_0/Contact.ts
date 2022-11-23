
class Contact {
  private _reservedName?: string;
  private _url?: string;
  private _email?: string;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    reservedName?: string,
    url?: string,
    email?: string,
    additionalProperties?: Map<string, any>,
  }) {
    this._reservedName = input.reservedName;
    this._url = input.url;
    this._email = input.email;
    this._additionalProperties = input.additionalProperties;
  }

  get reservedName(): string | undefined { return this._reservedName; }
  set reservedName(reservedName: string | undefined) { this._reservedName = reservedName; }

  get url(): string | undefined { return this._url; }
  set url(url: string | undefined) { this._url = url; }

  get email(): string | undefined { return this._email; }
  set email(email: string | undefined) { this._email = email; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Contact;
