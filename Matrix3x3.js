  function capturar()
    {
    


    //PARA PRIMERA TABLA
        // Obtenemos el valor por el Nombre
        var fila1col1=document.getElementsByName("1x1")[0].value;
        var fila1col2=document.getElementsByName("1x2")[0].value;
        var fila1col3=document.getElementsByName("1x3")[0].value;
        var fila1res1=document.getElementsByName("x1")[0].value;
        

        var converfila1col1= parseFloat(fila1col1);
		var converfila1col2= parseFloat(fila1col2);
        var converfila1col3= parseFloat(fila1col3);
        var converfila1res1= parseFloat(fila1res1);

        var f1c1=converfila1col1-1+1;
        var f1c2=converfila1col2-1+1;
        var f1c3=converfila1col3-1+1;
        var r1= converfila1res1-1+1;


        var fila2col1=document.getElementsByName("2x1")[0].value;
        var fila2col2=document.getElementsByName("2x2")[0].value;
        var fila2col3=document.getElementsByName("2x3")[0].value;
        var fila2res1=document.getElementsByName("x2")[0].value;

        var converfila2col1= parseFloat(fila2col1);
		var converfila2col2= parseFloat(fila2col2);
        var converfila2col3= parseFloat(fila2col3);
        var converfila2res1= parseFloat(fila2res1);

        var f2c1=converfila2col1-1+1;
        var f2c2=converfila2col2-1+1;
        var f2c3=converfila2col3-1+1;
        var r2= converfila2res1-1+1;


        var fila3col1=document.getElementsByName("3x1")[0].value;
        var fila3col2=document.getElementsByName("3x2")[0].value;
        var fila3col3=document.getElementsByName("3x3")[0].value;
        var fila3res1=document.getElementsByName("x3")[0].value;

        var converfila3col1= parseFloat(fila3col1);
		var converfila3col2= parseFloat(fila3col2);
        var converfila3col3= parseFloat(fila3col3);
        var converfila3res1= parseFloat(fila3res1);

        var f3c1=converfila3col1-1+1;
        var f3c2=converfila3col2-1+1;
        var f3c3=converfila3col3-1+1;
        var r3= converfila3res1-1+1;

	


         $("#primera1x1").html(f1c1);
         $("#primera1x2").html(f1c2);
         $("#primera1x3").html(f1c3);
         $("#primeraresult1").html(r1);

         $("#primera2x1").html(f2c1);
         $("#primera2x2").html(f2c2);
         $("#primera2x3").html(f2c3);
         $("#primeraresult2").html(r2);

         $("#primera3x1").html(f3c1);
         $("#primera3x2").html(f3c2);
         $("#primera3x3").html(f3c3);
         $("#primeraresult3").html(r3);


         var h1 ="Se divide la primera fila entre "+f1c1;

         $("#divisor1").html(h1);

//PARA SEGUNDA TABLA

        var sf1c1=f1c1/f1c1;
        var sf1c2=f1c2/f1c1;
        var sf1c3=f1c3/f1c1;
        var sr1= r1/f1c1;


        var sf2c1=f2c1;
        var sf2c2=f2c2;
        var sf2c3=f2c3;
        var sr2= r2;


        var sf3c1=f3c1;
        var sf3c2=f3c2;
        var sf3c3=f3c3;
        var sr3= r3;





         $("#segunda1x1").html(sf1c1);
         $("#segunda1x2").html(sf1c2);
         $("#segunda1x3").html(sf1c3);
         $("#segundaresult1").html(sr1);

         $("#segunda2x1").html(f2c1);
         $("#segunda2x2").html(f2c2);
         $("#segunda2x3").html(f2c3);
         $("#segundaresult2").html(r2);

         $("#segunda3x1").html(f3c1);
         $("#segunda3x2").html(f3c2);
         $("#segunda3x3").html(f3c3);
         $("#segundaresult3").html(r3);

         var h2 ="Se multiplica la fila 1 por "+(f2c1*-1)+ " y se suma a la linea 2";
		 var h3 ="Se multiplica la fila 1 por "+(f3c1*-1)+ " y se suma a la linea 3";

		 $("#cociente1").html(h2);
		 $("#cociente2").html(h3);


		 //PARA TERCERA TABLA

		 var deter1=(sf2c1*-1);
		 var deter2=(sf3c1*-1);
		 var tf1c1=sf1c1;
		 var tf1c2=sf1c2;
		 var tf1c3=sf1c3;
		 var tr1=sr1;

		 var tf2c1=(sf1c1*deter1)+sf2c1;
		 var tf2c2=(sf1c2*deter1)+sf2c2;
		 var tf2c3=(sf1c3*deter1)+sf2c3;
		 var tr2=(sr1*deter1)+sr2;

		 var tf3c1=(sf1c1*deter2)+sf3c1;
		 var tf3c2=(sf1c2*deter2)+sf3c2;
		 var tf3c3=(sf1c3*deter2)+sf3c3;
		 var tr3=(sr1*deter2)+sr3;



		 $("#tercera1x1").html(tf1c1);
         $("#tercera1x2").html(tf1c2);
         $("#tercera1x3").html(tf1c3);
         $("#terceraresult1").html(tr1);

         $("#tercera2x1").html(tf2c1);   
         $("#tercera2x2").html(tf2c2);
         $("#tercera2x3").html(tf2c3);
         $("#terceraresult2").html(tr2);

         $("#tercera3x1").html(tf3c1);
         $("#tercera3x2").html(tf3c2);
         $("#tercera3x3").html(tf3c3);
         $("#terceraresult3").html(tr3);


         var h4 ="Se divide la segunda fila entre "+tf2c2;

         $("#divisor2").html(h4);


         //CUARTA TABLA

		 var cf1c1=tf1c1;
		 var cf1c2=tf1c2;
		 var cf1c3=tf1c3;
		 var cr1=tr1;

		 var cf2c1=tf2c1/tf2c2;
		 var cf2c2=tf2c2/tf2c2;
		 var cf2c3=tf2c3/tf2c2;
		 var cr2=tr2/tf2c2;

		 var cf3c1=tf3c1;
		 var cf3c2=tf3c2;
		 var cf3c3=tf3c3;
		 var cr3=tr3;



		 $("#cuarta1x1").html(cf1c1);
         $("#cuarta1x2").html(cf1c2);
         $("#cuarta1x3").html(cf1c3);
         $("#cuartaresult1").html(cr1);

         $("#cuarta2x1").html(cf2c1);   
         $("#cuarta2x2").html(cf2c2);
         $("#cuarta2x3").html(cf2c3);
         $("#cuartaresult2").html(cr2);

         $("#cuarta3x1").html(cf3c1);
         $("#cuarta3x2").html(cf3c2);
         $("#cuarta3x3").html(cf3c3);
         $("#cuartaresult3").html(cr3);


          var h5 ="Se multiplica la fila 2 por "+(tf3c2*-1)+ " y se suma a la linea 3";
           $("#cociente3").html(h5);


///DESDE ACA

		 var deter3=(tf3c2*-1);
		
		 var qf1c1=cf1c1;
		 var qf1c2=cf1c2;
		 var qf1c3=cf1c3;
		 var qr1=cr1;

		 var qf2c1=cf2c1;
		 var qf2c2=cf2c2;
		 var qf2c3=cf2c3;
		 var qr2=cr2;

		 var qf3c1=(cf2c1*deter3)+cf3c1;
		 var qf3c2=(cf2c2*deter3)+cf3c2;
		 var qf3c3=(cf2c3*deter3)+cf3c3;
		 var qr3=(cr2*deter3)+cr3;



		 $("#quinta1x1").html(qf1c1);
         $("#quinta1x2").html(qf1c2);
         $("#quinta1x3").html(qf1c3);
         $("#quintaresult1").html(qr1);

         $("#quinta2x1").html(qf2c1);   
         $("#quinta2x2").html(qf2c2);
         $("#quinta2x3").html(qf2c3);
         $("#quintaresult2").html(qr2);

         $("#quinta3x1").html(qf3c1);
         $("#quinta3x2").html(qf3c2);
         $("#quinta3x3").html(qf3c3);
         $("#quintaresult3").html(qr3);




         var h6 ="Se divide la tercera fila entre "+qf3c3;

         $("#divisor3").html(h6);


//Sexta Final

		
		 var sxf1c1=qf1c1;
		 var sxf1c2=qf1c2;
		 var sxf1c3=qf1c3;
		 var sxr1=qr1;

		 var sxf2c1=qf2c1;
		 var sxf2c2=qf2c2;
		 var sxf2c3=qf2c3;
		 var sxr2=qr2;

		 var sxf3c1=qf3c1/qf3c3;
		 var sxf3c2=qf3c2/qf3c3;
		 var sxf3c3=qf3c3/qf3c3;
		 var sxr3=qr3/qf3c3;



		 $("#sexta1x1").html(sxf1c1);
         $("#sexta1x2").html(sxf1c2);
         $("#sexta1x3").html(sxf1c3);
         $("#sextaresult1").html(sxr1);

         $("#sexta2x1").html(sxf2c1);   
         $("#sexta2x2").html(sxf2c2);
         $("#sexta2x3").html(sxf2c3);
         $("#sextaresult2").html(sxr2);

         $("#sexta3x1").html(sxf3c1);
         $("#sexta3x2").html(sxf3c2);
         $("#sexta3x3").html(sxf3c3);
         $("#sextaresult3").html(sxr3);


         var h7 ="Intensidad 3 es "+sxr3;

         $("#resultado1").html(h7);

         ///resultasos de las i



         var tool1="( " +sxf2c3+" ) "+ " ( "+sxr3+" )";
         var subtool1=((sxr3*sxf2c3)*-1);
         var tool2="I2= "+sxr2+" + "+ subtool1;
         var tool3="Intensidad 2= "+(sxr2+subtool1);
         var secondIntensity= (sxr2+subtool1);
         var thirdIntensity=sxr3;

         $("#cosa1").html(sxf2c1);   
         $("#cosa2").html(sxf2c2);
         $("#cosa3").html(tool1);
         $("#cosaresult1").html(sxr2);

         $("#aenima1").html(tool2);
         $("#aenima2").html(tool3);




         var stool1="( " +sxf1c2+" ) "+ " ( "+secondIntensity+" )";
         var stool2="( " +sxf1c3+" ) "+ " ( "+thirdIntensity+" )";
         var ssubtool1=((sxf1c2*secondIntensity)*-1);
         var ssubtool2=((sxf1c3*thirdIntensity)*-1);
         var stool3="I1= "+sxr1+" + "+ssubtool1+" + "+ssubtool2;
         var firtsIntensity=(sxr1+ssubtool1+ssubtool2);
		 var stool4="Intensidad 1= "+firtsIntensity;


         $("#segundacosa1").html(sxf1c1);
         $("#segundacosa2").html(stool1);
         $("#segundacosa3").html(stool2);
         $("#segundacosaresult1").html(sxr1);

         $("#aenima3").html(stool3);
         $("#aenima4").html(stool4);



    }