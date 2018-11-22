//Horas
var selectmicro = document.getElementById('micro');
selectmicro.addEventListener('change',
  function(){
    var selectedOption = this.options[selectmicro.selectedIndex];
  });

//Otros
var selectrefri = document.getElementById('refri');
selectrefri.addEventListener('change',
  function(){
    var selectedOption = this.options[selectrefri.selectedIndex];
  });

//Fanes
var selectlav = document.getElementById('lavadora');
selectlav.addEventListener('change',
  function(){
    var selectedOption = this.options[selectlav.selectedIndex];
  });

//DVD
var selectplancha = document.getElementById('plancha');
selectplancha.addEventListener('change',
  function(){
    var selectedOption = this.options[selectplancha.selectedIndex];
  });

//Mouse
var selectbombillas = document.getElementById('bombillas');
selectbombillas.addEventListener('change',
  function(){
    var selectedOption = this.options[selectbombillas.selectedIndex];
  });

//HDD
var selecttele = document.getElementById('Television');
selecttele.addEventListener('change',
  function(){
    var selectedOption = this.options[selecttele.selectedIndex];
  });

//SSD
var selectvent = document.getElementById('ventilador');
selectvent.addEventListener('change',
  function(){
    var selectedOption = this.options[selectvent.selectedIndex];
  });

//Monitor
var selectrouter = document.getElementById('router');
selectrouter.addEventListener('change',
  function(){
    var selectedOption = this.options[selectrouter.selectedIndex];
  });

//RAM
var selectimp = document.getElementById('imp');
selectimp.addEventListener('change',
  function(){
    var selectedOption = this.options[selectimp.selectedIndex];
  });

//Cantidad de Ram
var selecttel = document.getElementById('tel');
selecttel.addEventListener('change',
  function(){
    var selectedOption = this.options[selecttel.selectedIndex];
  });

//OC GPU
var selectrdvd = document.getElementById('RDVD');
selectrdvd.addEventListener('change',
  function(){
    var selectedOption = this.options[selectrdvd.selectedIndex];
  });



function comes(){

var micro = parseFloat(selectmicro.value);
var refri = parseFloat(selectrefri.value);
var lav =parseFloat(selectlav.value);
var plancha =parseFloat(selectplancha.value);
var bombillas =parseFloat(selectbombillas.value);
var tele =parseFloat(selecttele.value);
var vent =parseFloat(selectvent.value);
var router =parseFloat(selectrouter.value);
var imp =parseFloat(selectimp.value);
var tel =parseFloat(selecttel.value);
var rdvd =parseFloat(selectrdvd.value);




var subproceso=(micro*1.2)+(refri*0.35)+(lav*0.5)+(plancha*1)+(bombillas*0.04)+(tele*0.82);
var subproceso2=(vent*0.5)+(router*0.015)+(imp*0.15)+(tel*0.03)+(rdvd*0.2);

var gg=(subproceso+subproceso2).toFixed(3)+" kWh";/*
var ll=gg.toFixed(3);
*/

$("#TotalCasa").html(gg);
}

