import { DeviceOptions } from 'aws-iot-device-sdk';

export default {
  keyPath: './src/certs/private.pem.key',
  certPath: './src/certs/certificate.pem.crt',
  caPath: './src/certs/root.pem',
  clientId: process.env.AWS_IOT_CLIENT_ID,
  host: process.env.AWS_IOT_ENDPOINT,
} as DeviceOptions;
