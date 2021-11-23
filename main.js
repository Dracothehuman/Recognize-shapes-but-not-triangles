x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition;


function start(){
    document.getElementById("status").innerHTML = "The System has activated and is now listening";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    console.log(content);
    document.getElementById("status").innerHTML ="Status is " + content;
    if(content == "rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Drawing Rectangle";
        draw_rectangle = "set";
    }
    if(content == "circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Drawing Circle";
        draw_circle = "set";
    }
}
function preload(){
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(draw_rectangle == "set"){
        rect(x, y, 70, 50);
        fill("blue");
        document.getElementById("status").innerHTML = "Rectangle has been drawn";
        draw_rectangle = "";
    }
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x, y, radius);
        fill("red");
        document.getElementById("status").innerHTML = "Circle Has Been Drawn";
        draw_circle = "";
    }
}


 
