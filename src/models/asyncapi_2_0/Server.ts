import ServerVariables from './ServerVariables';
import SecurityRequirement from './SecurityRequirement';
import BindingsObject from './BindingsObject';
class Server {
  private _url: string;
  private _description?: string;
  private _protocol: string;
  private _protocolVersion?: string;
  private _variables?: ServerVariables;
  private _security?: (SecurityRequirement | any)[];
  private _bindings?: BindingsObject;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    url: string,
    description?: string,
    protocol: string,
    protocolVersion?: string,
    variables?: ServerVariables,
    security?: (SecurityRequirement | any)[],
    bindings?: BindingsObject,
    additionalProperties?: Map<string, any>,
  }) {
    this._url = input.url;
    this._description = input.description;
    this._protocol = input.protocol;
    this._protocolVersion = input.protocolVersion;
    this._variables = input.variables;
    this._security = input.security;
    this._bindings = input.bindings;
    this._additionalProperties = input.additionalProperties;
  }

  get url(): string { return this._url; }
  set url(url: string) { this._url = url; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get protocol(): string { return this._protocol; }
  set protocol(protocol: string) { this._protocol = protocol; }

  get protocolVersion(): string | undefined { return this._protocolVersion; }
  set protocolVersion(protocolVersion: string | undefined) { this._protocolVersion = protocolVersion; }

  get variables(): ServerVariables | undefined { return this._variables; }
  set variables(variables: ServerVariables | undefined) { this._variables = variables; }

  get security(): (SecurityRequirement | any)[] | undefined { return this._security; }
  set security(security: (SecurityRequirement | any)[] | undefined) { this._security = security; }

  get bindings(): BindingsObject | undefined { return this._bindings; }
  set bindings(bindings: BindingsObject | undefined) { this._bindings = bindings; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Server;
