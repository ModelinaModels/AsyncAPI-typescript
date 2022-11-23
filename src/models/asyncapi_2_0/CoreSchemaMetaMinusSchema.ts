import AnonymSchema24 from './AnonymSchema24';
import AnonymSchema25 from './AnonymSchema25';
import AnonymSchema26 from './AnonymSchema26';
import AnonymSchema28 from './AnonymSchema28';
import AnonymSchema32 from './AnonymSchema32';
class CoreSchemaMetaMinusSchema {
  private _id?: string;
  private _schema?: string;
  private _ref?: string;
  private _comment?: string;
  private _title?: string;
  private _description?: string;
  private _reservedDefault?: any;
  private _readOnly?: boolean;
  private _writeOnly?: boolean;
  private _examples?: (any | any)[];
  private _multipleOf?: number;
  private _maximum?: number;
  private _exclusiveMaximum?: number;
  private _minimum?: number;
  private _exclusiveMinimum?: number;
  private _maxLength?: number;
  private _minLength?: number;
  private _pattern?: string;
  private _additionalItems?: CoreSchemaMetaMinusSchema;
  private _items?: CoreSchemaMetaMinusSchema | (CoreSchemaMetaMinusSchema | any)[];
  private _maxItems?: number;
  private _minItems?: number;
  private _uniqueItems?: boolean;
  private _contains?: CoreSchemaMetaMinusSchema;
  private _maxProperties?: number;
  private _minProperties?: number;
  private _required?: (string | any)[];
  private _additionalProperties?: CoreSchemaMetaMinusSchema;
  private _definitions?: AnonymSchema24;
  private _properties?: AnonymSchema25;
  private _patternProperties?: AnonymSchema26;
  private _dependencies?: AnonymSchema28;
  private _propertyNames?: CoreSchemaMetaMinusSchema;
  private _reservedConst?: any;
  private _reservedEnum?: (any | any)[];
  private _reservedType?: AnonymSchema32;
  private _format?: string;
  private _contentMediaType?: string;
  private _contentEncoding?: string;
  private _reservedIf?: CoreSchemaMetaMinusSchema;
  private _then?: CoreSchemaMetaMinusSchema;
  private _reservedElse?: CoreSchemaMetaMinusSchema;
  private _allOf?: (CoreSchemaMetaMinusSchema | any)[];
  private _anyOf?: (CoreSchemaMetaMinusSchema | any)[];
  private _oneOf?: (CoreSchemaMetaMinusSchema | any)[];
  private _not?: CoreSchemaMetaMinusSchema;
  private _reservedAdditionalProperties?: Map<string, any>;

  constructor(input: {
    id?: string,
    schema?: string,
    ref?: string,
    comment?: string,
    title?: string,
    description?: string,
    reservedDefault?: any,
    readOnly?: boolean,
    writeOnly?: boolean,
    examples?: (any | any)[],
    multipleOf?: number,
    maximum?: number,
    exclusiveMaximum?: number,
    minimum?: number,
    exclusiveMinimum?: number,
    maxLength?: number,
    minLength?: number,
    pattern?: string,
    additionalItems?: CoreSchemaMetaMinusSchema,
    items?: CoreSchemaMetaMinusSchema | (CoreSchemaMetaMinusSchema | any)[],
    maxItems?: number,
    minItems?: number,
    uniqueItems?: boolean,
    contains?: CoreSchemaMetaMinusSchema,
    maxProperties?: number,
    minProperties?: number,
    required?: (string | any)[],
    additionalProperties?: CoreSchemaMetaMinusSchema,
    definitions?: AnonymSchema24,
    properties?: AnonymSchema25,
    patternProperties?: AnonymSchema26,
    dependencies?: AnonymSchema28,
    propertyNames?: CoreSchemaMetaMinusSchema,
    reservedConst?: any,
    reservedEnum?: (any | any)[],
    reservedType?: AnonymSchema32,
    format?: string,
    contentMediaType?: string,
    contentEncoding?: string,
    reservedIf?: CoreSchemaMetaMinusSchema,
    then?: CoreSchemaMetaMinusSchema,
    reservedElse?: CoreSchemaMetaMinusSchema,
    allOf?: (CoreSchemaMetaMinusSchema | any)[],
    anyOf?: (CoreSchemaMetaMinusSchema | any)[],
    oneOf?: (CoreSchemaMetaMinusSchema | any)[],
    not?: CoreSchemaMetaMinusSchema,
    reservedAdditionalProperties?: Map<string, any>,
  }) {
    this._id = input.id;
    this._schema = input.schema;
    this._ref = input.ref;
    this._comment = input.comment;
    this._title = input.title;
    this._description = input.description;
    this._reservedDefault = input.reservedDefault;
    this._readOnly = input.readOnly;
    this._writeOnly = input.writeOnly;
    this._examples = input.examples;
    this._multipleOf = input.multipleOf;
    this._maximum = input.maximum;
    this._exclusiveMaximum = input.exclusiveMaximum;
    this._minimum = input.minimum;
    this._exclusiveMinimum = input.exclusiveMinimum;
    this._maxLength = input.maxLength;
    this._minLength = input.minLength;
    this._pattern = input.pattern;
    this._additionalItems = input.additionalItems;
    this._items = input.items;
    this._maxItems = input.maxItems;
    this._minItems = input.minItems;
    this._uniqueItems = input.uniqueItems;
    this._contains = input.contains;
    this._maxProperties = input.maxProperties;
    this._minProperties = input.minProperties;
    this._required = input.required;
    this._additionalProperties = input.additionalProperties;
    this._definitions = input.definitions;
    this._properties = input.properties;
    this._patternProperties = input.patternProperties;
    this._dependencies = input.dependencies;
    this._propertyNames = input.propertyNames;
    this._reservedConst = input.reservedConst;
    this._reservedEnum = input.reservedEnum;
    this._reservedType = input.reservedType;
    this._format = input.format;
    this._contentMediaType = input.contentMediaType;
    this._contentEncoding = input.contentEncoding;
    this._reservedIf = input.reservedIf;
    this._then = input.then;
    this._reservedElse = input.reservedElse;
    this._allOf = input.allOf;
    this._anyOf = input.anyOf;
    this._oneOf = input.oneOf;
    this._not = input.not;
    this._reservedAdditionalProperties = input.reservedAdditionalProperties;
  }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get schema(): string | undefined { return this._schema; }
  set schema(schema: string | undefined) { this._schema = schema; }

