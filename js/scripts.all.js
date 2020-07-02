(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){
        $( "#slider-range-min11" ).slider({
          range: "min",
          value: 1,
          step: 0.10,
          min: 0,
          max: 10,
          slide: function( event, ui ) {
              if((ui.value + (ui.value * 0.2))< 10){
                $( "#slider-range-min12" ).slider( "value", (ui.value + (ui.value * 0.2)) );
                $( ".count1" ).text( (ui.value + (ui.value * 0.2)) );
              } else {
                  return false;
              }
           
          }
        });
        $( "#slider-range-min12" ).slider({
          range: "min",
          value: 1,
          min: 0,
          max: 10
        });


        $( "#slider-range-min21" ).slider({
            range: "min",
            value: 10,
            step: 0.10,
            min: 0,
            max: 50,
            slide: function( event, ui ) {
                if((ui.value + (ui.value * 0.2))< 50){
                  $( "#slider-range-min22" ).slider( "value", (ui.value + (ui.value * 0.3)) );
                  $( ".count1" ).text( (ui.value + (ui.value * 0.2)) );
                } else {
                    return false;
                }
             
            }
          });
          $( "#slider-range-min22" ).slider({
            range: "min",
            value: 10,
            min: 0,
            max: 50
          });
        
        // $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
});
},{}]},{},[1]);
