import Tag from './Tag';
import ExternalDocs from './ExternalDocs';
import BindingsObject from './BindingsObject';
class OperationTrait {
  private _summary?: string;
  private _description?: string;
  private _tags?: (Tag | any)[];
  private _externalDocs?: ExternalDocs;
  private _operationId?: string;
  private _bindings?: BindingsObject;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    summary?: string,
    description?: string,
    tags?: (Tag | any)[],
    externalDocs?: ExternalDocs,
    operationId?: string,
    bindings?: BindingsObject,
    additionalProperties?: Map<string, any>,
  }) {
    this._summary = input.summary;
    this._description = input.description;
    this._tags = input.tags;
    this._externalDocs = input.externalDocs;
    this._operationId = input.operationId;
    this._bindings = input.bindings;
    this._additionalProperties = input.additionalProperties;
  }

  get summary(): string | undefined { return this._summary; }
  set summary(summary: string | undefined) { this._summary = summary; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get tags(): (Tag | any)[] | undefined { return this._tags; }
  set tags(tags: (Tag | any)[] | undefined) { this._tags = tags; }

  get externalDocs(): ExternalDocs | undefined { return this._externalDocs; }
  set externalDocs(externalDocs: ExternalDocs | undefined) { this._externalDocs = externalDocs; }

  get operationId(): string | undefined { return this._operationId; }
  set operationId(operationId: string | undefined) { this._operationId = operationId; }

  get bindings(): BindingsObject | undefined { return this._bindings; }
  set bindings(bindings: BindingsObject | undefined) { this._bindings = bindings; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default OperationTrait;
