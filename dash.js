var express = rquire('express');
var path = require('path');
var app = express();

app.get('/', function(req, resp) {
  resp.sendFile('index.html', {root: path.join(__dirname, './files')});
})


app.listen(1337, function() {
  console.log('On port 1377');
}
