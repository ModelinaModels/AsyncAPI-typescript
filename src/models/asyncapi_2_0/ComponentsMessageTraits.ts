import MessageTrait from './MessageTrait';
class ComponentsMessageTraits {
  private _additionalProperties?: Map<string, MessageTrait>;

  constructor(input: {
    additionalProperties?: Map<string, MessageTrait>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, MessageTrait> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, MessageTrait> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ComponentsMessageTraits;
