import * as AWSIoT from 'aws-iot-device-sdk';
import configs from './configs';
import { TOPICS } from './settings';

const device = new AWSIoT.device(configs);

device.on('connect', () => {
  console.log('connect', new Date());

  Object.keys(TOPICS).forEach(topic => device.subscribe(topic));
});

device.on('message', async (topic, payload) => {
  console.log('message', topic, payload.toString());

  // コマンド実行する
  // await TOPICS[topic](JSON.parse(payload.toString()));
});

// device.on('close', () => console.log('close'));
device.on('error', err => console.log('error', err));
// device.on('offline', () => console.log('offline'));
// device.on('reconnect', () => console.log('reconnect'));

// const shadown = new AWSIoT.thingShadow(configs);

// var rval = 187;
// var gval = 114;
// var bval = 222;
// var clientTokenUpdate;

// shadown.on('connect', () => {
//   console.log('shadown connect');
//   shadown.register('RGBLedLamp', {}, function() {
//     // Once registration is complete, update the Thing Shadow named
//     // 'RGBLedLamp' with the latest device state and save the clientToken
//     // so that we can correlate it with status or timeout events.
//     //
//     // Thing shadow state
//     //
//     console.log('shadown register');

//     var rgbLedLampState = { state: { desired: { red: rval, green: gval, blue: bval } } };

//     clientTokenUpdate = shadown.update('RGBLedLamp', rgbLedLampState);
//     //
//     // The update method returns a clientToken; if non-null, this value will
//     // be sent in a 'status' event when the operation completes, allowing you
//     // to know whether or not the update was successful.  If the update method
//     // returns null, it's because another operation is currently in progress and
//     // you'll need to wait until it completes (or times out) before updating the
//     // shadow.
//     //
//     if (clientTokenUpdate === null) {
//       console.log('update shadow failed, operation still in progress');
//     }
//     console.log(clientTokenUpdate);
//   });
// });

// shadown.on('status', function(thingName, stat, clientToken, stateObject) {
//   console.log('received ' + stat + ' on ' + thingName + ': ' + JSON.stringify(stateObject));
// });

// shadown.on('delta', function(thingName, stateObject) {
//   console.log('received delta on ' + thingName + ': ' + JSON.stringify(stateObject));
// });

// shadown.on('timeout', function(thingName, clientToken) {
//   console.log('received timeout on ' + thingName + ' with token: ' + clientToken);
//   //
//   // In the event that a shadow operation times out, you'll receive
//   // one of these events.  The clientToken value associated with the
//   // event will have the same value which was returned in an earlier
//   // call to get(), update(), or delete().
//   //
// });
