import Schema from './Schema';
class Parameter {
  private _description?: string;
  private _schema?: Schema;
  private _reservedLocation?: string;
  private _ref?: string;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    description?: string,
    schema?: Schema,
    reservedLocation?: string,
    ref?: string,
    additionalProperties?: Map<string, any>,
  }) {
    this._description = input.description;
    this._schema = input.schema;
    this._reservedLocation = input.reservedLocation;
    this._ref = input.ref;
    this._additionalProperties = input.additionalProperties;
  }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get schema(): Schema | undefined { return this._schema; }
  set schema(schema: Schema | undefined) { this._schema = schema; }

  get reservedLocation(): string | undefined { return this._reservedLocation; }
  set reservedLocation(reservedLocation: string | undefined) { this._reservedLocation = reservedLocation; }

  get ref(): string | undefined { return this._ref; }
  set ref(ref: string | undefined) { this._ref = ref; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Parameter;
