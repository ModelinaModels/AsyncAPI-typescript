
class BindingsObject {
  private _http?: any;
  private _ws?: any;
  private _amqp?: any;
  private _amqp1?: any;
  private _mqtt?: any;
  private _mqtt5?: any;
  private _kafka?: any;
  private _nats?: any;
  private _jms?: any;
  private _sns?: any;
  private _sqs?: any;
  private _stomp?: any;
  private _redis?: any;
  private _mercure?: any;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    http?: any,
    ws?: any,
    amqp?: any,
    amqp1?: any,
    mqtt?: any,
    mqtt5?: any,
    kafka?: any,
    nats?: any,
    jms?: any,
    sns?: any,
    sqs?: any,
    stomp?: any,
    redis?: any,
    mercure?: any,
    additionalProperties?: Map<string, any>,
  }) {
    this._http = input.http;
    this._ws = input.ws;
    this._amqp = input.amqp;
    this._amqp1 = input.amqp1;
    this._mqtt = input.mqtt;
    this._mqtt5 = input.mqtt5;
    this._kafka = input.kafka;
    this._nats = input.nats;
    this._jms = input.jms;
    this._sns = input.sns;
    this._sqs = input.sqs;
    this._stomp = input.stomp;
    this._redis = input.redis;
    this._mercure = input.mercure;
    this._additionalProperties = input.additionalProperties;
  }

  get http(): any | undefined { return this._http; }
  set http(http: any | undefined) { this._http = http; }

  get ws(): any | undefined { return this._ws; }
  set ws(ws: any | undefined) { this._ws = ws; }

  get amqp(): any | undefined { return this._amqp; }
  set amqp(amqp: any | undefined) { this._amqp = amqp; }

  get amqp1(): any | undefined { return this._amqp1; }
  set amqp1(amqp1: any | undefined) { this._amqp1 = amqp1; }

  get mqtt(): any | undefined { return this._mqtt; }
  set mqtt(mqtt: any | undefined) { this._mqtt = mqtt; }

  get mqtt5(): any | undefined { return this._mqtt5; }
  set mqtt5(mqtt5: any | undefined) { this._mqtt5 = mqtt5; }

  get kafka(): any | undefined { return this._kafka; }
  set kafka(kafka: any | undefined) { this._kafka = kafka; }

  get nats(): any | undefined { return this._nats; }
  set nats(nats: any | undefined) { this._nats = nats; }

  get jms(): any | undefined { return this._jms; }
  set jms(jms: any | undefined) { this._jms = jms; }

  get sns(): any | undefined { return this._sns; }
  set sns(sns: any | undefined) { this._sns = sns; }

  get sqs(): any | undefined { return this._sqs; }
  set sqs(sqs: any | undefined) { this._sqs = sqs; }

  get stomp(): any | undefined { return this._stomp; }
  set stomp(stomp: any | undefined) { this._stomp = stomp; }

  get redis(): any | undefined { return this._redis; }
  set redis(redis: any | undefined) { this._redis = redis; }

  get mercure(): any | undefined { return this._mercure; }
  set mercure(mercure: any | undefined) { this._mercure = mercure; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default BindingsObject;
