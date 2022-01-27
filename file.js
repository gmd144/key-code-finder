var heading = document.querySelector("h1");
var heading2 = document.querySelector("h2");
var body = document.querySelector("body");

body.addEventListener("keypress", function(e){
    var key = e.key !== " " ? e.key : e.code;
    heading.textContent = e.keyCode;
    heading2.textContent = key;
})