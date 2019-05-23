var botonRojo = document.getElementById('rojo');
var botonAmarillo = document.getElementById('amarillo');
var botonAzul = document.getElementById('azul');
var botonBlanco = document.getElementById('blanco');
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');
papel.fillStyle = "#ffffff";
papel.fillRect(0, 0, 300, 300);
var color = "red", x, y, xfinal, yfinal;
var xPos, yPos;
var trazo = 2;

//declaramos las variables para rescatar la posicion del canvas relativo al DOM
var offsetx = area_de_dibujo.offsetLeft;
var offsety = area_de_dibujo.offsetTop;
var vamoADibuja = false;

//cambiar color del pincel
botonRojo.addEventListener('click', cambiarColorRojo);
botonAmarillo.addEventListener('click', cambiarColorAmarillo);
botonAzul.addEventListener('click', cambiarColorAzul);
botonBlanco.addEventListener('click', cambiarColorBlanco);

trazoLow.addEventListener('click', cambiarTrazoLow);
trazoMed.addEventListener('click', cambiarTrazoMed);
trazoHig.addEventListener('click', cambiarTrazoHig);

document.addEventListener("mousedown", iniciarDibujo);
document.addEventListener("mouseup", pararDibujo);
document.addEventListener("mousemove", trazadoMouse);

function trazadoMouse(evento)
{
    if (vamoADibuja == true)
    {
      xfinal = evento.clientX - offsetx;
      yfinal = evento.clientY - offsety;
      dibujarLinea(color, x, y, xfinal, yfinal, papel, trazo);
    }
    x = evento.clientX - offsetx,
    y = evento.clientY - offsety;
}
function iniciarDibujo(evento)
{
  x = evento.clientX - offsetx;
  y = evento.clientY - offsety;
  vamoADibuja = true;
}
function pararDibujo() {
  vamoADibuja = false;
}
function dibujarLinea(color, x, y, xfinal, yfinal, lienzo, trazo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = trazo;
    lienzo.moveTo(x, y);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function cambiarColorRojo()
{
  color = 'red';
}
function cambiarColorAmarillo()
{
  color = 'yellow';
}
function cambiarColorAzul()
{
  color = 'blue';
}
function cambiarColorBlanco()
{
  color = 'white';
}
function cambiarTrazoLow()
{
  trazo = 2;
  return(trazo);
}
function cambiarTrazoMed()
{
  trazo = 5;
  return(trazo);
}
function cambiarTrazoHig()
{
  trazo = 10;
  return(trazo);
}
function getCoords(event)
{
  var xp = event.clientX - offsetx;
  var yp = event.clientY - offsety;
  var coor = "X: " + xp + ", Y: " + yp;
  document.getElementById("texto_coor").innerHTML = coor;
}
