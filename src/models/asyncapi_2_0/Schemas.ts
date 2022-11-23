import Schema from './Schema';
class Schemas {
  private _additionalProperties?: Map<string, Schema>;

  constructor(input: {
    additionalProperties?: Map<string, Schema>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, Schema> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, Schema> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Schemas;
