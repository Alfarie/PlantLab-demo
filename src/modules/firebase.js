var firebase = require("firebase");
const publicIp = require('public-ip');
var where = require('node-where');
require("firebase/auth");
require("firebase/database");


var Rx = require('rxjs');

var DB = new Rx.Subject();

var mid = undefined;
var mac = undefined;
var publicip = undefined;
var config = {
    apiKey: "AIzaSyCo_GsOpAV4_WnK4lwm_G1O-oEcmQDnshs",
    authDomain: "plantlab-01.firebaseapp.com",
    databaseURL: "https://plantlab-01.firebaseio.com",
    projectId: "plantlab-01",
    storageBucket: "plantlab-01.appspot.com",
    messagingSenderId: "851900341011"
};
firebase.initializeApp(config);


var db = firebase.database();
var auth = firebase.auth();



DB.asObservable().subscribe(data => {

    if (mid) {
        if (data.path == 'sensors') {
            db.ref('mid/' + mid + '/sensors').set(data.data);
        } else if (data.path == 'setting') {
            db.ref('mid/' + mid + '/setting').update(data.data);
        } else if (data.path == 'shortLogger') {
            db.ref('mid/' + mid + '/shortLogger').set(data.data);
        } else if (data.path == 'logger') {
            var ref = db.ref('mid/' + mid + '/logger/' + data.data.date).push();
            ref.set(data.data);
        }
    }
});



var signInAndUpdate = function(id, pass) {
    auth.signInWithEmailAndPassword(id, pass)
        .then(data => {
            console.log("Login successful.");
            mid = auth.currentUser.uid;

            publicIp.v4().then(ip => {
                publicip = ip;
                console.log("[Info] Public IP: ", ip);
                where.is(ip, (err, result) => {

                    if (result) {
                        // console.log('City: ' + result.get('city'));
                        // console.log('State / Region: ' + result.get('region'));
                        // console.log('State / Region Code: ' + result.get('regionCode'));
                        // console.log('Zip: ' + result.get('postalCode'));
                        // console.log('Country: ' + result.get('country'));
                        // console.log('Country Code: ' + result.get('countryCode'));
                        // console.log('Lat: ' + result.get('lat'));
                        // console.log('Lng: ' + result.get('lat'));
                        var data = {
                            path: 'mids/' + mid,
                            data: {
                                startTime: Date.now(),
                                machineId: mac,
                                machineName: "undefined",
                                location: {
                                    lat: result.get('lat'),
                                    lng: result.get('lng'),
                                    country: result.get('country'),
                                    city: result.get('city')
                                }
                            }
                        }
                        db.ref(data.path).update(data.data);
                    }
                });
            });


        })
        .catch(err => {
            console.log(err);
        })
}

var MacToID = function(mac) {
    var arr = mac.split(":");
    var macStr = "";
    arr.forEach(num => {
        macStr += num;
    });
    return macStr + "@intelagro.com";
}





require('getmac').getMac((err, macAddress) => {
    if (err) throw err
    console.log("[Info] Machine address : ", macAddress)
    mac = macAddress;
    var macid = MacToID(mac);

    auth.createUserWithEmailAndPassword(macid, "raspberry").then(data => {
        signInAndUpdate(macid, "raspberry")
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('[Error] ', errorCode, errorMessage);
        signInAndUpdate(macid, "raspberry")
    });


})
module.exports = {
    DB: DB,
    mid: mid
}