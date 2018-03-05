var mac;
var macid;

var MacToID = function(mac) {
    var arr = mac.split(":");
    var macStr = "";
    arr.forEach(num => {
        macStr += num;
    })
    return macStr + "@intelagro.com";
}

require('getmac').getMac(function(err, macAddress) {
    if (err) throw err
    console.log("[Info] Machine address : ", macAddress)
    mac = macAddress;
    macid = MacToID(mac);
    console.log(macid);
})


module.exports = {
    mac: mac,
    macid: macid
}