import Reference from './Reference';
import Schema from './Schema';
import CorrelationId from './CorrelationId';
import Tag from './Tag';
import ExternalDocs from './ExternalDocs';
import MessageTraitExamplesItem from './MessageTraitExamplesItem';
import BindingsObject from './BindingsObject';
class MessageTrait {
  private _schemaFormat?: string;
  private _contentType?: string;
  private _headers?: Reference | Schema;
  private _correlationId?: Reference | CorrelationId;
  private _tags?: (Tag | any)[];
  private _summary?: string;
  private _reservedName?: string;
  private _title?: string;
  private _description?: string;
  private _externalDocs?: ExternalDocs;
  private _deprecated?: boolean;
  private _examples?: (MessageTraitExamplesItem | any)[];
  private _bindings?: BindingsObject;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    schemaFormat?: string,
    contentType?: string,
    headers?: Reference | Schema,
    correlationId?: Reference | CorrelationId,
    tags?: (Tag | any)[],
    summary?: string,
    reservedName?: string,
    title?: string,
    description?: string,
    externalDocs?: ExternalDocs,
    deprecated?: boolean,
    examples?: (MessageTraitExamplesItem | any)[],
    bindings?: BindingsObject,
    additionalProperties?: Map<string, any>,
  }) {
    this._schemaFormat = input.schemaFormat;
    this._contentType = input.contentType;
    this._headers = input.headers;
    this._correlationId = input.correlationId;
    this._tags = input.tags;
    this._summary = input.summary;
    this._reservedName = input.reservedName;
    this._title = input.title;
    this._description = input.description;
    this._externalDocs = input.externalDocs;
    this._deprecated = input.deprecated;
    this._examples = input.examples;
    this._bindings = input.bindings;
    this._additionalProperties = input.additionalProperties;
  }

  get schemaFormat(): string | undefined { return this._schemaFormat; }
  set schemaFormat(schemaFormat: string | undefined) { this._schemaFormat = schemaFormat; }

  get contentType(): string | undefined { return this._contentType; }
  set contentType(contentType: string | undefined) { this._contentType = contentType; }

  get headers(): Reference | Schema | undefined { return this._headers; }
  set headers(headers: Reference | Schema | undefined) { this._headers = headers; }

  get correlationId(): Reference | CorrelationId | undefined { return this._correlationId; }
  set correlationId(correlationId: Reference | CorrelationId | undefined) { this._correlationId = correlationId; }

  get tags(): (Tag | any)[] | undefined { return this._tags; }
  set tags(tags: (Tag | any)[] | undefined) { this._tags = tags; }

  get summary(): string | undefined { return this._summary; }
  set summary(summary: string | undefined) { this._summary = summary; }

  get reservedName(): string | undefined { return this._reservedName; }
  set reservedName(reservedName: string | undefined) { this._reservedName = reservedName; }

  get title(): string | undefined { return this._title; }
  set title(title: string | undefined) { this._title = title; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get externalDocs(): ExternalDocs | undefined { return this._externalDocs; }
  set externalDocs(externalDocs: ExternalDocs | undefined) { this._externalDocs = externalDocs; }

  get deprecated(): boolean | undefined { return this._deprecated; }
  set deprecated(deprecated: boolean | undefined) { this._deprecated = deprecated; }

  get examples(): (MessageTraitExamplesItem | any)[] | undefined { return this._examples; }
  set examples(examples: (MessageTraitExamplesItem | any)[] | undefined) { this._examples = examples; }

  get bindings(): BindingsObject | undefined { return this._bindings; }
  set bindings(bindings: BindingsObject | undefined) { this._bindings = bindings; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default MessageTrait;