  get ref(): string | undefined { return this._ref; }
  set ref(ref: string | undefined) { this._ref = ref; }

  get comment(): string | undefined { return this._comment; }
  set comment(comment: string | undefined) { this._comment = comment; }

  get title(): string | undefined { return this._title; }
  set title(title: string | undefined) { this._title = title; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get reservedDefault(): any | undefined { return this._reservedDefault; }
  set reservedDefault(reservedDefault: any | undefined) { this._reservedDefault = reservedDefault; }

  get readOnly(): boolean | undefined { return this._readOnly; }
  set readOnly(readOnly: boolean | undefined) { this._readOnly = readOnly; }

  get writeOnly(): boolean | undefined { return this._writeOnly; }
  set writeOnly(writeOnly: boolean | undefined) { this._writeOnly = writeOnly; }

  get examples(): (any | any)[] | undefined { return this._examples; }
  set examples(examples: (any | any)[] | undefined) { this._examples = examples; }

  get multipleOf(): number | undefined { return this._multipleOf; }
  set multipleOf(multipleOf: number | undefined) { this._multipleOf = multipleOf; }

  get maximum(): number | undefined { return this._maximum; }
  set maximum(maximum: number | undefined) { this._maximum = maximum; }

  get exclusiveMaximum(): number | undefined { return this._exclusiveMaximum; }
  set exclusiveMaximum(exclusiveMaximum: number | undefined) { this._exclusiveMaximum = exclusiveMaximum; }

  get minimum(): number | undefined { return this._minimum; }
  set minimum(minimum: number | undefined) { this._minimum = minimum; }

  get exclusiveMinimum(): number | undefined { return this._exclusiveMinimum; }
  set exclusiveMinimum(exclusiveMinimum: number | undefined) { this._exclusiveMinimum = exclusiveMinimum; }

  get maxLength(): number | undefined { return this._maxLength; }
  set maxLength(maxLength: number | undefined) { this._maxLength = maxLength; }

  get minLength(): number | undefined { return this._minLength; }
  set minLength(minLength: number | undefined) { this._minLength = minLength; }

  get pattern(): string | undefined { return this._pattern; }
  set pattern(pattern: string | undefined) { this._pattern = pattern; }

  get additionalItems(): CoreSchemaMetaMinusSchema | undefined { return this._additionalItems; }
  set additionalItems(additionalItems: CoreSchemaMetaMinusSchema | undefined) { this._additionalItems = additionalItems; }

  get items(): CoreSchemaMetaMinusSchema | (CoreSchemaMetaMinusSchema | any)[] | undefined { return this._items; }
  set items(items: CoreSchemaMetaMinusSchema | (CoreSchemaMetaMinusSchema | any)[] | undefined) { this._items = items; }

  get maxItems(): number | undefined { return this._maxItems; }
  set maxItems(maxItems: number | undefined) { this._maxItems = maxItems; }

  get minItems(): number | undefined { return this._minItems; }
  set minItems(minItems: number | undefined) { this._minItems = minItems; }

  get uniqueItems(): boolean | undefined { return this._uniqueItems; }
  set uniqueItems(uniqueItems: boolean | undefined) { this._uniqueItems = uniqueItems; }

  get contains(): CoreSchemaMetaMinusSchema | undefined { return this._contains; }
  set contains(contains: CoreSchemaMetaMinusSchema | undefined) { this._contains = contains; }

  get maxProperties(): number | undefined { return this._maxProperties; }
  set maxProperties(maxProperties: number | undefined) { this._maxProperties = maxProperties; }

  get minProperties(): number | undefined { return this._minProperties; }
  set minProperties(minProperties: number | undefined) { this._minProperties = minProperties; }

  get required(): (string | any)[] | undefined { return this._required; }
  set required(required: (string | any)[] | undefined) { this._required = required; }

  get additionalProperties(): CoreSchemaMetaMinusSchema | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: CoreSchemaMetaMinusSchema | undefined) { this._additionalProperties = additionalProperties; }

