var mouseEvent = "empty"

canvas = document.getElementById("myCanvas");
ctz= canvas.getContext("2d");

color = "Red";
width_of_line=2;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
  radius =  document.getElementById("radius"). value ;
  color = document.getElementById("color"). value ;
  width_of_line =  document.getElementById("width_of_line"). value ;
   
  mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseEvent == "mouseDown"){
console.log("Cureent Position Of x And y Coordinates = ");
console.log("x = " +current_position_of_mouse_x+"y = " +current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius ,0 ,2 * Math.PI);
    ctz.stroke();
  }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
  mouseEvent = "mouseup";
}

 canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
  mouseEvent = "mouseleave";
}

function Clear_area() {
 ctx.clearRect(0,0,canvas.width,canvas.height);
}