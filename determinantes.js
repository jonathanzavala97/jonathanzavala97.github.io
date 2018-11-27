 function determinante(){
    
    


    //PARA PRIMERA TABLA
        // Obtenemos el valor por el Nombre
        var valor11=document.getElementsByName("det1x1")[0].value;
        var valor12=document.getElementsByName("det1x2")[0].value;
        var valor13=document.getElementsByName("det1x3")[0].value;


        var cc1= parseFloat(valor11);
		var cc2= parseFloat(valor12);
        var cc3= parseFloat(valor13);

        var d1c1=cc1-1+1;
        var d1c2=cc2-1+1;
        var d1c3=cc3-1+1;
 

        var valor21=document.getElementsByName("det2x1")[0].value;
        var valor22=document.getElementsByName("det2x2")[0].value;
        var valor23=document.getElementsByName("det2x3")[0].value;

        var cc5= parseFloat(valor21);
		var cc6= parseFloat(valor22);
        var cc7= parseFloat(valor23);
    
        var d2c1=cc5-1+1;
        var d2c2=cc6-1+1;
        var d2c3=cc7-1+1;
    


        var valor31=document.getElementsByName("det3x1")[0].value;
        var valor32=document.getElementsByName("det3x2")[0].value;
        var valor33=document.getElementsByName("det3x3")[0].value;
   
        var cc9= parseFloat(valor31);
		var cc10= parseFloat(valor32);
        var cc11= parseFloat(valor33);
  
        var d3c1=cc9-1+1;
        var d3c2=cc10-1+1;
        var d3c3=cc11-1+1;
     
      
var columna1=" + ( "+d1c1+" ) ";
var columna2=" - ( "+d1c2+" ) ";
var columna3=" + ( "+d1c3+" ) ";
    
    $("#columna1").html(columna1);
    $("#columna2").html(columna2);
    $("#columna3").html(columna3);


    $("#det1").html(d2c2);
    $("#det2").html(d2c3);
    $("#det3").html(d3c2);
    $("#det4").html(d3c3);
  
    $("#det5").html(d2c1);
    $("#det6").html(d2c3);
    $("#det7").html(d3c1);
    $("#det8").html(d3c3);
  
    $("#det9").html(d2c1);
    $("#det10").html(d2c2);
    $("#det11").html(d3c1);
    $("#det12").html(d3c2);



var ecuacion="det A = ( "+d1c1+" ) "+" [( "+ d2c2+" ) ( " +d3c3+" ) - ( "+d3c2+" ) ( "+d2c3+ " )]       - ( "+d1c2+" ) "+" [( "+ d2c1+" ) ( " +d3c3+" ) - ( "+d3c1+" ) ( "+d2c3+ " )]       + ( " +d1c3+" ) "+" [( "+ d2c1+" ) ( " +d3c2+" ) - ( "+d3c1+" ) ( "+d2c2 +" )]";
$("#stink").html(ecuacion);
  


var sub1=d2c2*d3c3;
var sub2=d3c2*d2c3;
var sub3=sub1-sub2;  
var bon=d1c1*sub3;


var ssub1=d2c1*d3c3;
var ssub2=d3c1*d2c3;
var ssub3=d1c2*-1;
var ssub4=ssub1-ssub2;
var bon1=ssub4*ssub3;

var tsub1 =d2c1*d3c2;
var tsub2 =d3c1*d2c2;
var tsub3=tsub1-tsub2;
var bon2=tsub3*d1c3;

var Finale=bon+bon1+bon2;
var comentario="El determinate de la matriz es " +Finale;

$("#stink1").html(comentario);

  
  }



   function determinante1(){
        var svalor11=document.getElementsByName("mdet1x1")[0].value;
        var svalor12=document.getElementsByName("mdet1x2")[0].value;
        var svalor21=document.getElementsByName("mdet2x1")[0].value;
        var svalor22=document.getElementsByName("mdet2x2")[0].value;

        var scc1= parseFloat(svalor11);
        var scc2= parseFloat(svalor12);
        var scc3= parseFloat(svalor21);
        var scc4= parseFloat(svalor22);

        var sd1c1=scc1-1+1;
        var sd1c2=scc2-1+1;
        var sd2c1=scc3-1+1;
        var sd2c2=scc4-1+1;
 
    $("#mdet1").html(sd1c1);
    $("#mdet2").html(sd1c2);
    $("#mdet3").html(sd2c1);
    $("#mdet4").html(sd2c2);

var mecuacion="det A = ( "+ sd1c1+" ) ( " +sd2c2+" ) - ( "+sd2c1+" ) ( "+sd1c2+ " )";
$("#mstink").html(mecuacion);

var msub1=sd1c1*sd2c2;
var msub2=sd2c1*sd1c2;
var msub3=msub1-msub2;


var mcomentario="El determinate de la matriz es " +msub3;

$("#mstink1").html(mcomentario);




}