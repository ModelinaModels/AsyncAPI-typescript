import Reference from './Reference';
import MessageOneOf from './MessageOneOf';
import Message from './Message';
class Messages {
  private _additionalProperties?: Map<string, Reference | MessageOneOf | Message>;

  constructor(input: {
    additionalProperties?: Map<string, Reference | MessageOneOf | Message>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, Reference | MessageOneOf | Message> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, Reference | MessageOneOf | Message> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Messages;
