import Reference from './Reference';
import OperationTrait from './OperationTrait';
import OperationTraitsItemOneOf_2Item_1 from './OperationTraitsItemOneOf_2Item_1';
import Tag from './Tag';
import ExternalDocs from './ExternalDocs';
import BindingsObject from './BindingsObject';
import MessageOneOf from './MessageOneOf';
import Message from './Message';
class Operation {
  private _traits?: (Reference | OperationTrait | (Reference | OperationTrait | OperationTraitsItemOneOf_2Item_1 | any)[] | any)[];
  private _summary?: string;
  private _description?: string;
  private _tags?: (Tag | any)[];
  private _externalDocs?: ExternalDocs;
  private _operationId?: string;
  private _bindings?: BindingsObject;
  private _message?: Reference | MessageOneOf | Message;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    traits?: (Reference | OperationTrait | (Reference | OperationTrait | OperationTraitsItemOneOf_2Item_1 | any)[] | any)[],
    summary?: string,
    description?: string,
    tags?: (Tag | any)[],
    externalDocs?: ExternalDocs,
    operationId?: string,
    bindings?: BindingsObject,
    message?: Reference | MessageOneOf | Message,
    additionalProperties?: Map<string, any>,
  }) {
    this._traits = input.traits;
    this._summary = input.summary;
    this._description = input.description;
    this._tags = input.tags;
    this._externalDocs = input.externalDocs;
    this._operationId = input.operationId;
    this._bindings = input.bindings;
    this._message = input.message;
    this._additionalProperties = input.additionalProperties;
  }

  get traits(): (Reference | OperationTrait | (Reference | OperationTrait | OperationTraitsItemOneOf_2Item_1 | any)[] | any)[] | undefined { return this._traits; }
  set traits(traits: (Reference | OperationTrait | (Reference | OperationTrait | OperationTraitsItemOneOf_2Item_1 | any)[] | any)[] | undefined) { this._traits = traits; }

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

  get message(): Reference | MessageOneOf | Message | undefined { return this._message; }
  set message(message: Reference | MessageOneOf | Message | undefined) { this._message = message; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Operation;
