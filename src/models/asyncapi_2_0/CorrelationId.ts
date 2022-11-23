
class CorrelationId {
  private _description?: string;
  private _reservedLocation: string;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    description?: string,
    reservedLocation: string,
    additionalProperties?: Map<string, any>,
  }) {
    this._description = input.description;
    this._reservedLocation = input.reservedLocation;
    this._additionalProperties = input.additionalProperties;
  }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get reservedLocation(): string { return this._reservedLocation; }
  set reservedLocation(reservedLocation: string) { this._reservedLocation = reservedLocation; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default CorrelationId;