  get definitions(): AnonymSchema24 | undefined { return this._definitions; }
  set definitions(definitions: AnonymSchema24 | undefined) { this._definitions = definitions; }

  get properties(): AnonymSchema25 | undefined { return this._properties; }
  set properties(properties: AnonymSchema25 | undefined) { this._properties = properties; }

  get patternProperties(): AnonymSchema26 | undefined { return this._patternProperties; }
  set patternProperties(patternProperties: AnonymSchema26 | undefined) { this._patternProperties = patternProperties; }

  get dependencies(): AnonymSchema28 | undefined { return this._dependencies; }
  set dependencies(dependencies: AnonymSchema28 | undefined) { this._dependencies = dependencies; }

  get propertyNames(): CoreSchemaMetaMinusSchema | undefined { return this._propertyNames; }
  set propertyNames(propertyNames: CoreSchemaMetaMinusSchema | undefined) { this._propertyNames = propertyNames; }

  get reservedConst(): any | undefined { return this._reservedConst; }
  set reservedConst(reservedConst: any | undefined) { this._reservedConst = reservedConst; }

  get reservedEnum(): (any | any)[] | undefined { return this._reservedEnum; }
  set reservedEnum(reservedEnum: (any | any)[] | undefined) { this._reservedEnum = reservedEnum; }

  get reservedType(): AnonymSchema32 | undefined { return this._reservedType; }
  set reservedType(reservedType: AnonymSchema32 | undefined) { this._reservedType = reservedType; }

  get format(): string | undefined { return this._format; }
  set format(format: string | undefined) { this._format = format; }

  get contentMediaType(): string | undefined { return this._contentMediaType; }
  set contentMediaType(contentMediaType: string | undefined) { this._contentMediaType = contentMediaType; }

  get contentEncoding(): string | undefined { return this._contentEncoding; }
  set contentEncoding(contentEncoding: string | undefined) { this._contentEncoding = contentEncoding; }

  get reservedIf(): CoreSchemaMetaMinusSchema | undefined { return this._reservedIf; }
  set reservedIf(reservedIf: CoreSchemaMetaMinusSchema | undefined) { this._reservedIf = reservedIf; }

  get then(): CoreSchemaMetaMinusSchema | undefined { return this._then; }
  set then(then: CoreSchemaMetaMinusSchema | undefined) { this._then = then; }

  get reservedElse(): CoreSchemaMetaMinusSchema | undefined { return this._reservedElse; }
  set reservedElse(reservedElse: CoreSchemaMetaMinusSchema | undefined) { this._reservedElse = reservedElse; }

  get allOf(): (CoreSchemaMetaMinusSchema | any)[] | undefined { return this._allOf; }
  set allOf(allOf: (CoreSchemaMetaMinusSchema | any)[] | undefined) { this._allOf = allOf; }

  get anyOf(): (CoreSchemaMetaMinusSchema | any)[] | undefined { return this._anyOf; }
  set anyOf(anyOf: (CoreSchemaMetaMinusSchema | any)[] | undefined) { this._anyOf = anyOf; }

  get oneOf(): (CoreSchemaMetaMinusSchema | any)[] | undefined { return this._oneOf; }
  set oneOf(oneOf: (CoreSchemaMetaMinusSchema | any)[] | undefined) { this._oneOf = oneOf; }

  get not(): CoreSchemaMetaMinusSchema | undefined { return this._not; }
  set not(not: CoreSchemaMetaMinusSchema | undefined) { this._not = not; }

  get reservedAdditionalProperties(): Map<string, any> | undefined { return this._reservedAdditionalProperties; }
  set reservedAdditionalProperties(reservedAdditionalProperties: Map<string, any> | undefined) { this._reservedAdditionalProperties = reservedAdditionalProperties; }
}
export default CoreSchemaMetaMinusSchema;
