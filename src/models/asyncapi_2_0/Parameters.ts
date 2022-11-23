import Parameter from './Parameter';
class Parameters {
  private _additionalProperties?: Map<string, Parameter>;

  constructor(input: {
    additionalProperties?: Map<string, Parameter>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, Parameter> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, Parameter> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Parameters;
