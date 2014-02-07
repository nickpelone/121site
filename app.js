/*jshint browser:true, devel:true */
(function () {
    "use strict";
    //test change
    //code
    var colorChanger = setInterval(function () {
        /* how this works:
        We package up a string that is a valid hex color.
        We start the string with the pound-sign,
        then ask the Math object for the largest number that is less than or equal to
        a random number, multiply it by white (0xFFFFFF), and then add a trailing zero to the number in hex (via bitwise shifts).
        We then turn this number into a string and add it to the string we were working on earlier, with the pound sign.$
        */
        var color = '#' + Math.floor(Math.random() * 0xFFFFFF << 0).toString(16),
            header = document.getElementsByClassName("ascii");
        //console.log(header);
        //deal with array
        for (var i = 0; i < header.length; ++i) {
            header[i].style.color = color;
        }
        //console.log(color);
    }, 300);
    console.log("hello");
}());
