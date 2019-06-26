declare module '*.json' {
  const value: any;
  export default value;
}

type Code = {
  name: string;
  value: string;
};

export class Bravia {
  constructor(host: string, port: number, pks?: string, timeout?: number);

  discover(timeout: number): Promise<any>;
  getIRCCCodes(): Promise<Code[]>;
  send(code: string | string[]): Promise<any>;
}
