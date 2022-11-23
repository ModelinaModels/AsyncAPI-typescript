
class ServerVariable {
  private _reservedEnum?: (string | any)[];
  private _reservedDefault?: string;
  private _description?: string;
  private _examples?: (string | any)[];
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    reservedEnum?: (string | any)[],
    reservedDefault?: string,
    description?: string,
    examples?: (string | any)[],
    additionalProperties?: Map<string, any>,
  }) {
    this._reservedEnum = input.reservedEnum;
    this._reservedDefault = input.reservedDefault;
    this._description = input.description;
    this._examples = input.examples;
    this._additionalProperties = input.additionalProperties;
  }

  get reservedEnum(): (string | any)[] | undefined { return this._reservedEnum; }
  set reservedEnum(reservedEnum: (string | any)[] | undefined) { this._reservedEnum = reservedEnum; }

  get reservedDefault(): string | undefined { return this._reservedDefault; }
  set reservedDefault(reservedDefault: string | undefined) { this._reservedDefault = reservedDefault; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get examples(): (string | any)[] | undefined { return this._examples; }
  set examples(examples: (string | any)[] | undefined) { this._examples = examples; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ServerVariable;
