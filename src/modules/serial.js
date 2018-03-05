var portName = require('../config').portName;
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
var fs = require('fs');
var port = null;
var parser = null;
var isConnected = false;
var Rx = require('rxjs/Rx');

var mcuMsg = new Rx.Subject();
var msgMcu = new Rx.Subject();

var scanPort = function() {
    var flag = false;
    console.log("[Info] Scanning...")
    for (var i = 20; i >= 0; i--) {
        var str = portName + i;
        if (fs.existsSync(str)) {
            port = new SerialPort(str, {
                baudRate: 57600,
                disconnectedCallback: function() { console.log('You pulled the plug!'); }
            });
            parser = port.pipe(new Readline({ delimiter: '\r\n' }));
            port.on('open', (err) => {
                console.log("[Info] ", str, "is Opened. ")
            })
            port.on('close', (err) => {
                console.log(err);
                isConnected = false;
            })
            parser.on('data', (data) => {
                mcuMsg.next(data);
            })
            flag = true;
            isConnected = true;
            break;
        }
    }
    return flag;
}

scanPort();
setInterval(() => {
    if (!isConnected) {
        scanPort();
    }
}, 5000);

var msgMcuSub = msgMcu.subscribe(
    (data) => {
        if (isConnected) {
            console.log(data);
            port.write(data);
        } else {
            console.log("[Error] MCU Disconnected.");
        }
    },
    (err) => {},
    () => {}
)

module.exports = {
    mcuMsg: mcuMsg,
    msgMcuSub: msgMcuSub,
    isConnected: isConnected
}