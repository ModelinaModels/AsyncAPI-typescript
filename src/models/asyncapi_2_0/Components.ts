import Schemas from './Schemas';
import Messages from './Messages';
import ComponentsSecuritySchemes from './ComponentsSecuritySchemes';
import Parameters from './Parameters';
import ComponentsCorrelationIds from './ComponentsCorrelationIds';
import ComponentsOperationTraits from './ComponentsOperationTraits';
import ComponentsMessageTraits from './ComponentsMessageTraits';
import ComponentsServerBindings from './ComponentsServerBindings';
import ComponentsChannelBindings from './ComponentsChannelBindings';
import ComponentsOperationBindings from './ComponentsOperationBindings';
import ComponentsMessageBindings from './ComponentsMessageBindings';
class Components {
  private _schemas?: Schemas;
  private _messages?: Messages;
  private _securitySchemes?: ComponentsSecuritySchemes;
  private _parameters?: Parameters;
  private _correlationIds?: ComponentsCorrelationIds;
  private _operationTraits?: ComponentsOperationTraits;
  private _messageTraits?: ComponentsMessageTraits;
  private _serverBindings?: ComponentsServerBindings;
  private _channelBindings?: ComponentsChannelBindings;
  private _operationBindings?: ComponentsOperationBindings;
  private _messageBindings?: ComponentsMessageBindings;

  constructor(input: {
    schemas?: Schemas,
    messages?: Messages,
    securitySchemes?: ComponentsSecuritySchemes,
    parameters?: Parameters,
    correlationIds?: ComponentsCorrelationIds,
    operationTraits?: ComponentsOperationTraits,
    messageTraits?: ComponentsMessageTraits,
    serverBindings?: ComponentsServerBindings,
    channelBindings?: ComponentsChannelBindings,
    operationBindings?: ComponentsOperationBindings,
    messageBindings?: ComponentsMessageBindings,
  }) {
    this._schemas = input.schemas;
    this._messages = input.messages;
    this._securitySchemes = input.securitySchemes;
    this._parameters = input.parameters;
    this._correlationIds = input.correlationIds;
    this._operationTraits = input.operationTraits;
    this._messageTraits = input.messageTraits;
    this._serverBindings = input.serverBindings;
    this._channelBindings = input.channelBindings;
    this._operationBindings = input.operationBindings;
    this._messageBindings = input.messageBindings;
  }

  get schemas(): Schemas | undefined { return this._schemas; }
  set schemas(schemas: Schemas | undefined) { this._schemas = schemas; }

  get messages(): Messages | undefined { return this._messages; }
  set messages(messages: Messages | undefined) { this._messages = messages; }

  get securitySchemes(): ComponentsSecuritySchemes | undefined { return this._securitySchemes; }
  set securitySchemes(securitySchemes: ComponentsSecuritySchemes | undefined) { this._securitySchemes = securitySchemes; }

  get parameters(): Parameters | undefined { return this._parameters; }
  set parameters(parameters: Parameters | undefined) { this._parameters = parameters; }

  get correlationIds(): ComponentsCorrelationIds | undefined { return this._correlationIds; }
  set correlationIds(correlationIds: ComponentsCorrelationIds | undefined) { this._correlationIds = correlationIds; }

  get operationTraits(): ComponentsOperationTraits | undefined { return this._operationTraits; }
  set operationTraits(operationTraits: ComponentsOperationTraits | undefined) { this._operationTraits = operationTraits; }

  get messageTraits(): ComponentsMessageTraits | undefined { return this._messageTraits; }
  set messageTraits(messageTraits: ComponentsMessageTraits | undefined) { this._messageTraits = messageTraits; }

  get serverBindings(): ComponentsServerBindings | undefined { return this._serverBindings; }
  set serverBindings(serverBindings: ComponentsServerBindings | undefined) { this._serverBindings = serverBindings; }

  get channelBindings(): ComponentsChannelBindings | undefined { return this._channelBindings; }
  set channelBindings(channelBindings: ComponentsChannelBindings | undefined) { this._channelBindings = channelBindings; }

  get operationBindings(): ComponentsOperationBindings | undefined { return this._operationBindings; }
  set operationBindings(operationBindings: ComponentsOperationBindings | undefined) { this._operationBindings = operationBindings; }

  get messageBindings(): ComponentsMessageBindings | undefined { return this._messageBindings; }
  set messageBindings(messageBindings: ComponentsMessageBindings | undefined) { this._messageBindings = messageBindings; }
}
export default Components;
