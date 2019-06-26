import * as AWSIoT from 'aws-iot-device-sdk';
import configs from './configs';
import { Bravia } from 'typings/types';

const bravia = require('bravia');
const client: Bravia = new bravia('172.16.81.25', 80, '0811');

const device = new AWSIoT.device(configs);

type TopicType = {
  [key: string]: () => Promise<void>;
};

const TOPICS: TopicType = {
  'iot/power/turnon': () => client.send('WakeUp'),
  'iot/power/turnoff': () => client.send('PowerOff'),
  // 'iot/power/turnon': () => client.send('VolumeUp'),
  // 'iot/power/turnoff': () => client.send('VolumeDown'),
};

device.on('connect', function() {
  console.log('connect');
  Object.keys(TOPICS).forEach(topic => device.subscribe(topic));
});

device.on('message', async (topic, payload) => {
  console.log('message', topic, payload.toString());

  // コマンド実行する
  await TOPICS[topic]();
});
