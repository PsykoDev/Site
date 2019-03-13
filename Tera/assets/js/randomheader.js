// JavaScript Document
var headers = ["images/tete.jpg", "images/tete2.jpg", "images/tete3.jpg", "images/tete4.jpg", "images/tete5.jpg", "images/tete6.jpg", "images/tete7.jpg", "images/tete8.jpg", "images/tete9.jpg"];
document.getElementById("header").style.backgroundImage = "url(" + headers[Math.floor(Math.random(+1)*headers.length)] +")";