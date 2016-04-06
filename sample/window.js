'use strict';
var geldesk = require('geldesk');
var Component = geldesk.Component;
var Window = geldesk.ui.Window;

module.exports = function createView(name) {
  name = name || '';
  return Component.build([
    name + ':Window', {
      title: 'A native window',
      startPosition: 'center'
    },
    ['./data.js'],
    ['./commands.js'],
    ['./menu.js'],
    ['./toolbar.js'],
    ['status:Statusbar', null, ['label', {text: 'Ready'}]],
    ['./sidepanel.js'],
    [':Browser', {
      dock: 'fill',
      url: 'https://getbootstrap.com/examples/grid/'
      //url: 'http://whatsmyuseragent.com/'
      //url: 'https://www.whatismybrowser.com/'
      //url: 'http://960.gs/'
    }],
    [':DataGrid', {
      dock: 'bottom-split',
      columns: [
        'Column1',
        'Column2',
        'Column3'
      ]
    }]
  ], __dirname);
};
