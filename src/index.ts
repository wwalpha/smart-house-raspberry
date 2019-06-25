import * as AWSIoT from 'aws-iot-device-sdk';
import configs from './configs';

const device = new AWSIoT.device(configs);

device.on('connect', function() {
  console.log('connect');
  device.subscribe('topic_1');
  device.publish('topic_2', JSON.stringify({ test_data: 1 }));
});

device.on('message', function(topic, payload) {
  console.log('message', topic, payload.toString());
});
