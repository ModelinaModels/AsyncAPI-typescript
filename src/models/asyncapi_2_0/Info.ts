import Contact from './Contact';
import License from './License';
class Info {
  private _title: string;
  private _version: string;
  private _description?: string;
  private _termsOfService?: string;
  private _contact?: Contact;
  private _license?: License;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    title: string,
    version: string,
    description?: string,
    termsOfService?: string,
    contact?: Contact,
    license?: License,
    additionalProperties?: Map<string, any>,
  }) {
    this._title = input.title;
    this._version = input.version;
    this._description = input.description;
    this._termsOfService = input.termsOfService;
    this._contact = input.contact;
    this._license = input.license;
    this._additionalProperties = input.additionalProperties;
  }

  get title(): string { return this._title; }
  set title(title: string) { this._title = title; }

  get version(): string { return this._version; }
  set version(version: string) { this._version = version; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get termsOfService(): string | undefined { return this._termsOfService; }
  set termsOfService(termsOfService: string | undefined) { this._termsOfService = termsOfService; }

  get contact(): Contact | undefined { return this._contact; }
  set contact(contact: Contact | undefined) { this._contact = contact; }

  get license(): License | undefined { return this._license; }
  set license(license: License | undefined) { this._license = license; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Info;
