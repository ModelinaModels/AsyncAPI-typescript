import ChannelItem from './ChannelItem';
class Channels {
  private _additionalProperties?: Map<string, ChannelItem>;

  constructor(input: {
    additionalProperties?: Map<string, ChannelItem>,
  }) {
    this._additionalProperties = input.additionalProperties;
  }

  get additionalProperties(): Map<string, ChannelItem> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, ChannelItem> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Channels;
