var http = require('http');
//var fs = require('fs');

//serveText('Hello World');
serveHtml('<html><body><b>Woot</b> Woot</body></html>');
//serveFile('first.html');
//serveJson('user.json')

function serveText(theText){
  http.createServer(function (req, res) {
    console.log('text was served.')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(theText);
    res.write(', eat more lunch and have tea');
    res.end();
  }).listen(3000);
}

function serveHtml(theHtml){
  http.createServer(function (req, res) {
    console.log('html was served.')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(theHtml);
    res.end();
  }).listen(3000);
}

function serveFile(filename) {
  http.createServer(function (req, res) {
    fs.readFile(filename, function(err, data) {
      if(err)
          console.log(err);
      else {
        console.log('file ' + filename + ' was served.')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      }   
    });
  }).listen(3000);
}

function serveJson(jsonfile) {
  http.createServer(function (req, res) {
    fs.readFile(jsonfile, function(err, data) {
      if(err)
          console.log(err);
      else {
        console.log('json file ' + jsonfile + ' was served.')
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.write(data);
        return res.end();
      }   
    });
  }).listen(3000);
}
