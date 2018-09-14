function RelojDigital(){

 //var Horasumada = document.getElementById(Elemento); 
 var Tiempo = new Date(); // funcion date de js
 var Minutos = Tiempo.getMinutes(); // etenciones sobre la variable Tiempo
 var Segundos = Tiempo.getSeconds();
 var Hora = Tiempo.getHours();







 var a = -7;
 //var d = Horasumada;
 var b = parseInt(Tiempo.getHours());
 var c = a+b;

//Tiempo.setHours(Tiempo.getHours()+1);
var ExtHora2; 

if(c < 12){
  ExtHora2="AM";

 }else{ 
  ExtHora2= "PM";

 }

if(c > 12){
  c-=12;
 }else{ 
  c= c;
 }
 
 if(c == 0){
  c=12;
 }else{ 
  c= c;
 }




 var ExtHora;
 var HoraCompleta;
 var HoraCompletacion;
 
 if(Minutos < 10){
  Minutos="0" + Minutos;
 }else{ 
  Minutos= "" + Minutos;
 }
 
 if(Segundos < 10){
  Segundos="0" + Segundos;
 }else{ 
  Segundos= "" + Segundos;
 }
 
 if(Hora < 12){
  ExtHora="AM";
 }else{ 
  ExtHora= "PM";
 }
 
 if(Hora > 12){
  Hora-=12;
 }else{ 
  Hora= Hora;
 }
 
 if(Hora == 0){
  Hora=12;
 }else{ 
  Hora= Hora;
 }

 
 HoraCompleta = Hora + ":" + Minutos + ":" + Segundos + ":" + ExtHora;
 $("#reloj").html(HoraCompleta);
HoraCompletacion = c + ":" + Minutos + ":" + Segundos + ":" + ExtHora2;
 $("#reloj1").html(HoraCompletacion);


}




$(document).ready(function(){
setInterval(RelojDigital, 1000); // llama la funcion anterior cada segundo
 });



