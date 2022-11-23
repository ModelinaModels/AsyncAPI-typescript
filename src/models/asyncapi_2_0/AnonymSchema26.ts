import CoreSchemaMetaMinusSchema from './CoreSchemaMetaMinusSchema';
class AnonymSchema26 {
  private _additionalProperties?: Map<string, CoreSchemaMetaMinusSchema>;

  constructor(input: {
    additionalProperties?: Map<string, CoreSchemaMetaMinusSchema>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, CoreSchemaMetaMinusSchema> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, CoreSchemaMetaMinusSchema> | undefined) { this._additionalProperties = additionalProperties; }
}
export default AnonymSchema26;
