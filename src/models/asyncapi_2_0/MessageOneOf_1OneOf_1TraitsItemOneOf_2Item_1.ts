
class MessageOneOf_1OneOf_1TraitsItemOneOf_2Item_1 {
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    additionalProperties?: Map<string, any>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default MessageOneOf_1OneOf_1TraitsItemOneOf_2Item_1;
