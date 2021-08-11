canvas=document.getElementById("myCanvas");
pen=canvas.getContext("2d");
color="red";
mouseX="";
mouseY="";
function circle(x,y){
    pen.beginPath();
    pen.strokeStyle=grey;
    pen.lineWidth=4;
    pen.rect(150, 143, 430, 200);
    pen.stroke(); 

    pen.beginPath();
    pen.strokeStyle="blue";
    pen.lineWidth=3;
    pen.arc(250, 210, 40, 0, 2*Math.PI);
    pen.stroke(); 

    pen.beginPath();
    pen.strokeStyle="black";
    pen.lineWidth=3;
    pen.arc(300, 210, 50, 0, 2*Math.PI);
    pen.stroke(); 

    pen.beginPath();
    pen.strokeStyle="red";
    pen.lineWidth=3;
    pen.arc(x, 210, 50, 0, 2*Math.PI);
    pen.stroke();
    
    pen.beginPath();
    pen.strokeStyle="yellow";
    pen.lineWidth=3;
    pen.arc(x, 210, 50, 0, 2*Math.PI);
    pen.stroke();
    
    pen.beginPath();
    pen.strokeStyle="green";
    pen.lineWidth=3;
    pen.arc(x, 210, 50, 0, 2*Math.PI);
    pen.stroke(); 
}



canvas.addEventListener("mousedown",santis_mousedown);
function santis_mousedown(e){
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    console.log("X= "+mouseX+" Y="+mouseY);
    circle(mouseX,mouseY);

}

