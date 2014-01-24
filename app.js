/*jslint browser:true, devel:true */
(function () {
    "use strict";
    //code
    console.log("I dont actually do anything. Go away.");
    var colorChanger = setInterval(function () {
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16), header = document.getElementById("header");
        header.style.color = color;
        console.log(color);
    }, 100);
    console.log("hello");
}());