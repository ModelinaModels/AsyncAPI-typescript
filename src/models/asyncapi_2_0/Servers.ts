import Server from './Server';
class Servers {
  private _additionalProperties?: Map<string, Server>;

  constructor(input: {
    additionalProperties?: Map<string, Server>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, Server> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, Server> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Servers;
