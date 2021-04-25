var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8077;

app.use(express.static(path.join(__dirname, '/')));

// viewed at http://localhost:8078
//app.get('/', function(req, res) {
  //  res.sendFile(path.join(__dirname + '/index.html'));
//});

app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname });
});

app.get('/index2.html', (req, res) => {
    res.sendFile('/index2.html', { root: __dirname });
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


  