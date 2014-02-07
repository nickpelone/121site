/*
    NM 121
    Assignment 1

    Color changing Javascript code
    Changes the color style property of all 'ascii' class HTML elements
    every 300ms through a setInterval call that's passed an anonymous
    function
    */
/*jshint browser:true, devel:true */
(function () {
    //Run in EMCAScript 5 Strict mode (best practices)
    "use strict";
    var colorChanger = setInterval(function () {
        /* how this works:
        We package up a string that is a valid hex color.
        We start the string with the pound-sign,
        then ask the Math object for the largest number that is less than or equal to
        a random number, multiply it by white (0xFFFFFF), and then add a trailing zero to the number in hex (via bitwise shifts, if needed -
        else it just no-ops).
        We then turn this number into a string and add it to the string we were working on earlier, with the pound sign.$
        */
        var color = '#' + Math.floor(Math.random() * 0xFFFFFF << 0).toString(16),
            header = document.getElementsByClassName("ascii");
        //deal with array
        for (var i = 0; i < header.length; ++i) {
            //we go through each element that is of class ascii, and then change it's color style property through assignment.
            header[i].style.color = color;
        }
        /* the nextline ends the anonymous function. Then there is a comma, because the anonymous
        function was an *argument* to setInterval. It takes another argument which tells it how often to execute the code.
        It takes numbers and treats them as milliseconds. For example, the next line asks the browser to do the color change for all elements
        once every 300ms. */

    }, 300);
}());
