import ServerVariable from './ServerVariable';
class ServerVariables {
  private _additionalProperties?: Map<string, ServerVariable>;

  constructor(input: {
    additionalProperties?: Map<string, ServerVariable>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, ServerVariable> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, ServerVariable> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ServerVariables;
