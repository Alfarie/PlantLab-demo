var sensors = require('./sensors');
var config = require('../config');
var fs = require('fs');
var db = require('./firebase').DB;
var loop = null;
var dir = './logger';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

var start = function() {
    console.log("LOGGER TIME : " + config.logger_time);
    loop = setInterval(LoggerLoop, 300000);
}

var stop = function() {
    clearInterval(loop);
}

var LoggerLoop = function() {

    var sensor = sensors.sensors;
    console.log("logging..", sensor);
    if (sensor.date != undefined) {
        var sensor = sensors.sensors;
        if (sensor.date != undefined) {
            var loggerStr = sensor;
            fs.appendFile(config.rootdir + '/logger/' + sensor.date, JSON.stringify(loggerStr) + ",\n", function(err) {
                if (err) console.log(err);
            })
            db.next({
                path: 'logger',
                data: sensor
            });
        }
    }
}

module.exports.start = start;
module.exports.stop = stop;