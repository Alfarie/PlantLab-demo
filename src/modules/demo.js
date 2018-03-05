var emit = require('./ui-mcu').emitsubject;
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

//"{\"type\": \"water\",\"data\": { \"time\":" + String(current_time ) + ", \"total_time\":0 , \"process\": \"Fill water\"} }";
var time = 0;
var max = 30;
var state = 0;
var process = "";
setInterval( ()=>{
    if(state == 0){
        process = "Fill water";
    }
    else if(state== 1){
        process = "Cooking"
    }
    else if(state  == 2){
        process = "Circulating";
    }
    var data = {
        time: time++,
        total_time: max,
        process: process
    }
    if(time >= max){
        state++;
        state = (state <= 2)? state:0;
        time = 0;
    }
    emit.next(['0x01', 'WATER_STATUS', data]);
}, 1000);
// "{\"type\": \"co2-control\",\"data\": { \"values\": \"" + String(_sensor->GetCO2()) + "/" + String(_upper) + "\", \"process\": \"No Feed CO2\"} }";

setInterval( ()=> {
    var data = {
        values: getRandomFloat(1000, 1020).toFixed(0) + "/1500",
        process: "Feeding CO2"

    }
    emit.next(['0x01', 'CO2_STATUS', data]);
} , 1000);
setInterval(() => {
    var sensorData = {
        co2: parseFloat(getRandomFloat(1000, 1020).toFixed(0)),
        ec:  parseFloat(getRandomFloat(1.0, 1.2).toFixed(2)),
        ph:  parseFloat(getRandomFloat(6.6, 6.8).toFixed(2)),
        temp:  parseFloat(getRandomFloat(25, 26).toFixed(2)),
        humi:  parseFloat(getRandomFloat(50, 52).toFixed(2)),
        light: parseFloat(getRandomFloat(10000,11000).toFixed(0)),
        date: "2017-1-1",
        time:  new Date().toLocaleTimeString()
    }
    emit.next(['0x01', 'SENSOR_DATA', sensorData]);
}, 1000)