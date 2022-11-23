import CoreSchemaMetaMinusSchema from './CoreSchemaMetaMinusSchema';
class AnonymSchema28 {
  private _additionalProperties?: Map<string, CoreSchemaMetaMinusSchema | (string | any)[]>;

  constructor(input: {
    additionalProperties?: Map<string, CoreSchemaMetaMinusSchema | (string | any)[]>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, CoreSchemaMetaMinusSchema | (string | any)[]> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, CoreSchemaMetaMinusSchema | (string | any)[]> | undefined) { this._additionalProperties = additionalProperties; }
}
export default AnonymSchema28;
