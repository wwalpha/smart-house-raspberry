import { DeviceOptions } from 'aws-iot-device-sdk';

export default {
  keyPath: './certs/private.pem.key',
  certPath: './certs/certificate.pem.crt',
  caPath: './certs/root.pem',
  clientId: '<YourUniqueClientIdentifier>',
  host: 'a1x2pfh8rm8sot-ats.iot.ap-northeast-1.amazonaws.com',
} as DeviceOptions;
