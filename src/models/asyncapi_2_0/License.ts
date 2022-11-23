
class License {
  private _reservedName: string;
  private _url?: string;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    reservedName: string,
    url?: string,
    additionalProperties?: Map<string, any>,
  }) {
    this._reservedName = input.reservedName;
    this._url = input.url;
    this._additionalProperties = input.additionalProperties;
  }

  get reservedName(): string { return this._reservedName; }
  set reservedName(reservedName: string) { this._reservedName = reservedName; }

  get url(): string | undefined { return this._url; }
  set url(url: string | undefined) { this._url = url; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default License;
