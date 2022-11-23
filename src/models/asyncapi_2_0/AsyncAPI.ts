import AsyncAPIVersions from './AsyncAPIVersions';
import Info from './Info';
import Servers from './Servers';
import Channels from './Channels';
import Components from './Components';
import Tag from './Tag';
import ExternalDocs from './ExternalDocs';
class AsyncAPI {
  private _asyncapi: AsyncAPIVersions;
  private _id?: string;
  private _info: Info;
  private _servers?: Servers;
  private _defaultContentType?: string;
  private _channels: Channels;
  private _components?: Components;
  private _tags?: (Tag | any)[];
  private _externalDocs?: ExternalDocs;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    asyncapi: AsyncAPIVersions,
    id?: string,
    info: Info,
    servers?: Servers,
    defaultContentType?: string,
    channels: Channels,
    components?: Components,
    tags?: (Tag | any)[],
    externalDocs?: ExternalDocs,
    additionalProperties?: Map<string, any>,
  }) {
    this._asyncapi = input.asyncapi;
    this._id = input.id;
    this._info = input.info;
    this._servers = input.servers;
    this._defaultContentType = input.defaultContentType;
    this._channels = input.channels;
    this._components = input.components;
    this._tags = input.tags;
    this._externalDocs = input.externalDocs;
    this._additionalProperties = input.additionalProperties;
  }

  get asyncapi(): AsyncAPIVersions { return this._asyncapi; }
  set asyncapi(asyncapi: AsyncAPIVersions) { this._asyncapi = asyncapi; }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get info(): Info { return this._info; }
  set info(info: Info) { this._info = info; }

  get servers(): Servers | undefined { return this._servers; }
  set servers(servers: Servers | undefined) { this._servers = servers; }

  get defaultContentType(): string | undefined { return this._defaultContentType; }
  set defaultContentType(defaultContentType: string | undefined) { this._defaultContentType = defaultContentType; }

  get channels(): Channels { return this._channels; }
  set channels(channels: Channels) { this._channels = channels; }

  get components(): Components | undefined { return this._components; }
  set components(components: Components | undefined) { this._components = components; }

  get tags(): (Tag | any)[] | undefined { return this._tags; }
  set tags(tags: (Tag | any)[] | undefined) { this._tags = tags; }

  get externalDocs(): ExternalDocs | undefined { return this._externalDocs; }
  set externalDocs(externalDocs: ExternalDocs | undefined) { this._externalDocs = externalDocs; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default AsyncAPI;
