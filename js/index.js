import $ from 'npm-zepto';
import second from './second.js';


$(() => {

  console.log('hello from index');
  second();
  $('.container').append('Added from Zepto');
  
});


