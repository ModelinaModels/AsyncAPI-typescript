import BindingsObject from './BindingsObject';
class ComponentsChannelBindings {
  private _additionalProperties?: Map<string, BindingsObject>;

  constructor(input: {
    additionalProperties?: Map<string, BindingsObject>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, BindingsObject> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, BindingsObject> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ComponentsChannelBindings;
