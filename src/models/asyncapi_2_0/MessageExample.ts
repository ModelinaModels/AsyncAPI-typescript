import MessageOneOf_1OneOf_1ExamplesItemHeaders from './MessageOneOf_1OneOf_1ExamplesItemHeaders';
class MessageExample {
  private _headers?: MessageOneOf_1OneOf_1ExamplesItemHeaders;
  private _payload?: any;

  constructor(input: {
    headers?: MessageOneOf_1OneOf_1ExamplesItemHeaders,
    payload?: any,
  }) {
    this._headers = input.headers;
    this._payload = input.payload;
  }

  get headers(): MessageOneOf_1OneOf_1ExamplesItemHeaders | undefined { return this._headers; }
  set headers(headers: MessageOneOf_1OneOf_1ExamplesItemHeaders | undefined) { this._headers = headers; }

  get payload(): any | undefined { return this._payload; }
  set payload(payload: any | undefined) { this._payload = payload; }
}
export default MessageExample;
