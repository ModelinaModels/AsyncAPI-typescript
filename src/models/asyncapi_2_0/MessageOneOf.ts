import Reference from './Reference';
import Message from './Message';
class MessageOneOf {
  private _oneOf: (Reference | MessageOneOf | Message | any)[];

  constructor(input: {
    oneOf: (Reference | MessageOneOf | Message | any)[],
  }) {
    this._oneOf = input.oneOf;
  }

  get oneOf(): (Reference | MessageOneOf | Message | any)[] { return this._oneOf; }
  set oneOf(oneOf: (Reference | MessageOneOf | Message | any)[]) { this._oneOf = oneOf; }
}
export default MessageOneOf;
