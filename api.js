var axios = require('axios');
var api_url = "http://9cd973fd.ngrok.io";

exports.getTable = function() {
    return axios.get(api_url + '/box/table/get-table');
}

exports.updateMovemet = function(code, movement) {
    return axios.post(api_url + '/user/update-movement', { code: code, movimiento: movement })
}