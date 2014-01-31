/*jslint browser:true, devel:true */
(function () {
    "use strict";
    //code
    console.log("I dont actually do anything. Go away.");
    var colorChanger = setInterval(function () {
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16),
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