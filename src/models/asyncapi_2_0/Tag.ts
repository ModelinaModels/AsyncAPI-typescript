import ExternalDocs from './ExternalDocs';
class Tag {
  private _reservedName: string;
  private _description?: string;
  private _externalDocs?: ExternalDocs;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    reservedName: string,
    description?: string,
    externalDocs?: ExternalDocs,
    additionalProperties?: Map<string, any>,
  }) {
    this._reservedName = input.reservedName;
    this._description = input.description;
    this._externalDocs = input.externalDocs;
    this._additionalProperties = input.additionalProperties;
  }

  get reservedName(): string { return this._reservedName; }
  set reservedName(reservedName: string) { this._reservedName = reservedName; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get externalDocs(): ExternalDocs | undefined { return this._externalDocs; }
  set externalDocs(externalDocs: ExternalDocs | undefined) { this._externalDocs = externalDocs; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Tag;
