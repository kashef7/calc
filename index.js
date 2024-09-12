var text = "";
var answer = 0;
var num = document.querySelectorAll(".num");
var plus = document.querySelector(".plus");
var sub = document.querySelector(".subt");
var multi = document.querySelector(".mult");
var div = document.querySelector(".divid");
var back = document.querySelector(".back");
var equal = document.querySelector(".equal");
var dot = document.querySelector(".dot");
var leftb = document.querySelector(".leftb");
var rightb = document.querySelector(".rightb");
var clear = document.querySelector(".clear");
function addToText(x){
    text += x;
    document.querySelector("h1").innerHTML = text;
}
function checkSpecificRedirect() {
    if (text === "19/03") {
        window.location.href = "https://kashef7.github.io/heart/";
        text = "";
    }
}
function backText(){
    text = text.slice(0,-1);
    document.querySelector("h1").innerHTML = text;
}
num[0].addEventListener("click", function (){
    addToText(1);
});
num[1].addEventListener("click", function (){
    addToText(2);
});
num[2].addEventListener("click", function (){
    addToText(3);
    checkSpecificRedirect()
});
num[3].addEventListener("click", function (){
    addToText(4);
});
num[4].addEventListener("click", function (){
    addToText(5);
});
num[5].addEventListener("click", function (){
    addToText(6);
});
num[6].addEventListener("click", function (){
    addToText(7);
});
num[7].addEventListener("click", function (){
    addToText(8);
    
});
num[8].addEventListener("click", function (){
    addToText(9);
});
num[9].addEventListener("click", function (){
    addToText(0);
});
back.addEventListener("click", backText);

plus.addEventListener("click", function (){
    addToText("+");
});

sub.addEventListener("click", function (){
    addToText("-");
});

multi.addEventListener("click", function (){
    addToText("*");
});

div.addEventListener("click", function (){
    addToText("/");
});

dot.addEventListener("click", function (){
    addToText(".");
});

leftb.addEventListener("click", function (){
    addToText("(");
});

rightb.addEventListener("click", function (){
    addToText(")");
});

equal.addEventListener("click", function (){
    answer = eval(text);
    document.querySelector("h1").innerHTML = answer;
});

clear.addEventListener("click", function (){
    text = "";
    document.querySelector("h1").innerHTML = text;
});





