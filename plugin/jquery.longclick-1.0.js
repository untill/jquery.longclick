// -- file start --


/* == metadata start ==


name:
jquery.longclick


summary:
jQuery plugin for support of a long-click event.


description:
This jQuery plugin adds capability to long-click on selected elements, just as a long tap on, say, a mobile device.


keywords:
click, tap, long, jquery, plugin, javascript


dependencies, compatibility, example call/markup/style:
see jquery.longclick.html


license: MIT
Copyright (c) 2015 Till Halbach

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


to do:
- test with more browsers


== metadata end == */


( function( $) {

  // -- variables --
  var  defaults = {
    NS: 'jquery.longclick-',
    delay: 700
  };


  // -- function --
  $.fn.mayTriggerLongClicks = function( options) {
    // alter settings according to options
    var settings = $.extend( defaults, options);
    // define long click based on mousedown and mouseup
    var timer;
    var haveLongClick;
    return $( this).on( 'mousedown', function() {
      haveLongClick = false;
      timer = setTimeout( function( elm) {
	haveLongClick = true;
	$( elm).trigger( 'longClick');
      }, settings.delay, this);
    } ).on( 'mouseup', function() {
      clearTimeout( timer);
    } ).on( 'click', function( evt) {
      if( haveLongClick)
	evt.stopImmediatePropagation();
    } );
  }  // $.fn.mayTriggerLongClicks
  
} )( jQuery);


// -- file end --
