var posx;
var posy;

var winy;
var winx;

function draw() {
    var canvas = document.getElementById('eyes');
    if (canvas.getContext) {
        
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,600,600);
      ctx.imageSmoothingEnabled = true;


      var image = document.getElementById("avatar");
      var image_eye = document.getElementById("eye");
      ctx.drawImage(image,100,0, 420 ,400);
      ctx.drawImage(image_eye,248+ (posx*8),174+(posy*8), 16 ,16);
      ctx.drawImage(image_eye,318+ (posx*8),174+(posy*8), 16 ,16);

    }
  }

 

  window.onload = function(){
    posx = 0.25;
    posy=0.25;
    console.log("2");
    draw();
  }





  document.onmousemove=getCursorPos;
var output = document.getElementById('output');
function getCursorPos(a)
{

winy = document.getElementById("header").offsetHeight;
winx = document.getElementById("header").offsetWidth;

posx = a.clientX/winx;
posy = a.clientY/winy;



draw();
} 