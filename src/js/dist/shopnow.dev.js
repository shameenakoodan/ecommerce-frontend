"use strict";

var productlist = function productlist() {
  var products = new Map([['smartwatch', 'smartwatch.jpg'], ['camera', 'camera.jpg'], ['headphone', 'headphone.jpg'], ['videogame', 'videogame.jpg'], ['microphone', 'microphone.jpg'], ['speaker', 'speaker.jpg'], ['drone', 'drone.jpg']]);
  products.forEach(function (value, key) {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(key);
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("products-list");
    document.body.insertBefore(newDiv, currentDiv); //document.getElementById("products-list").innerHTML += key;
  });
};