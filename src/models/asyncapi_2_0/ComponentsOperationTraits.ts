import OperationTrait from './OperationTrait';
class ComponentsOperationTraits {
  private _additionalProperties?: Map<string, OperationTrait>;

  constructor(input: {
    additionalProperties?: Map<string, OperationTrait>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, OperationTrait> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, OperationTrait> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ComponentsOperationTraits;
