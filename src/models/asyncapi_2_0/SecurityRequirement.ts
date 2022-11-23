
class SecurityRequirement {
  private _additionalProperties?: Map<string, (string | any)[]>;

  constructor(input: {
    additionalProperties?: Map<string, (string | any)[]>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, (string | any)[]> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, (string | any)[]> | undefined) { this._additionalProperties = additionalProperties; }
}
export default SecurityRequirement;
