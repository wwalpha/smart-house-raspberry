import { DeviceOptions } from 'aws-iot-device-sdk';

export default {
  keyPath: './src/certs/private.pem.key',
  certPath: './src/certs/certificate.pem.crt',
  caPath: './src/certs/root.pem',
  clientId: '30ea9ae8-ca2a-4ecf-9c3b-f2dc45de7e2b',
  host: process.env.AWS_IOT_ENDPOINT,
  debug: true,
  region: 'ap-northeast-1',
} as DeviceOptions;
