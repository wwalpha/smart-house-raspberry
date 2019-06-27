import * as AWSIoT from 'aws-iot-device-sdk';
import configs from './configs';
import { TOPICS } from './settings';

const device = new AWSIoT.device(configs);

device.on('connect', function() {
  console.log('connect');
  Object.keys(TOPICS).forEach(topic => device.subscribe(topic));
});

device.on('message', async (topic, payload) => {
  console.log('message', topic, payload.toString());

  // コマンド実行する
  await TOPICS[topic](JSON.parse(payload.toString()));
});
