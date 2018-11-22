//Horas
var selecthora = document.getElementById('Hora');
selecthora.addEventListener('change',
  function(){
    var selectedOption = this.options[selecthora.selectedIndex];
  });

//Otros
var selectotros = document.getElementById('Otros');
selectotros.addEventListener('change',
  function(){
    var selectedOption = this.options[selectotros.selectedIndex];
  });

//Fanes
var selectfan = document.getElementById('Fan');
selectfan.addEventListener('change',
  function(){
    var selectedOption = this.options[selectfan.selectedIndex];
  });

//DVD
var selectdvd = document.getElementById('DVD');
selectdvd.addEventListener('change',
  function(){
    var selectedOption = this.options[selectdvd.selectedIndex];
  });

//Mouse
var selectmouse = document.getElementById('Mouse');
selectmouse.addEventListener('change',
  function(){
    var selectedOption = this.options[selectmouse.selectedIndex];
  });

//HDD
var selecthdd = document.getElementById('HDD');
selecthdd.addEventListener('change',
  function(){
    var selectedOption = this.options[selecthdd.selectedIndex];
  });

//SSD
var selectssd = document.getElementById('SSD');
selectssd.addEventListener('change',
  function(){
    var selectedOption = this.options[selectssd.selectedIndex];
  });

//Monitor
var selectmonitor = document.getElementById('Monitor');
selectmonitor.addEventListener('change',
  function(){
    var selectedOption = this.options[selectmonitor.selectedIndex];
  });

//RAM
var selectram = document.getElementById('RAM');
selectram.addEventListener('change',
  function(){
    var selectedOption = this.options[selectram.selectedIndex];
  });

//Cantidad de Ram
var selectcram = document.getElementById('CRAM');
selectcram.addEventListener('change',
  function(){
    var selectedOption = this.options[selectcram.selectedIndex];
  });

//OC GPU
var selectogpu = document.getElementById('oGPU');
selectogpu.addEventListener('change',
  function(){
    var selectedOption = this.options[selectogpu.selectedIndex];
  });

//GPU
var selectgpu = document.getElementById('GPU');
selectgpu.addEventListener('change',
  function(){
    var selectedOption = this.options[selectgpu.selectedIndex];
  });

//CPU
var selectcpu = document.getElementById('CPU');
selectcpu.addEventListener('change',
  function(){
    var selectedOption = this.options[selectcpu.selectedIndex];
  });

//OC CPU
var selectocpu = document.getElementById('oCPU');
selectocpu.addEventListener('change',
  function(){
    var selectedOption = this.options[selectocpu.selectedIndex];
  });


function enviar(){

var hora = parseFloat(selecthora.value);
var otros = parseFloat(selectotros.value);
var fan =parseFloat(selectfan.value);
var dvd =parseFloat(selectdvd.value);
var mouse =parseFloat(selectmouse.value);
var hdd =parseFloat(selecthdd.value);
var ssd =parseFloat(selectssd.value);
var monitor =parseFloat(selectmonitor.value);
var ram =parseFloat(selectram.value);
var cram =parseFloat(selectcram.value);
var ocgpu =parseFloat(selectogpu.value);
var gpu=  parseFloat(selectgpu.value);
var cpu = parseFloat(selectcpu.value);
var occpu =parseFloat(selectocpu.value);



var subproceso=hora;
var subproceso1=otros+fan+mouse+dvd+hdd+ssd+monitor;
var subproceso2=cram*ram;
var subproceso3=gpu*ocgpu;
var subproceso5=occpu*cpu;

var cosa =subproceso1+subproceso2+subproceso3+subproceso5;
var cosa1=cosa.toFixed(2);
var valores=cosa1+" K";
var kilowatts=cosa1/1000;
var totalgasto=(kilowatts*subproceso)+" kWh";


$("#TotalPC").html(valores);
$("#KH").html(totalgasto);

}

