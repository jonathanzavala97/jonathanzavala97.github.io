  function matriz2()
    {
    


    //PARA PRIMERA TABLA
        // Obtenemos el valor por el Nombre
        var fila1col1=document.getElementsByName("m1x1")[0].value;
        var fila1col2=document.getElementsByName("m1x2")[0].value;
        var fila1col3=document.getElementsByName("m1x3")[0].value;
        var fila1col4=document.getElementsByName("m1x4")[0].value
        var fila1res1=document.getElementsByName("mx1")[0].value;
        

        var converfila1col1= parseFloat(fila1col1);
		var converfila1col2= parseFloat(fila1col2);
        var converfila1col3= parseFloat(fila1col3);
        var converfila1col4= parseFloat(fila1col4);
        
        var converfila1res1= parseFloat(fila1res1);

        var f1c1=converfila1col1-1+1;
        var f1c2=converfila1col2-1+1;
        var f1c3=converfila1col3-1+1;
        var f1c4=converfila1col4-1+1;
        
        var r1= converfila1res1-1+1;


        var fila2col1=document.getElementsByName("m2x1")[0].value;
        var fila2col2=document.getElementsByName("m2x2")[0].value;
        var fila2col3=document.getElementsByName("m2x3")[0].value;
        var fila2col4=document.getElementsByName("m2x4")[0].value;
        
        var fila2res1=document.getElementsByName("mx2")[0].value;

        var converfila2col1= parseFloat(fila2col1);
		var converfila2col2= parseFloat(fila2col2);
        var converfila2col3= parseFloat(fila2col3);
        var converfila2col4= parseFloat(fila2col4);
        var converfila2res1= parseFloat(fila2res1);

        var f2c1=converfila2col1-1+1;
        var f2c2=converfila2col2-1+1;
        var f2c3=converfila2col3-1+1;
        var f2c4=converfila2col4-1+1;
        var r2= converfila2res1-1+1;


        var fila3col1=document.getElementsByName("m3x1")[0].value;
        var fila3col2=document.getElementsByName("m3x2")[0].value;
        var fila3col3=document.getElementsByName("m3x3")[0].value;
        var fila3col4=document.getElementsByName("m3x4")[0].value;
        var fila3res1=document.getElementsByName("mx3")[0].value;

        var converfila3col1= parseFloat(fila3col1);
		var converfila3col2= parseFloat(fila3col2);
        var converfila3col3= parseFloat(fila3col3);
         var converfila3col4= parseFloat(fila3col4);
        var converfila3res1= parseFloat(fila3res1);

        var f3c1=converfila3col1-1+1;
        var f3c2=converfila3col2-1+1;
        var f3c3=converfila3col3-1+1;
        var f3c4=converfila3col4-1+1;
        var r3= converfila3res1-1+1;


         var fila4col1=document.getElementsByName("m4x1")[0].value;
        var fila4col2=document.getElementsByName("m4x2")[0].value;
        var fila4col3=document.getElementsByName("m4x3")[0].value;
        var fila4col4=document.getElementsByName("m4x4")[0].value;
        var fila4res1=document.getElementsByName("mx4")[0].value;

        var converfila4col1= parseFloat(fila4col1);
        var converfila4col2= parseFloat(fila4col2);
        var converfila4col3= parseFloat(fila4col3);
         var converfila4col4= parseFloat(fila4col4);
        var converfila4res1= parseFloat(fila4res1);

        var f4c1=converfila4col1-1+1;
        var f4c2=converfila4col2-1+1;
        var f4c3=converfila4col3-1+1;
        var f4c4=converfila4col4-1+1;
        var r4= converfila4res1-1+1;
	


         $("#mprimera1x1").html(f1c1);
         $("#mprimera1x2").html(f1c2);
         $("#mprimera1x3").html(f1c3);
          $("#mprimera1x4").html(f1c4);
         $("#mprimeraresult1").html(r1);

         $("#mprimera2x1").html(f2c1);
         $("#mprimera2x2").html(f2c2);
         $("#mprimera2x3").html(f2c3);
          $("#mprimera2x4").html(f2c4);
         $("#mprimeraresult2").html(r2);

         $("#mprimera3x1").html(f3c1);
         $("#mprimera3x2").html(f3c2);
         $("#mprimera3x3").html(f3c3);
          $("#mprimera3x4").html(f3c4);
         $("#mprimeraresult3").html(r3);


         $("#mprimera4x1").html(f4c1);
         $("#mprimera4x2").html(f4c2);
         $("#mprimera4x3").html(f4c3);
          $("#mprimera4x4").html(f4c4);
         $("#mprimeraresult4").html(r4);


         var h1 ="Se divide la primera fila entre "+f1c1;

         $("#prom").html(h1);

         

//PARA SEGUNDA TABLA

        var sf1c1=f1c1/f1c1;
        var sf1c2=f1c2/f1c1;
        var sf1c3=f1c3/f1c1;
        var sf1c4=f1c4/f1c1;
        var sr1= r1/f1c1;


        var sf2c1=f2c1;
        var sf2c2=f2c2;
        var sf2c3=f2c3;
        var sf2c4=f2c4;
        var sr2= r2;


        var sf3c1=f3c1;
        var sf3c2=f3c2;
        var sf3c3=f3c3;
        var sf3c4=f3c4;
        var sr3= r3;


        var sf4c1=f4c1;
        var sf4c2=f4c2;
        var sf4c3=f4c3;
        var sf4c4=f4c4;
        var sr4= r4;



         $("#msegunda1x1").html(sf1c1);
         $("#msegunda1x2").html(sf1c2);
         $("#msegunda1x3").html(sf1c3);
          $("#msegunda1x4").html(sf1c4);
         $("#msegundaresult1").html(sr1);

         $("#msegunda2x1").html(sf2c1);
         $("#msegunda2x2").html(sf2c2);
         $("#msegunda2x3").html(sf2c3);
          $("#msegunda2x4").html(sf2c4);
         $("#msegundaresult2").html(sr2);

         $("#msegunda3x1").html(sf3c1);
         $("#msegunda3x2").html(sf3c2);
         $("#msegunda3x3").html(sf3c3);
          $("#msegunda3x4").html(sf3c4);
         $("#msegundaresult3").html(sr3);


         $("#msegunda4x1").html(sf4c1);
         $("#msegunda4x2").html(sf4c2);
         $("#msegunda4x3").html(sf4c3);
          $("#msegunda4x4").html(sf4c4);
         $("#msegundaresult4").html(sr4);



         var h2 ="Se multiplica la fila 1 por "+(f2c1*-1)+ " y se suma a la linea 2";
		 var h3 ="Se multiplica la fila 1 por "+(f3c1*-1)+ " y se suma a la linea 3";
         var h4 ="Se multiplica la fila 1 por "+(f4c1*-1)+ " y se suma a la linea 4";
         
		 $("#prom2").html(h2);
		 $("#prom3").html(h3);
         $("#prom4").html(h4);


		 //PARA TERCERA TABLA

		 var deter1=(sf2c1*-1);
		 var deter2=(sf3c1*-1);
         var deter3=(sf4c1*-1);

		 var tf1c1=sf1c1;
		 var tf1c2=sf1c2;
		 var tf1c3=sf1c3;
		 var tf1c4=sf1c4;
         
         var tr1=sr1;

		 var tf2c1=(sf1c1*deter1)+sf2c1;
		 var tf2c2=(sf1c2*deter1)+sf2c2;
		 var tf2c3=(sf1c3*deter1)+sf2c3;
		 var tf2c4=(sf1c4*deter1)+sf2c4;
         
         var tr2=(sr1*deter1)+sr2;

		 var tf3c1=(sf1c1*deter2)+sf3c1;
		 var tf3c2=(sf1c2*deter2)+sf3c2;
		 var tf3c3=(sf1c3*deter2)+sf3c3;
		 var tf3c4=(sf1c4*deter2)+sf3c4;
         
         var tr3=(sr1*deter2)+sr3;

            
        var tf4c1=(sf1c1*deter3)+sf4c1;
         var tf4c2=(sf1c2*deter3)+sf4c2;
         var tf4c3=(sf1c3*deter3)+sf4c3;
         var tf4c4=(sf1c4*deter3)+sf4c4;
         
         var tr4=(sr1*deter3)+sr4;



         $("#mtercera1x1").html(tf1c1);
         $("#mtercera1x2").html(tf1c2);
         $("#mtercera1x3").html(tf1c3);
          $("#mtercera1x4").html(tf1c4);
         $("#mterceraresult1").html(tr1);

         $("#mtercera2x1").html(tf2c1);
         $("#mtercera2x2").html(tf2c2);
        $("#mtercera2x3").html(tf2c3);
          $("#mtercera2x4").html(tf2c4);
         $("#mterceraresult2").html(tr2);

         $("#mtercera3x1").html(tf3c1);
         $("#mtercera3x2").html(tf3c2);
         $("#mtercera3x3").html(tf3c3);
          $("#mtercera3x4").html(tf3c4);
         $("#mterceraresult3").html(tr3);


         $("#mtercera4x1").html(tf4c1);
         $("#mtercera4x2").html(tf4c2);
         $("#mtercera4x3").html(tf4c3);
          $("#mtercera4x4").html(tf4c4);
         $("#mterceraresult4").html(tr4);



         var h5 ="Se divide la segunda fila entre "+tf2c2;

         $("#prom5").html(h5);


         //CUARTA TABLA

		 var cf1c1=tf1c1;
		 var cf1c2=tf1c2;
		 var cf1c3=tf1c3;
         var cf1c4=tf1c4;
		 var cr1=tr1;

		 var cf2c1=tf2c1/tf2c2;
		 var cf2c2=tf2c2/tf2c2;
		 var cf2c3=tf2c3/tf2c2;
         var cf2c4=tf2c4/tf2c2;
		 var cr2=tr2/tf2c2;

		 var cf3c1=tf3c1;
		 var cf3c2=tf3c2;
		 var cf3c3=tf3c3;
         var cf3c4=tf3c4;
		 var cr3=tr3;


         var cf4c1=tf4c1;
         var cf4c2=tf4c2;
         var cf4c3=tf4c3;
         var cf4c4=tf4c4;
         var cr4=tr4;


         $("#mcuarta1x1").html(cf1c1);
         $("#mcuarta1x2").html(cf1c2);
         $("#mcuarta1x3").html(cf1c3);
          $("#mcuarta1x4").html(cf1c4);
         $("#mcuartaresult1").html(cr1);

         $("#mcuarta2x1").html(cf2c1);
         $("#mcuarta2x2").html(cf2c2);
         $("#mcuarta2x3").html(cf2c3);
          $("#mcuarta2x4").html(cf2c4);
         $("#mcuartaresult2").html(cr2);

         $("#mcuarta3x1").html(cf3c1);
         $("#mcuarta3x2").html(cf3c2);
         $("#mcuarta3x3").html(cf3c3);
          $("#mcuarta3x4").html(cf3c4);
         $("#mcuartaresult3").html(cr3);


         $("#mcuarta4x1").html(cf4c1);
         $("#mcuarta4x2").html(cf4c2);
         $("#mcuarta4x3").html(cf4c3);
          $("#mcuarta4x4").html(cf4c4);
         $("#mcuartaresult4").html(cr4);








         var sebas ="Se multiplica la fila 2 por "+(tf1c2*-1)+ " y se suma a la linea 1";
          var h6 ="Se multiplica la fila 2 por "+(tf3c2*-1)+ " y se suma a la linea 3";
          var h7 ="Se multiplica la fila 2 por "+(tf4c2*-1)+ " y se suma a la linea 4";
           $("#sebas").html(sebas);
           $("#prom6").html(h6);
           $("#prom7").html(h7);



///DESDE ACA
        var mora=(tf1c2*-1);
		 var deter4=(tf3c2*-1);
         var deter5=(tf4c2*-1);
		
		 var qf1c1=(cf2c1*mora)+cf1c1;
		 var qf1c2=(cf2c2*mora)+cf1c2;
		 var qf1c3=(cf2c3*mora)+cf1c3;
		 var qf1c4=(cf2c4*mora)+cf1c4;
         
         var qr1=(cr2*mora)+cr1;

		 var qf2c1=cf2c1;
		 var qf2c2=cf2c2;
		 var qf2c3=cf2c3;
		 var qf2c4=cf2c4;
         
         var qr2=cr2;

		 var qf3c1=(cf2c1*deter4)+cf3c1;
		 var qf3c2=(cf2c2*deter4)+cf3c2;
		 var qf3c3=(cf2c3*deter4)+cf3c3;
		 var qf3c4=(cf2c4*deter4)+cf3c4;
         
         var qr3=(cr2*deter4)+cr3;



         var qf4c1=(cf2c1*deter5)+cf4c1;
         var qf4c2=(cf2c2*deter5)+cf4c2;
         var qf4c3=(cf2c3*deter5)+cf4c3;
         var qf4c4=(cf2c4*deter5)+cf4c4;
         
         var qr4=(cr2*deter5)+cr4;


         

         $("#mquinta1x1").html(qf1c1);
         $("#mquinta1x2").html(qf1c2);
         $("#mquinta1x3").html(qf1c3);
          $("#mquinta1x4").html(qf1c4);
         $("#mquintaresult1").html(qr1);

         $("#mquinta2x1").html(qf2c1);
         $("#mquinta2x2").html(qf2c2);
         $("#mquinta2x3").html(qf2c3);
          $("#mquinta2x4").html(qf2c4);
         $("#mquintaresult2").html(qr2);

         $("#mquinta3x1").html(qf3c1);
         $("#mquinta3x2").html(qf3c2);
         $("#mquinta3x3").html(qf3c3);
          $("#mquinta3x4").html(qf3c4);
         $("#mquintaresult3").html(qr3);


         $("#mquinta4x1").html(qf4c1);
         $("#mquinta4x2").html(qf4c2);
         $("#mquinta4x3").html(qf4c3);
          $("#mquinta4x4").html(qf4c4);
         $("#mquintaresult4").html(qr4);


         var h8 ="Se divide la tercera fila entre "+qf3c3;

         $("#prom8").html(h8);


//Sexta Final
        
		
		 var sxf1c1=qf1c1;
		 var sxf1c2=qf1c2;
		 var sxf1c3=qf1c3;
         var sxf1c4=qf1c4;
		 var sxr1=qr1;

		 var sxf2c1=qf2c1;
		 var sxf2c2=qf2c2;
		 var sxf2c3=qf2c3;
		 var sxf2c4=qf2c4;
         var sxr2=qr2;

		 var sxf3c1=qf3c1/qf3c3;
		 var sxf3c2=qf3c2/qf3c3;
		 var sxf3c3=qf3c3/qf3c3;
         var sxf3c4=qf3c4/qf3c3;
		 var sxr3=qr3/qf3c3;


        
         var sxf4c1=qf4c1;
         var sxf4c2=qf4c2;
         var sxf4c3=qf4c3;
         var sxf4c4=qf4c4;
         var sxr4=qr4;




         $("#msexta1x1").html(sxf1c1);
         $("#msexta1x2").html(sxf1c2);
         $("#msexta1x3").html(sxf1c3);
          $("#msexta1x4").html(sxf1c4);
         $("#msextaresult1").html(sxr1);

         $("#msexta2x1").html(sxf2c1);
         $("#msexta2x2").html(sxf2c2);
         $("#msexta2x3").html(sxf2c3);
          $("#msexta2x4").html(sxf2c4);
         $("#msextaresult2").html(sxr2);

         $("#msexta3x1").html(sxf3c1);
         $("#msexta3x2").html(sxf3c2);
         $("#msexta3x3").html(sxf3c3);
          $("#msexta3x4").html(sxf3c4);
         $("#msextaresult3").html(sxr3);


         $("#msexta4x1").html(sxf4c1);
         $("#msexta4x2").html(sxf4c2);
         $("#msexta4x3").html(sxf4c3);
          $("#mssexta4x4").html(sxf4c4);
         $("#msextaresult4").html(sxr4);



         var sebas3 ="Se multiplica la fila 3 por "+(sxf1c3*-1)+ " y se suma a la linea 1";
         var sebas2 ="Se multiplica la fila 3 por "+(sxf2c3*-1)+ " y se suma a la linea 2";
         var h9 ="Se multiplica la fila 3 por "+(sxf4c3*-1)+ " y se suma a la linea 4";

          $("#sebas3").html(sebas3);
           $("#sebas2").html(sebas2);
         $("#prom9").html(h9);




         //para septima tabla
         var deter6=qf4c3*-1;
         var mora2=qf1c3*-1;
         var mora3=qf2c3*-1;


        var spf1c1=(sxf3c1*mora2)+sxf1c1;
         var spf1c2=(sxf3c2*mora2)+sxf1c2;
         var spf1c3=(sxf3c3*mora2)+sxf1c3;
         var spf1c4=(sxf3c4*mora2)+sxf1c4;
         var spr1=(sxr3*mora2)+sxr1;

         var spf2c1=(sxf3c1*mora3)+sxf2c1;
         var spf2c2=(sxf3c2*mora3)+sxf2c2;
         var spf2c3=(sxf3c3*mora3)+sxf2c3;
         var spf2c4=(sxf3c1*mora3)+sxf2c4;
         var spr2=(sxr3*mora3)+sxr2;

         var spf3c1=sxf3c1;
         var spf3c2=sxf3c2;
         var spf3c3=sxf3c3;
         var spf3c4=sxf3c4;
         var spr3=sxr3;


      
         var spf4c1=(sxf3c1*deter6)+sxf4c1;
        var spf4c2=(sxf3c2*deter6)+sxf4c2;
         var spf4c3=(sxf3c3*deter6)+sxf4c3;
        var spf4c4=(sxf3c4*deter6)+sxf4c4;
        var spr4=(sxr3*deter6)+sxr4;



         $("#mseptima1x1").html(spf1c1);
         $("#mseptima1x2").html(spf1c2);
         $("#mseptima1x3").html(spf1c3);
          $("#mseptima1x4").html(spf1c4);
         $("#mseptimaresult1").html(spr1);

         $("#mseptima2x1").html(spf2c1);
         $("#mseptima2x2").html(spf2c2);
         $("#mseptima2x3").html(spf2c3);
          $("#mseptima1x4").html(spf2c4);
         $("#mseptimaresult2").html(spr2);

         $("#mseptima3x1").html(spf3c1);
         $("#mseptima3x2").html(spf3c2);
         $("#mseptima3x3").html(spf3c3);
          $("#mseptima3x4").html(spf3c4);
         $("#mseptimaresult3").html(spr3);


         $("#mseptima4x1").html(spf4c1);
         $("#mseptima4x2").html(spf4c2);
         $("#mseptima4x3").html(spf4c3);
          $("#mseptima4x4").html(spf4c4);
         $("#mseptimaresult4").html(spr4);


         var h10 ="Se divide la cuarta fila entre "+spf4c4;

         $("#prom10").html(h10);



         //para octava tabla

    
        
         var ocf1c1=spf1c1;
         var ocf1c2=spf1c2;
         var ocf1c3=spf1c3;
         var ocf1c4=spf1c4;
         var ocr1=spr1;

         var ocf2c1=spf2c1;
         var ocf2c2=spf2c2;
         var ocf2c3=spf2c3;
         var ocf2c4=spf2c4;
         var ocr2=spr2;

       var ocf3c1=spf3c1;
         var ocf3c2=spf3c2;
         var ocf3c3=spf3c3;
         var ocf3c4=spf3c4;
         var ocr3=spr3;


        
         var ocf4c1=spf4c1/spf4c4;
         var ocf4c2=spf4c2/spf4c4;
         var ocf4c3=spf4c3/spf4c4;
         var ocf4c4=spf4c4/spf4c4;
         var ocr4=spr4/spf4c4;


        

         $("#moctava1x1").html(ocf1c1);
         $("#moctava1x2").html(ocf1c2);
         $("#moctava1x3").html(ocf1c3);
          $("#moctava1x4").html(ocf1c4);
         $("#moctavaresult1").html(ocr1);

         $("#moctava2x1").html(ocf2c1);
         $("#moctava2x2").html(ocf2c2);
         $("#moctava2x3").html(ocf2c3);
          $("#moctava1x4").html(ocf2c4);
         $("#moctavaresult2").html(ocr2);

         $("#moctava3x1").html(ocf3c1);
         $("#moctava3x2").html(ocf3c2);
         $("#moctava3x3").html(ocf3c3);
          $("#moctava3x4").html(ocf3c4);
         $("#moctavaresult3").html(ocr3);

         $("#moctava4x1").html(ocf4c1);
         $("#moctava4x2").html(ocf4c2);
         $("#moctava4x3").html(ocf4c3);
          $("#moctava4x4").html(ocf4c4);
         $("#moctavaresult4").html(ocr4);





         var h11 ="Intensidad 4 es "+ocr4;

         $("#ress").html(h11);



          var mora5=ocf3c4*-1;
         var mora6=ocf1c4*-1;
         var mora7=ocf2c4*-1;


        var nf1c1=(ocf4c1*mora6)+ocf1c1;
         var nf1c2=(ocf4c2*mora6)+ocf1c2;
         var nf1c3=(ocf4c3*mora6)+ocf1c3;
         var nf1c4=(ocf4c4*mora6)+ocf1c4;
         var nr1=(ocr4*mora6)+ocr1;

         var nf2c1=(ocf4c1*mora7)+ocf2c1;
         var nf2c2=(ocf4c2*mora7)+ocf2c2;
         var nf2c3=(ocf4c3*mora7)+ocf2c3;
         var nf2c4=(ocf4c4*mora7)+ocf2c4;
         var nr2=(ocr4*mora7)+ocr2;

         var nf3c1=(ocf4c1*mora5)+ocf3c1;
         var nf3c2=(ocf4c2*mora5)+ocf3c2;
         var nf3c3=(ocf4c3*mora5)+ocf3c3;
         var nf3c4=(ocf4c4*mora5)+ocf3c4;
         var nr3=(ocr4*mora5)+ocr3;


      
         var nf4c1=ocf4c1;
        var nf4c2=ocf4c2;
         var nf4c3=ocf4c3;
        var nf4c4=ocf4c4;
        var nr4=ocr4;



           $("#mnovena1x1").html(nf1c1);
         $("#mnovena1x2").html(nf1c2);
         $("#mnovena1x3").html(nf1c3);
          $("#mnovena1x4").html(nf1c4);
         $("#mnovenaresult1").html(nr1);

         $("#mnovena2x1").html(nf2c1);
         $("#mnovena2x2").html(nf2c2);
         $("#mnovena2x3").html(nf2c3);
          $("#mnovena1x4").html(nf2c4);
         $("#mnovenaresult2").html(nr2);

         $("#mnovena3x1").html(nf3c1);
         $("#mnovena3x2").html(nf3c2);
         $("#mnovena3x3").html(nf3c3);
          $("#mnovena3x4").html(nf3c4);
         $("#mnovenaresult3").html(nr3);

         $("#mnovena4x1").html(nf4c1);
         $("#mnovena4x2").html(nf4c2);
         $("#mnovena4x3").html(nf4c3);
          $("#mnovena4x4").html(nf4c4);
         $("#mnovenaresult4").html(nr4);


var h21 ="Intensidad 3 es "+nr3;

         $("#ress1").html(h21);
var h31 ="Intensidad 2 es "+nr2;

         $("#ress2").html(h31);
var h41 ="Intensidad 1 es "+nr1;

         $("#ress3").html(h41);



    }