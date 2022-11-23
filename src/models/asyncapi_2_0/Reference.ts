
class Reference {
  private _ref: string;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    ref: string,
    additionalProperties?: Map<string, any>,
  }) {
    this._ref = input.ref;
    this._additionalProperties = input.additionalProperties;
  }

  get ref(): string { return this._ref; }
  set ref(ref: string) { this._ref = ref; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Reference;
