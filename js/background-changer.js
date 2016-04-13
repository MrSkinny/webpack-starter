'use strict';

const $ = require('jquery');

function makeBackgroundRed(){
  $('body').css({ 'background-color': 'red' });
}

module.exports = makeBackgroundRed;
