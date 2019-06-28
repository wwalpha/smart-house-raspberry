import * as AWSIoT from 'aws-iot-device-sdk';
import configs from './configs';

const shadow = new AWSIoT.thingShadow(configs);
console.log(configs);
//
// Client token value returned from thingShadows.update() operation
//
var clientTokenUpdate;

//
// Simulated device values
//
var rval = 187;
var gval = 114;
var bval = 222;

shadow.on('connect', function() {
  //
  // After connecting to the AWS IoT platform, register interest in the
  // Thing Shadow named 'RGBLedLamp'.
  //
  shadow.register('RGBLedLamp', {}, function() {
    // Once registration is complete, update the Thing Shadow named
    // 'RGBLedLamp' with the latest device state and save the clientToken
    // so that we can correlate it with status or timeout events.
    //
    // Thing shadow state
    //
    var rgbLedLampState = { state: { desired: { red: rval, green: gval, blue: bval } } };

    clientTokenUpdate = shadow.update('RGBLedLamp', rgbLedLampState);
    console.log(clientTokenUpdate);
    //
    // The update method returns a clientToken; if non-null, this value will
    // be sent in a 'status' event when the operation completes, allowing you
    // to know whether or not the update was successful.  If the update method
    // returns null, it's because another operation is currently in progress and
    // you'll need to wait until it completes (or times out) before updating the
    // shadow.
    //
    if (clientTokenUpdate === null) {
      console.log('update shadow failed, operation still in progress');
    }
  });
});

shadow.on('status', function(thingName, stat, clientToken, stateObject) {
  console.log('received ' + stat + ' on ' + thingName + ': ' + JSON.stringify(stateObject));
  //
  // These events report the status of update(), get(), and delete()
  // calls.  The clientToken value associated with the event will have
  // the same value which was returned in an earlier call to get(),
  // update(), or delete().  Use status events to keep track of the
  // status of shadow operations.
  //
});

shadow.on('delta', function(thingName, stateObject) {
  console.log('received delta on ' + thingName + ': ' + JSON.stringify(stateObject));
});

shadow.on('timeout', function(thingName, clientToken) {
  console.log('received timeout on ' + thingName + ' with token: ' + clientToken);
  //
  // In the event that a shadow operation times out, you'll receive
  // one of these events.  The clientToken value associated with the
  // event will have the same value which was returned in an earlier
  // call to get(), update(), or delete().
  //
});
