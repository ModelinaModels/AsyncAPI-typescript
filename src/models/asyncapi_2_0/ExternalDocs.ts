
class ExternalDocs {
  private _description?: string;
  private _url: string;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    description?: string,
    url: string,
    additionalProperties?: Map<string, any>,
  }) {
    this._description = input.description;
    this._url = input.url;
    this._additionalProperties = input.additionalProperties;
  }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get url(): string { return this._url; }
  set url(url: string) { this._url = url; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ExternalDocs;
