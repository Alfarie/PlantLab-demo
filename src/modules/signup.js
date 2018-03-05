var firebase = require("firebase");
require("firebase/auth");

var config = {
    apiKey: "AIzaSyCo_GsOpAV4_WnK4lwm_G1O-oEcmQDnshs",
    authDomain: "plantlab-01.firebaseapp.com",
    databaseURL: "https://plantlab-01.firebaseio.com",
    projectId: "plantlab-01",
    storageBucket: "plantlab-01.appspot.com",
    messagingSenderId: "851900341011"
};
firebase.initializeApp(config);


var auth = firebase.auth();
var db = firebase.database();
auth.createUserWithEmailAndPassword("grobot.plantlab.01@intelagro.com", "grobot.plantlab.01").then(data => {

    auth.signInWithEmailAndPassword("grobot.plantlab.01@intelagro.com", "grobot.plantlab.01").then(user => {
        InsertNewData(user);
    })

}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('[Error] ', errorCode, errorMessage);

    auth.signInWithEmailAndPassword("grobot.plantlab.01@intelagro.com", "grobot.plantlab.01").then(user => {
        InsertNewData(user);
    })
});




var InsertNewData = function(user) {
    var data = {
        path: 'uids/' + user.uid,
        data: {
            name: "undefined",
            loginTime: Date.now()
        }
    }
    db.ref(data.path).set(data.data)
    db.ref(data.path + "/machine-bind").set("test");
}