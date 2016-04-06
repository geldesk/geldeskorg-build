'use strict';
var geldesk = require('geldesk');
var app = geldesk.app();
var createView = require('./views/main/window.js');

app.start()
.then(main);

function main() {
  var win = createView();
  win.on('resized', function() {
    console.log('win resized (OK)');
  });
  win.show()
    .then(function(result) {
      console.log(win.name() + ' window show,load (OK)');
    })
    .then(waitAndDoStuff());
}

function waitAndDoStuff(win) {
  return function() {
    var n = 10;
    console.log('Waiting for ' + n + ' seconds...');
    //console.log('Check out our window...');
    //console.dir(win);
    setTimeout(function() {
      win.close();
    }, n * 1000);
  };
}




