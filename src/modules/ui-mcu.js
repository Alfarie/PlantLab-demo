var io = null;
var sensors = require('./sensors')
var reqmcu = require('./mcu-ui');
var serial = require('./serial');


var Rx = require('rxjs');

var emitsubject = new Rx.Subject();

var InitSocketIO = function(socketio) {
    io = socketio;
    io.on('connection', function(socket) {
        console.log("[LINKIT] Client Connected");
        socket.join('0x01');

        socket.on('DATETIME_UPDATE', function(data) {
            console.log(data);
            var datearr = data.date.split('-');
            console.log(datearr)
            var day = parseInt(datearr[2]);
            var month = parseInt(datearr[1]);
            var year = parseInt(datearr[0]) % 2000;

            var timearr = data.time.split(':');
            var hour = parseInt(timearr[0]);
            var min = parseInt(timearr[1]);
            console.log(day, month, year, hour, min);
            var str = "{datetime," + day + "," + month + "," + year + "," + hour + "," + min + "}";
            serial.msgMcuSub.next(str);
            console.log(str);
        })

        socket.on('SHORT_LOGGER_REQ', function() {
            socket.emit('SHORT_LOGGER_REP', sensors.shortLogger);
        });

        socket.on('REQ_SETTING', function() {
            console.log('[Info] SocketIO: REQ_SETTING')
            serial.msgMcuSub.next("{cmd, req_setting}")
        });

        socket.on('CHANGE_TIMER_MODE', function(data) {
            console.log('[Info] SocketIO: CHANGE_TIMER_MODE')
            var mode = data.mode;
            var str = "{timermode," + mode + "}";
            serial.msgMcuSub.next(str);
        })
        socket.on('CHANGE_TIMER_SWITCH', function(data) {
            console.log('[Info] SocketIO: CHANGE_TIMER_SWITCH')
            var mode = data.mode;
            var str = "{timerswitch," + mode + "}";
            serial.msgMcuSub.next(str);
        })

        socket.on('UPDATE_LED_TIMER', function(data) {
            console.log('[Info] SocketIO: UPDATE_LED_TIMER')
            console.log(data);

            var str = "{timer,"
            for (var i = 0; i < data.length; i++) {
                str += data[i].start + "-" + data[i].end
                if (i != data.length - 1) {
                    str += ",";
                }
            }
            str += "}";
            serial.msgMcuSub.next(str);
        })

        socket.on('CHANGE_CO2_CONTROL', function(data) {
            var mode = data.mode;
            var str = "{co2control," + mode + "}";
            serial.msgMcuSub.next(str);
        })

        socket.on('CHANGE_EC_CONTROL', function(data) {
            var mode = data.mode;
            var str = "{eccontrol," + mode + "}";
            serial.msgMcuSub.next(str);
        })

        socket.on('CHANGE_PH_CONTROL', function(data) {
            var mode = data.mode;
            var str = "{phcontrol," + mode + "}";
            serial.msgMcuSub.next(str);
        })

        socket.on('CHANGE_CIRCULATING', function(data) {
            var mode = data.mode;
            var str = "{circulating," + mode + "}";
            serial.msgMcuSub.next(str);
        })

        socket.on('CHANGE_FILLWATER', function(data) {
            var mode = data.mode;
            var str = "{fillwater," + mode + "}";
            serial.msgMcuSub.next(str);
        })

        socket.on('CHANGE_WATER_SYSTEM', function(data) {
                var mode = data.mode;
                var str = "{watersystem," + mode + "}";
                serial.msgMcuSub.next(str);
            })
            // {basicconfig, ec-set, ph-set, co2-set, ec-work, ph-work}
        socket.on('UPDATE_BASIC_CONFIG', function(data) {
            console.log(data);
            var ecset = data['ec-setpoint'];
            var phset = data['ph-setpoint'];
            var co2set = data['co2-setpoint'];
            var ecwork = data['ec-working'];
            var phwork = data['ph-working'];
            console.log(ecset, phset, co2set, ecwork, phwork);
            var str = "{basicconfig," + ecset + "," + phset + "," + co2set + "," + ecwork + "," + phwork + "}";
            serial.msgMcuSub.next(str);
        });

        socket.on('UPDATE_SYS_PARAM', function(data) {
            console.log(data);
            /*{ date: '2017-11-11',
                time: '12:12',
                co2control: false,
                eccontrol: false,
                phcontrol: false,
                circulating: false,
                fillwater: false,
                timercontrol: false 
            }*/

            // var datearr = data.date.split('-');
            // var day = parseInt(datearr[2]);
            // var month = parseInt(datearr[1]);
            // var year = parseInt(datearr[0]) % 2000;

            // var timearr = data.time.split(':');
            // var hour = parseInt(timearr[0]);
            // var min = parseInt(timearr[1]);

            var cirtime = data['circulatingTime']

            var cooktime = data['cookingTime']

            // year,hour,min, cirtime, cooktime, co2val, ecval, phval, cirval, fillval, timerval}
            var com = "{sysparam," +
                cirtime + "," +
                cooktime + "}";
            console.log(com);
            serial.msgMcuSub.next(com);
        });



    });
    return io;
}
var emitsubscribe = emitsubject.subscribe(
    (data) => {
        io.to(data[0]).emit(data[1], data[2])
    },
    (err) => {},
    () => {}
)
module.exports = {
    InitSocketIO: InitSocketIO,
    io: io,
    emitsubject: emitsubject
}