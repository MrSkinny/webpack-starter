'use strict';

const $ = require('jquery');
const makeBackgroundRed = require('./background-changer.js');

$(document).ready(function(){
  console.log('hi from the index');
  makeBackgroundRed();
});

