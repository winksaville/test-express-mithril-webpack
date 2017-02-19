var express = require('express');
var router = express.Router();
var app = express();
var expressWs = require('express-ws')(app);

/* Web Socket echo handler */
router.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    console.log('ws.on: msg=' + msg);
    // Echo message
    ws.send(msg);
  });
});

module.exports = router;
