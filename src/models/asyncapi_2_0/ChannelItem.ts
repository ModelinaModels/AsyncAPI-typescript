import ChannelItemParameters from './ChannelItemParameters';
import Operation from './Operation';
import BindingsObject from './BindingsObject';
class ChannelItem {
  private _ref?: string;
  private _parameters?: ChannelItemParameters;
  private _description?: string;
  private _publish?: Operation;
  private _subscribe?: Operation;
  private _deprecated?: boolean;
  private _bindings?: BindingsObject;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    ref?: string,
    parameters?: ChannelItemParameters,
    description?: string,
    publish?: Operation,
    subscribe?: Operation,
    deprecated?: boolean,
    bindings?: BindingsObject,
    additionalProperties?: Map<string, any>,
  }) {
    this._ref = input.ref;
    this._parameters = input.parameters;
    this._description = input.description;
    this._publish = input.publish;
    this._subscribe = input.subscribe;
    this._deprecated = input.deprecated;
    this._bindings = input.bindings;
    this._additionalProperties = input.additionalProperties;
  }

  get ref(): string | undefined { return this._ref; }
  set ref(ref: string | undefined) { this._ref = ref; }

  get parameters(): ChannelItemParameters | undefined { return this._parameters; }
  set parameters(parameters: ChannelItemParameters | undefined) { this._parameters = parameters; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get publish(): Operation | undefined { return this._publish; }
  set publish(publish: Operation | undefined) { this._publish = publish; }

  get subscribe(): Operation | undefined { return this._subscribe; }
  set subscribe(subscribe: Operation | undefined) { this._subscribe = subscribe; }

  get deprecated(): boolean | undefined { return this._deprecated; }
  set deprecated(deprecated: boolean | undefined) { this._deprecated = deprecated; }

  get bindings(): BindingsObject | undefined { return this._bindings; }
  set bindings(bindings: BindingsObject | undefined) { this._bindings = bindings; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ChannelItem;
