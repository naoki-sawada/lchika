'use strict'
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const fs = require('fs');
const io = require('socket.io')(http);

const config = {
  port: 80,
  entory: './www'
};

app.use(express.static(config.entory));
app.use(bodyParser.json());

// apiにpostでアクセスされた時の処理
app.post('/api', (req, res) => {
  if ( req.accepts('application/json') ) {
    console.log(req.body);
    //let jsonObj = JSON.parse(req.body);
    // fs.writeFile(`${config.entory}/json/test.json`, JSON.stringify(req.body));
    // socket.ioで送信する。
    io.emit('text', req.body);
    res.send('ok!');
  } else {
    res.status(406).end('error!');
  }
});

// apiにpostでアクセスされた時の処理
app.post('/api/audio', (req, res) => {
  if ( req.accepts('application/json') ) {
    console.log(req.body);
    //let jsonObj = JSON.parse(req.body);
    // fs.writeFile(`${config.entory}/json/audio.json`, JSON.stringify(req.body));
    // socket.ioで送信する。
    io.emit('audio', req.body);
    res.send('ok!');
  } else {
    res.status(406).end('error!');
  }
});

http.listen(config.port, () => {
  console.log(`listening on *: ${config.port}`);
});

io.on('connect', (socket) => {
  console.log('Client connect!');
});
