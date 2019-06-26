import { DeviceOptions } from 'aws-iot-device-sdk';

export default {
  keyPath: './src/certs/private.pem.key',
  certPath: './src/certs/certificate.pem.crt',
  caPath: './src/certs/root.pem',
  clientId: 'SmartHouse-Raspberry',
  host: 'a1x2pfh8rm8sot-ats.iot.ap-northeast-1.amazonaws.com',
} as DeviceOptions;
