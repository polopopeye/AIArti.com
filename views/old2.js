//if(!navigator.onLine) {
//inicio detectar ctrl pulsado
var ctrlPress = false;
var esSafari =  false;
var llamandoGestionColaFrames = false;
var colaFrames = [];
var colaIDFrames = [];
//detecta si se ha pulsado el control o el cmd en mac o el escape
$(document).keydown(function(e) {
  if(e.key == 'Control' || e.key == 'Meta') {
    ctrlPress = true;
  }
  /*if(e.key == 'Escape') {
    ocultarCapasSobreVideo();
  }*/
});

//detecta si se ha dejado de pulsar el control o el cmd en mac o el escape
$(document).keyup(function(e) {
  if(e.key == 'Control' || e.key == 'Meta') {
    ctrlPress = false;
  }
});
//fin detectar ctrl pulsado

//al cargar el fichero obtiene los datos del estudio actualmente
$(document).ready(function() {
 /* if($('#divContBotonera').hasClass('d-none') && $('#botoneraAtributosGenerales')[0].childElementCount == 0){
    $('#botoneraAtributosGenerales').hide();
  }*/
  if($('#esSafari').val() == 'S') {
    esSafari =  true;
  }

  /*if($('#noChrome').val() == 'S') {
    $('#modalChangeNavigator').modal('show');
  }*/

  changeColorText();
  startTime();
  if($('#nv').val() == 1) {
    $('#accConfigBot').click();
  }
  displayTabTags(0, 'divClips', 'tab-vista-acciones');
  localStorage.setItem("tabVistaEstudio", 'divClips');
  localStorage.setItem("tabLinkVistaEstudio", 'tab-vista-acciones');

  idEstudio = $('#ideEstudio').val();
  var tipoServicio = $('#tipoServicio').val();
  var estuLocalStrg = localStorage.getItem("idestudioactual");

  $.ajax({
    cache: false,
    type: 'POST',
    url: '/Plantillas.getEstudio',
    data: {
      'idEstudio': idEstudio,
      'tipoServicio': tipoServicio
    },
    success: function(data) {
     //console.log(data);

      var locStor = [];
        if (estuLocalStrg == idEstudio) {
          locStor = JSON.parse(localStorage.getItem("estudio"));
        }
        if(locStor.length == 0 || data.length > 0){

          estudio = data[0];
          canvasarr = data[2];
          //console.log(estudio);
          //console.log(canvasarr);
          //es estudio
          if($('#divContBotonera').hasClass('d-none')) {
            estudio.sort(sortByProperty('tiempo','boton'));
            canvasarr.sort(sortByProperty('tiempo'));
          } else {
            //solo ordena descendente si ya se ha finalizado la inspeccion
            if(contadorGuardado == ''){
              estudio.sort(sortByPropertyInsp('tiempo'));
              estudio.reverse();
            }
          }
          if(!$('#divContBotonera').hasClass('d-none')) {
            if($('#tipoServicio').val() == 'I'){
              if(estudio.length > 0){
                var contW = parseInt(estudio.length);
                do {
                  contW--;
                  if(estudio[contW] != undefined){
                    $('#roadPK').val(estudio[contW].pk.viapkguardado);
                    $('#direccionPK').val(estudio[contW].pk.sentidopkguardado);
                    if  (estudio[contW].pk.velocidad) {
                      $('#velocidadPK').val(estudio[contW].pk.velocidad);
                    } else {
                      $('#velocidadPK').val(data[1][data[1].length-1].velocidad);
                    }
                    var pkSave = estudio[contW].pk.pkguardado.split('.');
                    $('#pkPKU').val(pkSave[0]);
                    $('#pkPKD').val(pkSave[1]);
                    $('#pkPK3').val(parseFloat(estudio[contW].pk.pkguardado).toFixed(3));
                   //console.log(estudio[contW].pk.pkguardado)
                    var longitud = estudio[contW].pk.pkguardado.length-2
                   //console.log(longitud)
                    var text = estudio[contW].pk.pkguardado.substring(0, longitud);
                   //console.log(text)
                    $('#pkBg').text(text);
                    $('#distancePKTotal').text(parseFloat(estudio[contW].pk.distancia).toFixed(1));
                  }
                }while (estudio[contW].pk.viapkguardado == undefined && contW > 0);
              }else{
                if(data[3] != ''){
                  $('#roadPK').val(data[3].via);
                  $('#direccionPK').val(data[3].sentido);
                  $('#pkPKU').val(data[3].pkU);
                  $('#pkPKD').val(data[3].pkD);
                  $('#velocidadPK').val(data[3].velocidad);
                }
              }
            }
            tiempoTotalIns = data[6];

            var hours = parseInt(Math.floor((tiempoTotalIns / 1000) / 3600 ));
            var minutes = parseInt(Math.floor(((tiempoTotalIns / 1000) % 3600) / 60 ));
            var seconds = parseInt((tiempoTotalIns / 1000) % 60);

            contador_h = hours;
            contador_s = seconds;
            contador_m = minutes;
            //Anteponiendo un 0 a las horas si son menos de 10
            hours = hours < 10 ? '0' + hours : hours;
            //Anteponiendo un 0 a los minutos si son menos de 10
            minutes = minutes < 10 ? '0' + minutes : minutes;
            //Anteponiendo un 0 a los segundos si son menos de 10
            seconds = seconds < 10 ? '0' + seconds : seconds;

            $("#horas").html(hours);
            $("#minutos").html(minutes);
            $("#segundos").html(seconds);
            horIni = hours;
            minIni = minutes;
            segIni = seconds;
          }
          //console.log('*********** Tiempo total inicial **************');
          //console.log(hours +':'+ minutes +':'+ seconds);
          //console.log(tiempoTotalIns);
          //console.log('********************************************');
          var ultAct = false;
          var ultInsert = last;
          for(var g = 0; g < estudio.length; g++){
            if(estudio[g].id == ult && !ultAct){
              ult = g;
              ultAct = true;
            }
            if(estudio[g].id == last - 1) {
              ultInsert = g;
            }
            estudio[g].id = g;
          }
          localStorage.setItem("estudio", JSON.stringify(estudio));

          if (estudio.length > 0) {
            $('#addAll').show();
            $('#addSelect').show();
            $('#num-acciones-coleccion').show();
            $('#exportarVideo').show();
          }
          if (canvasarr.length > 0) {
            $('#exportarDibujos').show();
          }
          if(data[0].length > 0) {
            last = data[0].length;
            ult = last;
          }
          $('#tags').removeClass('d-none');
          if(!$('#divContBotonera').hasClass('d-none')) {
            localStorage.setItem("estudio", JSON.stringify(estudio));
          }
          trackloc = data[1];
          localStorage.setItem("tracker", JSON.stringify(data[1]));
          localStorage.setItem("idestudioactual", idEstudio);
          canvasarr = data[2];
          localStorage.setItem("canvas", JSON.stringify(data[2]));
          trackerpk = data[3];
          localStorage.setItem("trackerpk", JSON.stringify(data[3]));
          //jsonVia = data[7];
          //localStorage.setItem("jsonVia", JSON.stringify(data[7]));
          $('#contags').text(estudio.length);
          contadorGuardado = data[4];
          //saveEstudio(false,false);
          /*if(contadorGuardado != ''){
            activo = 'S';
            iniciaContador();
            //$('#icoPlayBut').addClass('fa-stop');
            //$('#icoPlayBut').removeClass('fa-play');
            $('#playBut').addClass('active');
            $('#playBut').css("background-color", "#C0392B");
            $('#playBut').prop('disabled',false);
            $('#configbutton').addClass('d-none');
            last = estudio.length-1;
            ult = estudio.length-1;
          }*/
          arrclipspkpendientes = data[5];
        }
        estudioCargado = true;
      $('#total-acciones').text(estudio.length);
    }
  });

  $.ajax({
    cache: false,
    type: 'POST',
    url: '/DataEstudios.lastRoad',
    data: {
      'idEstudio': idEstudio,
      'tipoServicio': tipoServicio
    },
    success: function(data) {
      if(data != ''){
        for(var i = 0; i < data.length; i++){
          jsonVia.push(data[i]);
        }
        idRuta = jsonVia.length;
        $('#idRuta').text(idRuta);
      }
    }
  });

});
/* CAMBIA EL COLOR DEL TEXTO*/
function changeColorText(rgb){
  $('.filtro-estudio').each(function(){
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb);
    $(this).css('color', color);
  });

  $('.clip-video-est').each(function(){
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb);
  	$(this).css('color', color);
  });

  $('.paint-video-est').each(function(){
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb);
  	$(this).css('color', color);
  });

  $('.clip-paint-video-est').each(function(){
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb);
  	$(this).css('color', color);
  });


  $('.icono-menu-estudio').each(function(){
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb);
  	$(this).css('color', color);
  });

  $('.botones-favoritos').each(function(){
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb);
  	$(this).css('color', color);
  });

  $('.iconos-favoritos').each(function(){
   //console.log('----------------------------------------------------------------------------');
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb) +' !important';
   //console.log(color);
  	$(this).css('color', color);
  });

  $('.menu-clip-estudio li').each(function(){
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb);
  	$(this).css('color', color);
  	border = '1px solid ' + color;
  	$(this).css('border', border);
  });

  $('.menu-paint-estudio li').each(function(){
    var rgb = $(this).css('background-color');
    color = selectColorText(rgb);
  	$(this).css('color', color);
  	border = '1px solid ' + color;
  	$(this).css('border', border);
  });
}
/* SELECIONA EL COLOR DEL TEXTO EN FUNCION DE COLOR DE FONDO*/
function selectColorText(rgb){
  var colors = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if(colors != null){
    var r = colors[1];
    var g = colors[2];
    var b = colors[3];

    var yiq = ((r*299)+(g*587)+(b*114))/1000;
  	if(yiq >= 128){
  	  return '#000000';
  	}else{
  	  return '#ffffff';
  	}
  }else{
    return '#ffffff';
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  r = parseInt(result[1], 16);
  g = parseInt(result[2], 16);
  b = parseInt(result[3], 16);
  result = 'rgb('+r+','+g+','+b+')';
  return result;
}

//cuando se han reordenado los clips y se guarda, se muestran de nuevo
function modificarContenidoDivTags(resalto, idClip) {
  //console.log('modificarContenidoDivTags(' + resalto + ', ' + idClip + ')');
  var idEstudio = $('#ideEstudio').val();
  var tipoServicio = $('#tipoServicio').val();

  $.ajax({
    cache: false,
    type: 'POST',
    url: '/Plantillas.getEstudioTags',
    data: {
      'idEstudio': idEstudio,
      'tipoServicio': tipoServicio
    },
    success: function(tags) {
      $('#tags').html(tags);
      //console.log(tags);
      //console.log('modificarContenidoDivTags()');
      if(selectedTag != -1) {
        playvideo = true;
        if($('#divContBotonera').hasClass('d-none')) {
          changeTagBackgroundColor(1,selectedTag,'save', false);
        }
      }
      changeColorText();
      if(resalto){
        //console.log('resaltar( 0, ' + idClip + ' )');
        resaltar(0,idClip);
      }
      if(idClip != undefined && idClip != -1){
        var tim = estudio[idClip] ? estudio[idClip].tiempomilis : 0;
    	  var tie = parseFloat(tim)/1000.0;
    	  var temps = video.currentTime().toString().split('\.')[0];
    	  if(estudio[idClip] && estudio[idClip].canvas != -1) {
          show_canvas(temps, 0, false);
    	  }
      }
      //setTimeout('resaltar()',10000);
      //if(addNewTag){
      //$('#slide-dibujos').empty();
      //crearSlideDibujos();
      recargarBanderas();
        //setTimeout('recargarBanderas()',500);
      //}
      if($('#filter-estudio-none').hasClass('active')){
        recuperarFiltro();
      }
      if($('#filter-estudio-pattern').hasClass('active')){
        recuperarFiltro();
      }
      displayTabTags(0, localStorage.getItem("tabVistaEstudio"), localStorage.getItem("tabLinkVistaEstudio"));
    }
  });
 //console.log(estudio)
}

//al hacer clic en la lupa de buscar llama a esta funcion
function botonSearch(){
  buscarEnEstudio(tagfiltro,$('#serachestudio').val());
}

//funcion que busca en los clips del estudio
function buscarEnEstudio(boton,buscador) {
  var idEstudio = $('#ideEstudio').val();
  if(buscador === '') {
    buscador = $('#serachestudio').val();
  }
  var tipoServicio = $('#tipoServicio').val();
  $.ajax({
    cache: false,
    type: 'POST',
    url: '/buscador.searchInEstudio',
    data: {
      'idEstudio': idEstudio,
      'buscador': buscador,
      'tipo': 1,
      'tipoServicio': tipoServicio

    },
    success: function(tags) {
      var htmTags = tags.split('-pum-');
      var sugerenciasAntes = htmTags[0];

      var suger = sugerenciasAntes.split('-plas-');
      var marcadas = suger[0];
      var sugerencias = suger[1];

      var divTags = htmTags[1];
      $('#tags').html(divTags);

      var vacio = "''";
      var comilla = "'";
      var suge = marcadas.split(',');
      $('#tagssearchdiv').html('');
      for(var su = 0; su < suge.length; su++){
        if(suge[su] !== '' && suge[su] !== ' ' && suge[su] !== '##') {
          var marc = '';
          for(var m = 0; m < suge.length; m++){
            if(suge[su] != suge[m]){
              if(marc === '') {
                marc = suge[m];
              } else {
                marc = marc + ' ' + suge[m];
              }
            }
          }
          var nuevoTag = '<a style="text-decoration: none;cursor:pointer;height: 48px;margin-right: 8px;display: inline-block;margin-bottom: 14px;margin-top: 14px;vertical-align: top;" class=""><div style="box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);border-radius: 24px;box-sizing: border-box;color: #3C4043;font-size: 14px;font-weight: 400;height: 48px;line-height: 48px;padding: 0 16px;background-color: #e8f0fe;border-color: #D2E3FC;"><span style="color: #3C4043;font-size: 14px;font-weight: 400;line-height: 48px;">'+suge[su].replace("#","").replace("#","")+'</span><span class="fa fa-times-circle" style="margin-left:10px;vertical-align: middle;font-size: 20px;" onclick="buscarEnEstudio('+vacio+','+comilla+marc+comilla+')"></span></div></a>'
          $('#tagssearchdiv').append(nuevoTag);
        }
      }
      suge = sugerencias.split(',');
      for(var su = 0; su < suge.length; su++){
        if(suge[su] !== '' && suge[su] !== ' ' && suge[su] !== '##') {
          var nuevoTag = '<a style="text-decoration: none;cursor:pointer;height: 48px;margin-right: 8px;display: inline-block;margin-bottom: 14px;margin-top: 14px;vertical-align: top;" onclick="buscarEnEstudio('+vacio+','+comilla+marcadas.replace(","," ")+' #'+suge[su]+'#'+comilla+')" class=""><div style="box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);background-color: white;border-radius: 24px;box-sizing: border-box;color: #3C4043;font-size: 14px;font-weight: 400;height: 48px;line-height: 48px;padding: 0 16px;"><span style="color: #3C4043;font-size: 14px;font-weight: 400;line-height: 48px;">'+suge[su]+'</span></div></a>'
          $('#tagssearchdiv').append(nuevoTag);
        }
      }

      $('.owl-carousel').owlCarousel({
        nav:false,
        dots:false,
        margin: 6,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
        }
      });

      $('.owl-stage').width('100%');
      $('.owl-item').width('auto');
      $('.owl-nav').css('margin-top','-27px');
      //$('#tagssearchdiv').css('margin-top','-11px');
      if(buscador === '') {
        $('#divClips').css('margin-top','0px');
        $('#tagssearchdiv').height('0px');
        $('#tagssearchdiv').height('0px');
      }else{
        $('#divClips').css('margin-top','0px');
        $('#tagssearchdiv').height('75px');
        $('#tagssearchdiv').css('overflow', 'scroll');
      }
      changeColorText();
    }
  });
}
//funcion para ver el pais de las lecturas gps
function getPais(inicio){
 //console.log("getPais: " + inicio);
  var lat, long
  var pais, siglas
  var paisOrigen = $("#paisOrigen").val()
  if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {

      lat = position.coords.latitude;
      long = position.coords.longitude;
      var latlng = lat + "," + long
      $.ajax({
        url: '/	ws_estudios.getPais',
        type: 'post',
        data: {
          'latlng': latlng
        },
        success: function(res) {
          var componentesDir = res.results[0].address_components;
          for(var i = 0; i < componentesDir.length; i++){
            if(componentesDir[i].types[0] == "country"){
              var pais = componentesDir[i].long_name;
              var siglas = componentesDir[i].short_name;
             //console.log(pais + ", " + siglas)
              if(siglas == paisOrigen){
                parar = 0
              }else{
                parar = parar + 1
                if(inicio == 1){
                  $('#accModalConfirmFin').click()
                  $('#labelErrorPK').text('Esta realizando inspecciones en una localizaciÃ³n que no corresponde a la del pais de origen.');
                  $('#labelErrorPK').show()
                }
              }
             //console.log("parar: " + parar )
              if (parar > 4){
                $('#accModalConfirmFin').click()
                $('#labelErrorPK').text('Esta realizando inspecciones en una localizaciÃ³n que no corresponde a la del pais de origen.');
                $('#labelErrorPK').show()
              }
            }
          }
        }
      });
    });
  }else{
    parar = parar + 1
    if (parar > 4){
        $('#accModalConfirmFin').click()
        $('#labelErrorPK').text('Esta realizando inspecciones en una localizaciÃ³n que no corresponde a la del pais de origen.');
        $('#labelErrorPK').show()
      }

  }
}
//al hacer clic en un boton de la botonera llama a esta funcion que se encarga de aÃ±adir a inspeccion/estudio si esta activo el timer o siempre si es estudio
function creacionEstudio2(id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,temp) {
  $("#BotonInOut").attr("disabled", false)
  //$("#BotonInOut2").attr("disabled", false)
  previousEstudio = JSON.stringify(estudio);
  lastChange = 'estudio';
  //console.log('id: ' + id + ' idB: ' + idB + ' idBF: ' + idBF + ' act: ' + act + ' familia: ' + familia + ' pan: ' + pan + ' bloc: ' + bloc + ' boton2: ' + boton2 + ' boton3: ' + boton3 + ' est: ' + est + ' colo: ' + colo + ' colotT: ' + coloT + ' hayestudio: ' + hayestudio + ' esAtributo:' + esAtributo +  ' esInOut:' + esInOut +' segundosIni: ' + segundosIni + ' segundosFin: ' + segundosFin + ' temp: ' + temp);

  var inserta = true;
  $('#undo-estudio').attr('disabled',false);
  if(esAtributo && estudio.length == 0) {
    inserta = true;
  }
  if(est == -1){
    est = $('#ideEstudio').val();
  }
  if(hayestudio === '') {
    hayestudio = false;
  }
  if(esAtributo === '') {
    esAtributo = false;
  }
  if(esInOut === '') {
    esInOut = false;
  }
  if(ctrlPress) {
    esAtributo = true;
  }
  if(segundosIni === '') {
    segundosIni = 1;
  }
  if(segundosFin === '') {
    segundosFin = 3;
  }
  if(filtrando){
    tagfiltro = act;
    buscarEnEstudio(tagfiltro,'');
  } else {

    //si no estÃ¡ el contador de tags es que es un estudio y tiene video, por lo que debe recoger el tiempo del video
    if($('#divContBotonera').hasClass('d-none')) {
      tiempo = $('.vjs-progress-holder').attr('aria-valuetext');
      var splTiempo = tiempo.split(':');
      var horas = '00';
      var min,seg;
      if(splTiempo.length == 2) {
        horas = '00';
        min = splTiempo[0];
        seg = splTiempo[1];
      } else {
        horas = splTiempo[0];
        min = splTiempo[1];
        seg = splTiempo[2];
      }
      if(parseInt(horas) < 10) {
        horas = '0'+parseInt(horas);
      }

      if(parseInt(min) < 10) {
        min = '0'+parseInt(min);
      }

      if(parseInt(seg) < 10) {
        seg = '0'+parseInt(seg);
      }
      tiempo = horas+':'+min+':'+seg;

      tiempomilis = video.currentTime();
      tiempomilis = Math.round(tiempomilis) * 1000;
      tiempomilis = tiempomilis.toFixed(2);
      activo1 = 'S';
      activo2 = 'S';
    }
    /*No se usa*/
    if(temp === -273){
      deshacer = false;
    }else{
      deshacer = true;
    }
    urlPagina = window.location.href;
    if(urlPagina.match(/estudio/)){
      if(esAtributo && deshacer){
        //console.log('if esAtributo');
        resalto = $('.resaltoPlayVid');
        inserta = false;
        for(var i = 0; i < resalto.length; i++){
          //console.log($('#'+resalto[i].id));
          if($('#'+resalto[i].id).hasClass('resalto')){
            //console.log('if true');
            inserta = true;
          }
        }
      }
      if (temp == -888) {
        inserta = true;
      }
    }
    /* Fin */
    contSelected = 0;
    selectedTags = $('.resaltoPlayVid');
    for(var i = 0; i < selectedTags.length; i++){
      //console.log($('#'+selectedTags[i].id));
      if($('#'+selectedTags[i].id).hasClass('resalto')){
        //console.log('if -----------');
        idST = selectedTags[i].id.substr(14);
        contSelected++;
      }
    }
    if(activo1 == 'S' && activo2 == 'S') {
      hayClic = true;
      if(!esSafari) audioclicksound.play();
      if(inserta) {
        mult = false;
        if(esAtributo){
          mult = true;
        }
        if(contSelected > 1){
          mult = true;
        }
        if($('#divContBotonera').hasClass('d-none')){
          mult = true;
        }
        /*En caso de ser un boton in out rallamos el boton y pasamos los datos necesarios*/
        if($("#BotonInOut" + idB).val() !== undefined){
          if(!$('#divContBotonera').hasClass('d-none')){
            $("#boton-fav-"+idB).removeClass("lineas-diagonales-R");
            //$("#boton--"+idB).removeClass("lineas-diagonales-R");
            //$("#"+idB).removeClass("lineas-diagonales-R");
            $("#"+idBF).removeClass("lineas-diagonales-R");
            $("#BotonInOut").attr("disabled", true)
            //$("#BotonInOut2").attr("disabled", true)

            var idTagInOut = $('#BotonInOut'+ idB).val()

            estudio[idTagInOut].tiempoFin = tiempo
            estudio[idTagInOut].tiempomilisFin = tiempomilisFin
            estudio[idTagInOut].geoFin = ultgeo
            estudio[idTagInOut].pkFin = parseFloat($("#pkPK3").val()).toFixed(1)+'00'


             //console.log(estudio[idTagInOut].pkFin);
              $('#gpsFin'+ idTagInOut).html('Fin ' + ultgeo + '<br> PK: ' + parseFloat($("#pkPK3").val()).toFixed(1)+'00<br/>' + tiempo);
              $('#gpsFin'+ idTagInOut).show()
              $("#BotonInOut" + idB).remove()
            return false;
          }else{
           //console.log("ESTUDIO - Si existe boton guardamos los datos de fin y quitamos las rallas.")
            //$("#boton-fav-"+idB).removeClass("lineas-diagonales-R");
            //$("#boton--"+idB).removeClass("lineas-diagonales-R");
            //$("#"+idB).removeClass("lineas-diagonales-R");
            $("#"+idBF).removeClass("lineas-diagonales-R");
            $("#BotonInOut").attr("disabled", true)
            //$("#BotonInOut2").attr("disabled", true)

            var idTagAbsoluto = $('#BotonInOut'+ idB).val()
            var idTagInOut= ''
            for (i = 0; i< estudio.length; i++){
              if(estudio[i].idAbsoluta == idTagAbsoluto){
                idTagInOut = i;
              }
            }
           //console.log(idTagInOut)
            idEst = ideEstudio.value;
           //console.log("Tiempo: " + tiempo)
            estudio[idTagInOut].tiempoFin = tiempo
            tempo = tiempo.split(':');
            tempoAction = parseInt(tempo[0] * 3600 * 1000) + parseInt(tempo[1] * 60 * 1000) + parseInt(tempo[2] * 1000);

            var tipoServicio = $('#tipoServicio').val();

            $.ajax({
              cache: false,
              type: 'POST',
              url: '/PK.getPKEstudio',
              data: {
                'idEstudio': idEst,
                'tiempomilis' : tempoAction,
                'tipoServicio' : tipoServicio
              },
              success: function(data) {
                if(data != ''){
                  pk = data[0]
                  geolocalizacion = data[1];
                  //console.log(geolocalizacion);
                  arrpk = pk.split(",")
                  //console.log(arrpk[4]);
                  arrPkgu = arrpk[4].split(":");

                  estudio[idTagInOut].geoFin = geolocalizacion
                  estudio[idTagInOut].pkFin = arrPkgu[1].replace(/\"/g, '');
                }
                localStorage.setItem("estudio", JSON.stringify(estudio));
                saveEstudio(false,true);

              }

            });
            //$('#gpsFin'+ idTagInOut).html('Fin ' + ultgeo + '<br> PK: ' + parseFloat($("#pkPK3").val()).toFixed(1)+'00<br/>' + tiempo);
            //$('#gpsFin'+ idTagInOut).show()
            $("#BotonInOut" + idB).remove()
            return false;
          }
        }else{
         if(esInOut == true){
          //console.log("Si el boron es In/Out Rallamos el boton y seguimos")
            $("#boton-fav-"+idB).addClass("lineas-diagonales-R");
            //$("#boton--"+idB).addClass("lineas-diagonales-R");
            //$("#"+idB).addClass("lineas-diagonales-R");
            $("#"+idBF).addClass("lineas-diagonales-R");
            $("#BotonInOut").attr("disabled", true)


            //$("#BotonInOut2").attr("disabled", true)
          }
        }
        //console.log(esAtributo + ' - ' + contSelected + ' - ' + $('#divContBotonera').hasClass('d-none'));
        if(esAtributo && contSelected > 0 && $('#divContBotonera').hasClass('d-none')){
          //console.log("if(esAtributo && contSelected > 0 && $('#divContBotonera').hasClass('d-none')){");
        //if(mult){
          for(var i = 0; i < selectedTags.length; i++){
            if($('#'+selectedTags[i].id).hasClass('resalto')){
              idST = selectedTags[i].id.substr(14);
              //console.log('idST:  ' + idST);
              idBF = estudio[selectedTag].idbotonFam;
              insertTagEstudio2(ultgeo,id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,true,idST,temp);
            }
          }
        }else{
          //console.log('else contSelect > 1');
          if(!$('#enableFavs').hasClass('activeIns')){
            insertTagEstudio2(ultgeo,id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,false,temp);
          }
        }
      }
    }
  }
}
//Si no esta activo el modo ediciÃ³n o siempre en caso de inspecciÃ³n aÃ±ade el tag en bbdd
function insertTagEstudio2(geolocalizacion,id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,multiple,selectTag,temp) {
  if(urlPagina.match(/estudio/)){
    $('body').css('cursor','wait');
  }
  //console.log('insertTagEstudio2');
  //console.log('insertTagEstudio2 - ' + multiple + ' - ' + selectTag + ' - ' + act );
  //console.log(estudio.length-1);
  //console.log('getPKs("'+geolocalizacion+'",'+distancia+','+estudio.length+')');
  var ti = tiempo;
  var tipo = 0;
  setTimeout('getPKs("'+geolocalizacion+'",'+distancia+','+estudio.length+',"'+ti+'")',1000);
  //getPKs(geolocalizacion,distancia,estudio.length);
  pendienteGuardar = true;
  addNewTag = true;
  editandoTag =  false;
  addNewAtrib = false;
  delTag = false;
  var newAtr = '';
  var atribTag = '';
  var atributosTag = [];
  var nota = [];
  var colorNotas = 'yellow';
  var today = new Date();

  dia = today.getDate();
  mes = (today.getMonth() +1);
  aÃ±o = today.getFullYear();

  if(dia < 10){
    dia = '0' + dia;
  }
  if(mes < 10){
    mes = '0' + mes;
  }
  if(aÃ±o < 10){
    aÃ±o = '0' + aÃ±o;
  }
  var fecha = dia + "/" + mes + "/" + aÃ±o;

  hours = today.getHours();
  minutes = today.getMinutes();
  seconds = today.getSeconds();
  if(hours < 10){
    hours = '0' + hours;
  }
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  var hora = hours + ":" + minutes + ":" + seconds;
  var autor = $('#autor').val();
  var imagen = '';
  var imagenframe = '';
  var canvasid = pan !== '' ? pan : -1;
  var pk = '""';
  var detallePK = '';
  var detallesEstudio = $('#detalleEstudio').val();
  var semaforo = '';
  var colorSemaforo = '#C0392B';
  var atributos = '';
  //si es atributo se aÃ±ade al Ãºltimo clip y no se crea uno nuevo
  if(esAtributo) {
    if(atributoPulsado === '') {
      atributoPulsado = act;
    } else {
      atributoPulsado = '';
    }
  }
  //console.log('esAtributo: ' + esAtributo);
  //console.log('ctrlPress: ' + ctrlPress);
  //console.log(selectedTag);
  //caso es atributo
  if(ctrlPress || esAtributo) {
    //console.log('esAtributo');
    if($('#atributos').val() == 'S'){
    //console.log('atributos == S');
      addNewAtrib = true;
      addNewTag = false;
      if($('#divContBotonera').hasClass('d-none')) {
          //console.log('if('+selectedTag+' != -1 && ('+video.paused()+' || '+!video.ended()+') && '+!multiple+') {');
        if(selectedTag != -1 && (video.paused() || !video.ended()) && !multiple) {
          ult = selectedTag;
          idAdd = ult;
          //console.log(ult);
        }else{
          //console.log('else ' + selectTag + ' - ' + selectedTag);
          ult = selectTag;
          idAdd = ult;
          selectedTag = selectTag;
        }
      }else{
        if(selectedTag != -1){
          selectedTag = estudio.length-1;
          ult = selectedTag;
        }
      }
      //console.log(selectedTag);
      //console.log(JSON.parse(previousEstudio));
      if(estudio.length > 0){
        //last = ult;
        var ultimaPos = estudio[ult];
        //console.log(ult);
        //console.log(ultimaPos);
        var existeAtributo = false;
        if(ultimaPos !== undefined) {
          var atributosArr = ultimaPos.atributos;
          newAtr = '{"idBAtrb":"'+idB+'","atributo":"'+act+'","familiaAtrb":"'+familia+'"}';
          if(atributosArr.length > 0) {
            for(var i = 0; i < atributosArr.length; i++) {
              if(act == atributosArr[i].atributo) {
                existeAtributo = true;
              }
              atribTag += atributosArr[i].atributo+'<br>';
              atributosTag.push('{"idBAtrb":"'+atributosArr[i].idBAtrb+'","atributo":"'+atributosArr[i].atributo+'","familiaAtrb":"'+atributosArr[i].familiaAtrb+'"}');
              if(i === 0){
                atributos = '{"idBAtrb":"'+atributosArr[i].idBAtrb+'","atributo":"'+atributosArr[i].atributo+'","familiaAtrb":"'+atributosArr[i].familiaAtrb+'"}';
              } else {
                atributos = atributos +',{"idBAtrb":"'+atributosArr[i].idBAtrb+'","atributo":"'+atributosArr[i].atributo+'","familiaAtrb":"'+atributosArr[i].familiaAtrb+'"}';
              }
            }
          }
          //console.log(atributosTag);
          if(!existeAtributo) {
            atributosTag.push(newAtr);
            if(atributos === '') {
              atributos = newAtr;
            } else {
              atributos = atributos +','+newAtr;
            }
            atribTag += act+'<br>';
          }
          //console.log('atrib: ' + colorSemaforo);
          colorSemaforo = $('#semaforo'+ult).css('background-color');
          act = ultimaPos.boton;
          idB = ultimaPos.idboton;
          ti = ultimaPos.tiempo;
          tiempomilis = parseInt(ultimaPos.tiempomilis);
          colo = ultimaPos.colo;
          coloT = ultimaPos.coloT;
          nota = ultimaPos.nota;
          geolocalizacion = ultimaPos.geolocalizacion;
          segundosIni = ultimaPos.segundosIni;
          segundosFin = ultimaPos.segundosFin;
          fecha = ultimaPos.fecha;
          hora = ultimaPos.hora;
          pan = ultimaPos.panel;
          bloc = ultimaPos.bloque;
          autor = ultimaPos.autor;
          imagen = ultimaPos.imagen;
          imagenframe = ultimaPos.imagenframe;
          canvasid = ultimaPos.canvas;
          boton2 = ultimaPos.boton2;
          boton3 = ultimaPos.boton3;
          familia = ultimaPos.familia;
          pkFin = ultimaPos.pkFin;
          //console.log(ultimaPos.pkFin);
          //console.log(pkFin);
          tiempoFin = ultimaPos.tiempoFin;
          tiempomilisFin = ultimaPos.tiempomilisFin;
          pk = JSON.stringify(ultimaPos.pk);
          detallesEstudio = ultimaPos.detallesEstudio;
          tipo = ultimaPos.tipo;
          if(pk === '') {
            pk = '""';
          } else {
            detallePK = '<br>'+ultimaPos.pk.viapkguardado+' PK: '+ultimaPos.pk.pkguardado+'<br>'+ultimaPos.pk.sentidopkguardado;
            //detallePK = '<br>'+$('#roadPK').val()+' PK: '+$('#pkPK').val()+'<br>'+$('#direccionPK').val() ;
          }
          //setTimeout('resaltar(false)',1000);
        }
        if(nota === '') {
          colorNotas = 'green';
        }
        if($('#tipoServicio').val() == 'I') {
          var semaforo2 = $('#semaforo'+ult).clone();
          semaforo = semaforo2.text();
        }
       //console.log('#playVid'+ult);

        estudio.splice(ult,1);
        if(!$('#divContBotonera').hasClass('d-none')) {
          //$('#bot'+ult).remove();
          $('#playVid'+(ult)).remove();
          $('#playVid'+(ult+1)).remove();
          $('#comment_indicator_'+ult).remove();
        }
        //console.log(estudio);

      } else {
        addNewTag = false;
      }
      //caso editando el clip, pasa a ser el nuevo tag
    }
  } else if(selectedTag != -1){
    if($('#edit-estudio').hasClass('active')){
      //console.log('if editar tag');
      ult = selectedTag;
      editandoTag = true;
      addNewTag = false;
      /*tagAnterior = [];
      tagAnterior.push(estudio[selectedTag].idboton);
      tagAnterior.push(estudio[selectedTag].idbotonFam);
      tagAnterior.push(estudio[selectedTag].boton);
      tagAnterior.push(estudio[selectedTag].familia);
      tagAnterior.push(estudio[selectedTag].panel);
      tagAnterior.push(estudio[selectedTag].bloque);
      tagAnterior.push(estudio[selectedTag].boton2);
      tagAnterior.push(estudio[selectedTag].boton3);
      tagAnterior.push(estudio[selectedTag].colo);
      tagAnterior.push(estudio[selectedTag].coloT);
      tagAnterior.push(estudio[selectedTag].segundosIni);
      tagAnterior.push(estudio[selectedTag].segundosFin);
      tagAnterior.push(estudio[selectedTag].atributos);*/
      editTagContent2(idB,idBF,act,familia,pan,bloc,boton2,boton3,colo,coloT,segundosIni,segundosFin);
    }else{
      //console.log('else editar tag');
      editandoTag = false;
      selectedTag = -1;
    }
  }
  if(!editandoTag) {
    if(atributosTag.length === 0){
      atributosTag = '';
    }

    if(nota.length === 0){
      nota = '';
    }

    var tagvideoini = '';
    var url = $('#videoprincipal').attr('src');
    if(url === undefined){
      url = '';
    }
    //si es un estudio y tiene video
    if($('#divContBotonera').hasClass('d-none')) {
      //llama para que le devuelva el frame del video en el instante que se asocia el nuevo clip
      if(esInOut == true || ($("#BotonInOut" + idB).val() !== undefined)){
       //console.log("Si es in/out o existe boton in/out tipo 1")
        tipo = 1
      }
      //En caso de ser un boton in out rallamos el boton y pasamos los datos necesarios
     /* if($("#BotonInOut" + idB).val() !== undefined){
       //console.log("Si existe boton guardamos los datos de fin y quitamos las rallas.")
        //$("#boton-fav-"+idB).removeClass("lineas-diagonales-R");
        $("#boton--"+idB).removeClass("lineas-diagonales-R");
        $("#BotonInOut").attr("disabled", true)
        //$("#BotonInOut2").attr("disabled", true)

        var idTagAbsoluto = $('#BotonInOut'+ idB).val()
        var idTagInOut= ''
        for (i = 0; i< estudio.length -1; i++){
          if(estudio[i].idAbsoluta == idTagAbsoluto){
            idTagInOut = i;
          }
        }
        idEst = ideEstudio.value;
        tempo = ti.split(':');
        tempoAction = parseInt(tempo[0] * 3600 * 1000) + parseInt(tempo[1] * 60 * 1000) + parseInt(tempo[2] * 1000);
        $.ajax({
              cache: false,
              type: 'POST',
              url: '/PK.getPKEstudio',
              data: {
                'idEstudio': idEst,
                'tiempomilis' : tempoAction
              },
              success: function(data) {
                if(data != ''){
                  pk = data[0];
                  geolocalizacion = data[1];
                 //console.log(pk);
                }
                estudio[idTagInOut].tiempoFin = tiempo
                estudio[idTagInOut].geoFin = ultgeo
                estudio[idTagInOut].pkFin = pk.pkguardado
                localStorage.setItem("estudio", JSON.stringify(estudio));
                saveEstudio(false,true);
              }

            });



           //console.log(estudio[idTagInOut].pkFin);
            //$('#gpsFin'+ idTagInOut).html('Fin ' + ultgeo + '<br> PK: ' + parseFloat($("#pkPK3").val()).toFixed(1)+'00<br/>' + tiempo);
            //$('#gpsFin'+ idTagInOut).show()
            $("#BotonInOut" + idB).remove()
          return false;*/

      var recurso = '';
      var urlAjax = '/Frame.getFrame';
      var datosAjax;
      if(imagen === '') {
        if(!esSafari) {
          var v = document.getElementById('videoprincipal_html5_api');
          var canvasImg = document.createElement("canvas");
          canvasImg.crossOrigin = "anonymous";
          canvasImg.style.zIndex = "250";
          canvasImg.width = 240;
          canvasImg.height = 160;
          var context = canvasImg.getContext('2d');
          context.drawImage(v, 0, 0, canvasImg.width, canvasImg.height);
          var urlcanv = canvasImg.toDataURL('image/jpeg');
          datosAjax =
          {
          'idEstudio':$('#ideEstudio').val(),
          'tmilis': tiempomilis,
          'idJson': last,
          'idBoton':idB,
          'boton': act,
          'imaB64': urlcanv
          };
        } else {
          datosAjax =
          {
          'idEstudio':$('#ideEstudio').val(),
          'tmilis': tiempomilis,
          'idJson': last,
          'idBoton':idB,
          'boton': act,
          'urlvideo': srcVideo,
          'safari': 'S'
          };
        }
        $.ajax({
          cache: false,
          type: 'POST',
          url: urlAjax,
          data: datosAjax,
          success: function(ima) {

            var imagenMuestra = ima[0];
            imagen = ima[0];
            imagenframe = ima[0];

            if(!ctrlPress) {
              last = estudio.length;
            }

            if(esSafari) {
              var imaaux = imagenMuestra.replace('-xxxx0.jpeg','-1.jpeg');
              if(colaFrames.length == 0){
                llamandoGestionColaFrames = false;
              }
              colaFrames.push(imaaux);
              colaIDFrames.push(last);
              imagenMuestra = '/imgfiles/images/negro.jpeg';
              if(!llamandoGestionColaFrames && colaFrames.length > 0) {
                llamandoGestionColaFrames = true;
                gestionColaFrames();
              }
              setFramesPendientes('S');
            }
            recurso = '<img id="frame'+last+'" src="'+imagenMuestra+'" style="width:100%;height:auto;">';

            /*var boton =
            '<div id="playVid'+last+'" class="row resaltado" onclick="playVideo('+segundosIni+','+segundosFin+','+last+')" style="border:0;border-bottom:2px solid #000000;border-radius:0;background:'+colo+';color:'+coloT+'">\
              <div id="divima'+last+'" class="col-md-7" style="padding:0;">\
                '+recurso+'\
              </div>\
              <div class="col-md-5" style="padding:0;" >\
                <div id="bot'+last+'">\
                  <div id="'+last+'" data-id="'+last+'" data-toggle="modal" data-target="#editTagNote">\
                    <br>\
                    <span id="tag'+last+'"><b>'+act+'</b></span>\
                    <br>'+ti+'<br>\
                  </div>\
                  <div style="padding-top:6px;padding-bottom:10px;z-index:100000;position:absolute;">\
                    <button class="informeCheckbox btn btn-primary btn-xs" data-val="'+last+'" style="width:F35px;height:25px;margin-left: 3px;font-weight: bold;" onclick="gestionInforme('+last+')"><i id="botaddinf'+last+'" class="fa fa-plus"></i></button>\
                    <button class="btn btn-primary btn-xs" data-val="'+last+'" data-toggle="modal" data-target="#modalDeleteTagConfirm" style="width:35px;height:25px;margin-left: 0px;font-weight: bold;"><i class="fa fa-trash"></i></button>\
                    <button id="buttnote'+last+'" class="btn btn-primary btn-xs" onclick="inicia_dibujo(this)" style="width:35px;height:25px;margin-left: 3px;font-weight: bold;"><i class="fa canvas_toggle canvas_video_icons"></i></button>\
                    <br><br>\
                  </div>\
                </div>\
              </div>\
            </div>';*/

            var boton =
            '<div id="1playVid'+last+'" class="row clip-video-est" onclick="playVideo('+segundosIni+','+segundosFin+','+last+')" data-idDiv="playVid'+last+'" data-id="0" data-idParent="0" data-idAtrib="0" data-name="0" style="border:0;border-bottom:1px solid #000000;border-radius:0;background-color:'+colo+';color:'+coloT+';margin-right: 0px;margin-left: 0px;">\
              <div id="resaltoPlayVid'+last+'" class="col-md-12 resaltoPlayVid"  onclick="getChilds(0)">\
                <div class="row">\
                  <div id="divima'+last+'" class="col-md-6 col-xs-12" style="padding:0;" data-color="'+colo+'" >\
                    '+recurso+'\
                  </div>\
                  <div class="col-md-6 col-sm-12 col-xs-12" style="padding:0;" >\
                    <div id="bot'+last+'">\
                      <div class="dropdown">\
                        <button class=" dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background-color:'+colo+';color:#fff"><i class="fa fa-bars"></i></button>\
                        <ul class="dropdown-menu" style="background-color:'+colo+';" >\
                          botonesEd  \
                        </ul>\
                      </div>\
                      <div id="'+last+'">\
                        <br>\
                        <span id="tag'+last+'" class="play-vid-nombre"><b>'+act+'</b></span>\
                        <br>\
                        <span id="gps'+last+'"></span><br>\
                        <span id="tag'+last+'" class="play-vid-tiempo">Inicio: '+ti+'</span>\
                        <br>\
                        <span id="atrs'+last+'" class="play-vid-atrib"></span>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>';

            $('#tags').append(boton);
            //console.log(ti);
            tempo = ti.split(':');
            tempoAction = parseInt(tempo[0] * 3600 * 1000) + parseInt(tempo[1] * 60 * 1000) + parseInt(tempo[2] * 1000);
            //console.log(tiempo);
            idEst = ideEstudio.value;
            if(pk == '""' || geolocalizacion == ''){
              //console.log('if estudio if not image if pk == "" || geo == ""');
              pkFin = "";
              var tipoServicio = $('#tipoServicio').val();

              $.ajax({
                cache: false,
                type: 'POST',
                url: '/PK.getPKEstudio',
                data: {
                  'idEstudio': idEst,
                  'tiempomilis' : tempoAction,
                  'tipoServicio' : tipoServicio
                },
                success: function(data) {
                  if(data.length != 0){
                   //console.log(data);
                    pk = data[0];
                   //console.log(pk);
                    geolocalizacion = data[1];
                    arrpk = pk.split(",")
                    arrPkgu = arrpk[4].split(":");
                    pkFin = arrPkgu[1].replace(/\"/g, '');
                  }
                  notasE = nota[0] == undefined ? notasE = '""' : notasE = JSON.stringify(nota[0]);

                  if(tipo == 1){
                   //console.log("Si el boton no existe lo creamos y seguimos." + last)
                    var nuevoInOut = '<input type="hidden" id="BotonInOut' + idB + '" value="'+ last +'">'
                    $('#zonaInOut').prepend(nuevoInOut);
                  }
                  if (temp == -888) {
                    tiempomilis = video.currentTime();
                    ti = fancyTimeFormat(Math.round(tiempomilis), true);
                  }
                  tiempoFin = ti;
                  var detalleBoton = '{"idAbsoluta":"'+last+'","tipo":"'+tipo+'","tiempoFin":"'+tiempoFin+'","geoFin":"'+geolocalizacion+'","pkFin":"'+pkFin+'",\
                                    "tiempomilisFin":"'+tiempomilisFin+'","boton":"'+act+'","familia":"'+familia+'","panel":"'+pan+'","bloque":"'+bloc+'","boton2":"'+boton2+'",\
                                    "boton3":"'+boton3+'","id":"'+last+'","idboton":"'+idB+'","idbotonFam":"'+idBF+'","tiempo":"'+ti+'","tiempomilis":"'+tiempomilis+'","colo":"'+colo+'",\
                                    "coloT":"'+coloT+'","geolocalizacion":"'+geolocalizacion+'","url":"'+url+'","pk":'+pk+',"nota":['+notasE+'],"segundosIni":"'+segundosIni+'",\
                                    "segundosFin":"'+segundosFin+'","fecha":"'+fecha+'","hora":"'+hora+'","autor":"'+autor+'","imagen":"'+imagen+'","imagenframe":"'+imagenframe+'",\
                                    "canvas":"'+canvasid+'","atributos":['+atributos+'],"detallesEstudio":"'+detallesEstudio+'"}';
                  //console.log("Los detalles del boton antes de subirlo al Array estudio")
                  //console.log(canvasid);
                  //console.log(detalleBoton);
                  estudio.push(JSON.parse(detalleBoton));

                  //se guarda el estudio sin que salgan los mensajes de OK o KO
                  //ordena por tiempo
                  estudio.sort(sortByProperty('tiempo','boton'));
                  //console.log(estudio);
                  var ultAct = false;
                  var ultInsert = last;
                  for(var g = 0; g < estudio.length; g++){
                    //console.log('id: ' + estudio[g].id  + ' == length: ' + estudio.length-1);
                    if(estudio[g].id == estudio.length-1 && !esAtributo){
                      idAdd = g;
                    }
                    if(estudio[g].id == ult && !ultAct){
                      ult = g;
                      ultAct = true;
                    }
                    if(estudio[g].id == last - 1) {
                      ultInsert = g;
                    }
                    estudio[g].id = g;
                  }
                  //console.log(idAdd);
                  //setTimeout('resaltar(true)',1000);
                  localStorage.setItem("estudio", JSON.stringify(estudio));
                  saveEstudio(false,true);
                  //aÃ±ade el tag en la barra de progreso del video al aÃ±adir una nueva etiqueta en el estudio
                  var arr = tiempo.split(':');
                  var min = Number(arr[0]);
                  var sec = Number(arr[1]);
                  var tiem = (tiempomilis/1000);
                  var tiempototal = (video.duration()).toFixed(2);
                  var leftpc = ((tiem/tiempototal)*100).toFixed(2);
                  var tiem1 = tiem - Number(segundosIni);
                  var tiem2 = tiem + Number(segundosFin);
                  var playFunct = 'playVideo('+tiem1+','+tiem2+','+last+')';
                  var delFunct = 'deleteTag('+last+')';
                  var estiloTag = '';
                  if(colo !== '') {
                    estiloTag = 'background-color:'+colo+';color:'+coloT+';';
                  }
                  $('.vjs-progress-control').append('<div id="comment_indicator_'+last+'" class="comment_indicator" data-id="'+last+'" data-time="'+tiem+'" style="top: -35px; left: '+leftpc+'%;z-index:1000;" onClick="'+playFunct+'"><div class="stick" style="'+estiloTag+'"></div><ul class="flag" ><li style="'+estiloTag+'"></li></ul></div>');
                }
              });//console.log(detalleBot
            }else{
              //console.log('if estudio if not image else pk == "" || geo == ""');
              if(nota[0] == undefined){
                notasE = '""';
              }else{
                notasE = JSON.stringify(nota[0]);
              }
              //pkFin = "";
              if(data.length != 0){
                arrpk = pk.split(",")
                arrPkgu = arrpk[4].split(":");
                //pkFin = arrPkgu[1].replace(/\"/g, '');
              }
              if (temp == -888) {
                tiempomilis = video.currentTime();
                ti = fancyTimeFormat(Math.round(tiempomilis), true);
              }
              var detalleBoton = '{"idAbsoluta":"'+last+'","tipo":"'+tipo+'","tiempoFin":"'+tiempoFin+'","geoFin":"'+geolocalizacion+'","pkFin":"'+pkFin+'00",\
                                "tiempomilisFin":"'+tiempomilisFin+'","boton":"'+act+'","familia":"'+familia+'","panel":"'+pan+'","bloque":"'+bloc+'","boton2":"'+boton2+'",\
                                "boton3":"'+boton3+'","id":"'+last+'","idboton":"'+idB+'","idbotonFam":"'+idBF+'","tiempo":"'+ti+'","tiempomilis":"'+tiempomilis+'","colo":"'+colo+'",\
                                "coloT":"'+coloT+'","geolocalizacion":"'+geolocalizacion+'","url":"'+url+'","pk":'+pk+',"nota":['+notasE+'],"segundosIni":"'+segundosIni+'",\
                                "segundosFin":"'+segundosFin+'","fecha":"'+fecha+'","hora":"'+hora+'","autor":"'+autor+'","imagen":"'+imagen+'","imagenframe":"'+imagenframe+'",\
                                "canvas":"'+canvasid+'","atributos":['+atributos+'],"detallesEstudio":"'+detallesEstudio+'"}';
              //console.log(detalleBoton);
              estudio.push(JSON.parse(detalleBoton));
              //console.log(estudio);
              //se guarda el estudio sin que salgan los mensajes de OK o KO
              //ordena por tiempo
              estudio.sort(sortByProperty('tiempo','boton'));
              //console.log(estudio);
              var ultAct = false;
              var ultInsert = last;
              for(var g = 0; g < estudio.length; g++){
                if(estudio[g].id == estudio.length-1 && !esAtributo){
                  idAdd = g;
                }
                if(estudio[g].id == ult && !ultAct){
                  ult = g;
                  ultAct = true;
                }
                if(estudio[g].id == last - 1) {
                  ultInsert = g;
                }
                estudio[g].id = g;
              }
              //console.log(idAdd);
              //setTimeout('resaltar(true)',1000);
              localStorage.setItem("estudio", JSON.stringify(estudio));
              saveEstudio(false,true);
              //aÃ±ade el tag en la barra de progreso del video al aÃ±adir una nueva etiqueta en el estudio
              var arr = tiempo.split(':');
              var min = Number(arr[0]);
              var sec = Number(arr[1]);
              var tiem = (tiempomilis/1000);
              var tiempototal = (video.duration()).toFixed(2);
              var leftpc = ((tiem/tiempototal)*100).toFixed(2);
              var tiem1 = tiem - Number(segundosIni);
              var tiem2 = tiem + Number(segundosFin);
              var playFunct = 'playVideo('+tiem1+','+tiem2+','+last+')';
              var delFunct = 'deleteTag('+last+')';
              var estiloTag = '';
              if(colo !== '') {
                estiloTag = 'background-color:'+colo+';color:'+coloT+';';
              }
              $('.vjs-progress-control').append('<div id="comment_indicator_'+last+'" class="comment_indicator" data-id="'+last+'" data-time="'+tiem+'" style="top: -35px; left: '+leftpc+'%;z-index:1000;" onClick="'+playFunct+'"><div class="stick" style="'+estiloTag+'"></div><ul class="flag" ><li style="'+estiloTag+'"></li></ul></div>');
            }
          }
        });
      } else {
        if(!ctrlPress) {
          last = estudio.length;
        }
        recurso = '<img id="frame'+last+'" src="'+imagen+'" style="width:100%;height:auto;">';

        var boton =
        '<div id="2playVid'+last+'" class="row resaltado" onclick="playVideo('+segundosIni+','+segundosFin+','+last+')" style="border:0;border-bottom:2px solid #000000;border-radius:0;background:'+colo+';color:'+coloT+'">\
          <div id="divima'+last+'" class="col-md-7" style="padding:0;">\
            '+recurso+'\
          </div>\
          <div class="col-md-5" style="padding:0;" >\
            <div id="bot'+last+'">\
              <div id="'+last+'" data-toggle="modal" data-target="#editTagNote">\
                <br>\
                <span id="tag'+last+'"><b>'+act+'</b></span>\
                <br>'+ti+'<br>\
              </div>\
              <div style="padding-top:6px;padding-bottom:10px;z-index:100000;position:absolute;">\
                <button class="informeCheckbox btn btn-primary btn-xs" data-val="'+last+'" style="width:35px;height:25px;margin-left: 3px;font-weight: bold;" onclick="gestionInforme('+last+')"><i id="botaddinf'+last+'" class="fa fa-plus"></i></button>\
                <button class="btn btn-primary btn-xs" data-val="'+last+'" data-toggle="modal" data-target="#modalDeleteTagConfirm" style="width:35px;height:25px;margin-left: 0px;font-weight: bold;"><i class="fa fa-trash"></i></button>\
                <button id="buttnote'+last+'" class="btn btn-primary btn-xs" onclick="inicia_dibujo(this)" style="width:35px;height:25px;margin-left: 3px;font-weight: bold;"><i class="fa canvas_toggle canvas_video_icons"></i></button>\
                <br><br>\
              </div>\
            </div>\
          </div>\
        </div>';

        $('#tags').append(boton);
        tempo = ti.split(':');
        tempoAction = parseInt(tempo[0] * 3600 * 1000) + parseInt(tempo[1] * 60 * 1000) + parseInt(tempo[2] * 1000);
        idEst = ideEstudio.value;
        if(pk == '""' || geolocalizacion == ''){
          //console.log('if estudio else image if pk == "" || geo == ""');
          pkFin = "";
          var tipoServicio = $('#tipoServicio').val();
          $.ajax({
            cache: false,
            type: 'POST',
            url: '/PK.getPKEstudio',
            data: {
              'idEstudio': idEst,
              'tiempomilis' : tempoAction,
              'tipoServicio' : tipoServicio
            },
            success: function(data) {
              //console.log(data);
              //console.log(data[0]);
              //console.log(data[1]);
              /*$('#jsonPkAccion').text(data[0]);
              $('#jsonGeoAccion').text(data[1]);
              if(pk == '""' || geolocalizacion == ''){
                if($('#jsonPkAccion').text() != ''){
                  pk = $('#jsonPkAccion').text();
                }
              }
              if(geolocalizacion == ''){
                if($('#jsonGeoAccion').text() != ''){
                  geolocalizacion = $('#jsonGeoAccion').text();
                }
              }*/
              if(data.length != 0){
                pk = data[0];
                geolocalizacion = data[1];
                arrpk = pk.split(",")
                arrPkgu = arrpk[4].split(":");
                pkFin = arrPkgu[1].replace(/\"/g, '');
              }
              if(nota[0] == undefined){
                notasE = '""';
              }else{
                notasE = JSON.stringify(nota[0]);
              }
              if(data != ''){
              }
               if(tipo == 1){
               //console.log("Si el boton no existe lo creamos y seguimos." + last)
                var nuevoInOut = '<input type="hidden" id="BotonInOut' + idB + '" value="'+ last +'">'
                $('#zonaInOut').prepend(nuevoInOut);
              }
              if (temp == -888) {
                tiempomilis = video.currentTime();
                ti = fancyTimeFormat(Math.round(tiempomilis), true);
              }
              var detalleBoton = '{"idAbsoluta":"'+last+'","tipo":"'+tipo+'","tiempoFin":"'+tiempoFin+'","geoFin":"'+geolocalizacion+'","pkFin":"'+pkFin+'00",\
                                  "tiempomilisFin":"'+tiempomilisFin+'","boton":"'+act+'","familia":"'+familia+'","panel":"'+pan+'","bloque":"'+bloc+'","boton2":"'+boton2+'",\
                                  "boton3":"'+boton3+'","id":"'+last+'","idboton":"'+idB+'","idbotonFam":"'+idBF+'","tiempo":"'+ti+'","tiempomilis":"'+tiempomilis+'","colo":"'+colo+'",\
                                  "coloT":"'+coloT+'","geolocalizacion":"'+geolocalizacion+'","url":"'+url+'","pk":'+pk+',"nota":['+notasE+'],"segundosIni":"'+segundosIni+'",\
                                  "segundosFin":"'+segundosFin+'","fecha":"'+fecha+'","hora":"'+hora+'","autor":"'+autor+'","imagen":"'+imagen+'","imagenframe":"'+imagenframe+'",\
                                  "canvas":"'+canvasid+'","atributos":['+atributos+'],"detallesEstudio":"'+detallesEstudio+'"}';
              //console.log(detalleBoton);
              //console.log(JSON.parse(detalleBoton));
              estudio.push(JSON.parse(detalleBoton));
              estudio.sort(sortByProperty('tiempo','boton'));
              //console.log(estudio);
              var ultAct = false;
              var ultInsert = last;
              for(var g = 0; g < estudio.length; g++){
                if(estudio[g].id == estudio.length-1 && !esAtributo){
                  idAdd = g;
                }
                if(estudio[g].id == ult && !ultAct){
                  ult = g;
                  ultAct = true;
                }
                if(estudio[g].id == last - 1) {
                  ultInsert = g;
                }
                estudio[g].id = g;
              }
              //console.log(idAdd);
              localStorage.setItem("estudio", JSON.stringify(estudio));
              saveEstudio(false,true);
              //aÃ±ade el tag en la barra de progreso del video al aÃ±adir una nueva etiqueta en el estudio
              var arr = tiempo.split(':');
              var min = Number(arr[0]);
              var sec = Number(arr[1]);
              var tiem = (tiempomilis/1000);
              var tiempototal = (video.duration()).toFixed(2);
              var leftpc = ((tiem/tiempototal)*100).toFixed(2);
              var tiem1 = (tiem/100) - Number(segundosIni);
              var tiem2 = (tiem/100) + Number(segundosFin);
              var playFunct = 'playVideo('+tiem1+','+tiem2+','+last+')';
              var delFunct = 'deleteTag('+last+')';
              var estiloTag = '';
              if(colo !== '') {
                estiloTag = 'background-color:'+colo+';color:'+coloT+';';
              }
              if(estudio[g] != undefined){
                $('.vjs-progress-control').append('<div id="comment_indicator_'+last+'" class="comment_indicator" data-id="'+last+'" data-time="'+tiem+'" style="top: -35px; left: '+leftpc+'%;z-index:1000;" onClick="'+playFunct+'"><div class="stick" style="'+estiloTag+'"></div><ul class="flag" onclick="getAttributes('+estudio[g].id+')"><li style="z-index:1000;'+estiloTag+'" class="watch" data-time="'+tiem+'"></li><li style="'+estiloTag+'"></li></ul></div>');
              }
            }
          });
        }else{
          if(nota[0] == undefined){
            notasE = '""';
          }else{
            notasE = JSON.stringify(nota[0]);
          }
          arrpk = pk.split(",")
          arrPkgu = arrpk[4].split(":");
          //pkFin = arrPkgu[1].replace(/\"/g, '');

          if(tipo == 1){
            var nuevoInOut = '<input type="hidden" id="BotonInOut' + idB + '" value="'+ last +'">'
            $('#zonaInOut').prepend(nuevoInOut);
          }
          if (temp == -888) {
            tiempomilis = video.currentTime();
            ti = fancyTimeFormat(Math.round(tiempomilis), true);
          }
          var detalleBoton = '{"idAbsoluta":"'+last+'","tipo":"'+tipo+'","tiempoFin":"'+tiempoFin+'","geoFin":"'+geolocalizacion+'","pkFin":"'+pkFin+'00",\
                              "tiempomilisFin":"'+tiempomilisFin+'","boton":"'+act+'","familia":"'+familia+'","panel":"'+pan+'","bloque":"'+bloc+'","boton2":"'+boton2+'",\
                              "boton3":"'+boton3+'","id":"'+last+'","idboton":"'+idB+'","idbotonFam":"'+idBF+'","tiempo":"'+ti+'","tiempomilis":"'+tiempomilis+'","colo":"'+colo+'",\
                              "coloT":"'+coloT+'","geolocalizacion":"'+geolocalizacion+'","url":"'+url+'","pk":'+pk+',"nota":['+notasE+'],"segundosIni":"'+segundosIni+'",\
                              "segundosFin":"'+segundosFin+'","fecha":"'+fecha+'","hora":"'+hora+'","autor":"'+autor+'","imagen":"'+imagen+'","imagenframe":"'+imagenframe+'",\
                              "canvas":"'+canvasid+'","atributos":['+atributos+'],"detallesEstudio":"'+detallesEstudio+'"}';
          //console.log(detalleBoton);
          //console.log(JSON.parse(detalleBoton));
          estudio.push(JSON.parse(detalleBoton));
          estudio.sort(sortByProperty('tiempo','boton'));
          //console.log(estudio);
          var ultAct = false;
          var ultInsert = last;
          for(var g = 0; g < estudio.length; g++){
            if(estudio[g].id == estudio.length-1 && !esAtributo){
              idAdd = g;
            }
            if(estudio[g].id == ult && !ultAct){
              ult = g;
              ultAct = true;
            }
            if(estudio[g].id == last - 1) {
              ultInsert = g;
            }
            estudio[g].id = g;
          }
          //console.log(idAdd);
          localStorage.setItem("estudio", JSON.stringify(estudio));
          saveEstudio(false,true);
          //aÃ±ade el tag en la barra de progreso del video al aÃ±adir una nueva etiqueta en el estudio
          var arr = tiempo.split(':');
          var min = Number(arr[0]);
          var sec = Number(arr[1]);
          var tiem = (tiempomilis/1000);
          var tiempototal = (video.duration()).toFixed(2);
          var leftpc = ((tiem/tiempototal)*100).toFixed(2);
          var tiem1 = (tiem/100) - Number(segundosIni);
          var tiem2 = (tiem/100) + Number(segundosFin);
          var playFunct = 'playVideo('+tiem1+','+tiem2+','+last+')';
          var delFunct = 'deleteTag('+last+')';
          var estiloTag = '';
          if(colo !== '') {
            estiloTag = 'background-color:'+colo+';color:'+coloT+';';
          }
          if(estudio[g] != undefined){
            $('.vjs-progress-control').append('<div id="comment_indicator_'+last+'" class="comment_indicator" data-id="'+last+'" data-time="'+tiem+'" style="top: -35px; left: '+leftpc+'%;z-index:1000;" onClick="'+playFunct+'"><div class="stick" style="'+estiloTag+'"></div><ul class="flag" onclick="getAttributes('+estudio[g].id+')"><li style="z-index:1000;'+estiloTag+'" class="watch" data-time="'+tiem+'"></li><li style="'+estiloTag+'"></li></ul></div>');
          }
        }
      }
    } else {
      //si no es estudio
      /******************************************************
                        INSPECCION
      *******************************************************/
      //if(!ctrlPress) {
      last = estudio.length;
      //}
     //console.log(last);
      //console.log('aÃ±adir accion ins');
      //console.log('accion: ' + colorSemaforo);
      semaforo = '<div id="semaforo'+last+'" style="width: 18px;height: 18px;-moz-border-radius: 50%;-webkit-border-radius: 50%;border-radius: 50%;-moz-border: 2px solid #ffffff;-webkit-border: 2px solid #ffffff;border: 2px solid #ffffff;background-color: '+colorSemaforo+';"></div><br><span style="clear:right;"></span>';

      if(!esAtributo){
        detallePK = '<br>'+$('#roadPK').val()+' PK: '+parseFloat($('#pkPK3').val()).toFixed(1)+'00<br>'+$('#direccionPK').val() ;
      }
      //detallePK = '<br>'+$('#via-pk').text()+' PK: '+$('#pk').text()+'<br>'+$('#sentido-pk').text();

      coloRGB = hexToRgb(colo);
      coloT = selectColorText(coloRGB);
      var detalle;
      //si es in out tenemos que especificar que es el de inicio, dejar espacio para el de final, tambien ponerle la class del sombreado.
      //Tambien aÃ±adimos un campo Hidden a la zonaInOut con los datos de este inOut
      var inicioTag="";
      var visible="";
      var claseTag="";
      if ($("#BotonInOut" + idB).val() !== undefined){
        tipo = 1
      }
      if(esInOut == true || tipo == 1){
        tipo = 1
        $("#BotonInOut").attr("disabled", false);
        //$("#BotonInOut2").attr("disabled", true);

        var nuevoInOut = '<input type="hidden" id="BotonInOut' + idB + '" value="'+ last +'">'
        $('#zonaInOut').prepend(nuevoInOut);
        inicioTag = "Inicio ";
        claseTag="<i id='tag" + last + "' style='font-size:15px;height: 20px;padding-left: 20px;' class='float-right fas fa-stopwatch'></i>";

        var boton = '<div id="playVid'+last+'" class="row" style="border: 2px solid #ffffff;margin-right: 0px;margin-left: 0px;">\
            <div class="col-md-12" style="padding:0;"> \
              <div id="bot'+last+'" class="btn btn-default btn-barra" style="border:0;border-radius:0;width:100%;background-color:'+colo+';color:'+coloT+' ;width: 100%;">\
                <div style="padding-right:10px;float:right;">'+semaforo+'</div>\
                '+act+'<br>'+ atribTag+'</span><br>\
                <span id="gps'+last+'">' + $('#roadPK').val() + " - " + $('#direccionPK').val() + '<br>\
                Inicio '+ geolocalizacion+ '<br/> PK: ' + parseFloat($('#pkPK3').val()).toFixed(1)+'00<br/>' + ti +'</span><br/><span id="gpsFin'+last+'" style="display:none;"></span>\
                <br><span class="pad-right"></span>\
                <button id="buttnote'+last+'" class="btn btn-xs '+colorNotas+'" data-toggle="modal" data-id="'+last+'" data-target="#editTagNote" style="text-align:left !important;width: 30px;height: 20px;border-color:' + coloT + ';border-width: 3px;"></button>'+ claseTag + '\
              </div>\
            </div>\
          </div>';

      }else{
        if($('#gps').val() == 'S'){
          if($('#odometria').val() == 'S'){
            detalle = '<span id="gps'+last+'">'+ inicioTag + geolocalizacion+detallePK+'</span><br/><span id="gpsFin'+last+'" style="display:none;"></span>';
          }else{
            detalle = '<span id="gps'+last+'">'+ inicioTag + geolocalizacion + '<br>'+$('#roadPK').val()+'<br>'+$('#direccionPK').val()+'</span><br/><span id="gpsFin'+last+'" style="display:none;" ></span>';
          }
        }else{
          detalle = '';
        }

        var boton = '<div id="playVid'+last+'" class="row" style="border: 2px solid #ffffff;margin-right: 0px;margin-left: 0px;">\
            <div class="col-md-12" style="padding:0;"> \
              <div id="bot'+last+'" class="btn btn-default btn-barra" style="border:0;border-radius:0;width:100%;background-color:'+colo+';color:'+coloT+'">\
                <div style="padding-right:10px;float:right;">'+semaforo+'</div>\
                '+act+'<br>'+ atribTag+'</span><br>\
                '+detalle+'\
                <br><span id="tiempoInicial'+ last + '">'+ inicioTag + ti +'</span><br><span id="tiempoFinal'+ last + '" style="display:none;">Fin '+ti+'</span><span class="pad-right"></span>\
                <button id="buttnote'+last+'" class="btn btn-xs '+colorNotas+'" data-toggle="modal" data-id="'+last+'" data-target="#editTagNote" style="text-align:left !important;width: 30px;height: 20px;border-color:' + coloT + ';border-width: 3px;"></button>'+ claseTag + '\
              </div>\
            </div>\
          </div>';
      }
      //console.log(boton);

      $('#tags').prepend(boton);
      segundosIni = (esInOut == true || tipo == 1) ? 0 : segundosIni;
      segundosFin = (esInOut == true || tipo == 1) ? 0 : segundosFin;

      //aÃ±adimos en el detalleBoton los campos tiempoFin y pk fin que tendran el mismo valor que solo sera diferente al de inicio en las acciones inout
      var detalleBoton = '{"idAbsoluta":"'+last+'","tipo":"'+tipo+'","tiempoFin":"'+ti+'","geoFin":"'+geolocalizacion+'","pkFin":"'+parseFloat($("#pkPK3").val()).toFixed(1)+'00",\
                          "boton":"'+act+'","familia":"'+familia+'","panel":"'+pan+'","bloque":"'+bloc+'","boton2":"'+boton2+'","boton3":"'+boton3+'","id":"'+last+'",\
                          "idboton":"'+idB+'","idbotonFam":"'+idBF+'","tiempo":"'+ti+'","tiempomilis":"'+tiempomilis+'","colo":"'+colo+'","coloT":"'+coloT+'",\
                          "geolocalizacion":"'+geolocalizacion+'","url":"'+url+'","pk":'+pk+',"nota":['+nota+'],"segundosIni":"'+segundosIni+'","segundosFin":"'+segundosFin+'",\
                          "fecha":"'+fecha+'","hora":"'+hora+'","autor":"'+autor+'","imagen":"'+imagen+'","imagenframe":"'+imagenframe+'","canvas":"'+canvasid+'",\
                          "atributos":['+atributos+'],"detallesEstudio":"'+detallesEstudio+'","tiempomilisFin":"'+tiempomilisFin+'"}';
      //console.log(detalleBoton);
      //console.log(tiempo + ' -------------------- ' + tiempomilis + ' ====================================');
      estudio.push(JSON.parse(detalleBoton));
      localStorage.setItem("estudio", JSON.stringify(estudio));
      saveEstudio(false,false);
      //si el tracker esta activo y el timer tambien si no estamos en el caso atributo aÃ±ade a pendientes para calcular el PK
      /*if(trackeractivo && activo1 == 'S' && activo2 == 'S' && !ctrlPress && !esAtributo) {
        var pkpendiente = '{"gps":"'+ultgeo+'","distancia":'+distancia+',"idclip":'+last+'}';
        arrclipspkpendientes.push(JSON.parse(pkpendiente));
      }*/
      if(!navigator.onLine){
        //console.log(navigator.onLine);
        arrclipspkpendientes.push(last);
      }
      //console.log(arrclipspkpendientes);
      if($("#aplicaAjustePK")) {
        $("#afinarPK").attr("disabled", true);
        $("#aplicaAjustePK").attr("disabled", true);
      }
    }

    if(!ctrlPress) {
      ult = estudio.length - 1;
    }
    last += 1;
    $('#contags').text(estudio.length);
    hayClic = false;
  }
  $('#undo-estudio').removeClass('inactive');
  $('#undo-estudio').addClass('active');
  $('#undo-estudio').attr('disabled',false);

  if(estudio.length > 0){
    $('#botCrono').removeClass('disabled');
    $('#backTop').removeClass('disabled');
    $('#backBottom').removeClass('disabled');
    $('#backNextPage').removeClass('disabled');
    $('#backPreviousPage').removeClass('disabled');
    $('#logRoute').removeClass('disabled');
    $('#reOrderFavs').removeClass('disabled');
  }
  //console.log(idAdd);
  //console.log('------------------------------------------------------------------------------------------------------------------------------------------');
}

//Actualiza el contenido de un clip por si el usuario habia clicado un boton equivocado
function editTagContent2(idB,idBF,act,familia,pan,bloc,boton2,boton3,colo,coloT,segundosIni,segundosFin,atrib) {
  //console.log('idB: ' + idB + ' idBF: ' + idBF + ' act: ' + act + ' familia: ' + familia + ' pan: ' + pan + ' bloc: ' + bloc + ' boton2: ' + boton2 + ' boton3: ' + boton3 + ' colo: ' + colo + ' colotT: ' + coloT + ' segundosIni: ' + segundosIni + ' segundosFin: ' + segundosFin + ' atrib: ' + atrib);
  if(segundosIni === ''){
    segundosIni = 1;
  }
  if(segundosFin === '') {
    segundosFin = 3;
  }
  selectedTags = $('.resaltoPlayVid');

  for(var i = 0; i < selectedTags.length; i++){
    if($('#'+selectedTags[i].id).hasClass('resalto')){
      idST = selectedTags[i].id.substr(14);
      selectedTag = idST;
      //estudio[idST].atributos
      estudio[idST].boton = act;
      estudio[idST].idboton = idB;
      estudio[idST].idbotonFam = idBF;
      estudio[idST].colo = colo;
      estudio[idST].coloT = coloT;
      estudio[idST].panel = pan;
      estudio[idST].bloque = bloc;
      estudio[idST].segundosIni = segundosIni;
      estudio[idST].segundosFin = segundosFin;
      estudio[idST].boton2 = boton2;
      estudio[idST].boton3 = boton3;
      estudio[idST].familia = familia;
      let idsDibujos = [];
      for(var k = 0; k < canvasarr.length; k++){
        canvasIdArr = estudio[idST].canvas.toString().split(',');
        for(var j = 0; j < canvasIdArr.length; j++){
          console.log(canvasarr[k].id + ' == ' + canvasIdArr[j]);
          if (canvasarr[k].id ==  canvasIdArr[j]){
            console.log(k + ' --------------------------------');
            idsDibujos.push(k);
            canvasarr[k].boton = act;
            canvasarr[k].color = colo;
          }
        }
      }
      idsDibujos.map(id => {
        var tiem = parseFloat(canvasarr[id].tiempomilis);
        tiem = tiem/1000;
        var estiloTag = 'background-color:'+canvasarr[id].color+';';
        $('#comment_indicator_paint_'+id).html('<div class="stick" style="'+estiloTag+'"></div><ul class="flag"><li style="'+estiloTag+'" data-time="'+tiem+'"></li></ul>');
      });
      if(estudio[idST].pk == '' || estudio[idST].geolocalizacion == ''){
        tempo = estudio[idST].tiempo.split(':');
        tempoAction = parseInt(tempo[0] * 3600 * 1000) + parseInt(tempo[1] * 60 * 1000) + parseInt(tempo[2] * 1000);
        idEst = ideEstudio.value;
        var tipoServicio = $('#tipoServicio').val();
        $.ajax({
          cache: false,
          type: 'POST',
          url: '/PK.getPKEstudio',
          data: {
            'idEstudio': idEst,
            'tiempomilis' : tempoAction,
            'tipoServicio' : tipoServicio
          },
          success: function(data) {
            //console.log(data);
            //console.log(data[0]);
            //console.log(data[1]);
            $('#jsonPkAccion').text(data[0]);
            $('#jsonGeoAccion').text(data[1]);
          }
        });
        setTimeout(function(){
          if($('#jsonPkAccion').text() != ''){
            estudio[idST].pk = $('#jsonPkAccion').text();
          }
          if($('#jsonGeoAccion').text() != ''){
            estudio[idST].geolocalizacion = $('#jsonGeoAccion').text();
          }
        });
      }
    }
  }


  idAdd = selectedTag;
  //console.log(idAdd);
  atributo = '';
  atriTag = [];
  atributoTag = [];
  //console.log(atrib);
  if(atrib !== undefined){
    /*var atributoArr = atrib;
    newAtr = '{"idBAtrb":"'+idB+'","atributo":"'+act+'","familiaAtrb":"'+familia+'"}';
    if(atributoArr.length > 0) {
      for(var i = 0; i < atributoArr.length; i++) {
        //console.log(atributoArr[i].atributo);
        if(act == atributoArr[i].atributo) {
          existeAtributo = true;
        }
        atriTag += atributoArr[i].atributo+'<br>';
        atributoTag.push('{"idBAtrb":"'+atributoArr[i].idBAtrb+'","atributo":"'+atributoArr[i].atributo+'","familiaAtrb":"'+atributoArr[i].familiaAtrb+'"}');
        if(i === 0){
          atributo = '{"idBAtrb":"'+atributoArr[i].idBAtrb+'","atributo":"'+atributoArr[i].atributo+'","familiaAtrb":"'+atributoArr[i].familiaAtrb+'"}';
        } else {
          atributo = atributo +',{"idBAtrb":"'+atributoArr[i].idBAtrb+'","atributo":"'+atributoArr[i].atributo+'","familiaAtrb":"'+atributoArr[i].familiaAtrb+'"}';
        }
      }
      //console.log(atributoTag);
    }
    estudio[selectedTag].atributos = atributoTag;*/
  }else{
    estudio[selectedTag].atributos = '';
  }
  //setTimeout('resaltar(false)',1000);
  var tiem = parseFloat(estudio[selectedTag].tiempomilis);
  tiem = tiem/1000;
  var estiloTag = 'background-color:'+colo+';color:'+coloT+';';
  $('#comment_indicator_'+estudio[selectedTag].id).html('<div class="stick" style="'+estiloTag+'"></div><ul class="flag"><li style="'+estiloTag+'" data-time="'+tiem+'"></li></ul>');
  //se guarda estudio en el localstorage por si se pierde la conexiÃ³n
  localStorage.setItem("estudio", JSON.stringify(estudio));

  saveCanvas(true);
  saveEstudio(false,true);
}

//ordena por propiedad una hash en lugar de ordenar por el contenido en si, se utiliza para el orden del estudio segÃºn el tiempo para cuando se edita
function sortByProperty (property1, property2) {
  return function (x, y) {
    if (x[property1] === y[property1]) {
      if (x[property2] === y[property2]) {
        return 0;
      } else {
        return (x[property2] > y[property2]) ? 1 : -1;
      }
    } else {
      return (x[property1] > y[property1]) ? 1 : -1;
    }
  };
}
//ordena por propiedad una hash en lugar de ordenar por el contenido en si, se utiliza para el orden de inspecciÃ³n
function sortByPropertyInsp (property) {
  return function (x, y) {
    return ((x[property] === y[property]) ? 0 : ((x[property] < y[property]) ? 1 : -1));
  };
}


//Ya no se usa, muestra la lista de pk cercanos segun la DGT
/*function listaPKcercanos (){
  var optSel = $("#listaPKcercanos option:selected").html();
  if(optSel !== undefined) {
    var optSelTxt = optSel.split(' - ');
    var pkFicha = optSelTxt[1];
    pkFicha = pkFicha.replace('PK ','');
    $('#pkficha').val(pkFicha);
    $('#viaficha').val(optSelTxt[0]);
    $('#sentidoficha').val(optSelTxt[2]);
  }
}*/

//elimina el clip de la lista de tags y lo guarda en la base de datos
function deleteTag(idb) {
  //console.log('deleteTag() - ' + idb);
  $('#undo-estudio').attr('disabled',false);
  previousEstudio = JSON.stringify(estudio);
  lastChange = 'estudio';
  /*tagAnterior = [];
  tagAnterior.push(estudio[idb].idboton);
  tagAnterior.push(estudio[idb].idbotonFam);
  tagAnterior.push(estudio[idb].boton);
  tagAnterior.push(estudio[idb].familia);
  tagAnterior.push(estudio[idb].panel);
  tagAnterior.push(estudio[idb].bloque);
  tagAnterior.push(estudio[idb].boton2);
  tagAnterior.push(estudio[idb].boton3);
  tagAnterior.push(estudio[idb].colo);
  tagAnterior.push(estudio[idb].coloT);
  tagAnterior.push(estudio[idb].segundosIni);
  tagAnterior.push(estudio[idb].segundosFin);
  tagAnterior.push(estudio[idb].atributos);*/
  delTag = true;
  addNewTag = false;
  editandoTag = false;
  addNewAtrib = false;
  idAdd = 0;
  selectedTag = -1;
  var idTag = idb; //- 1;
  if($('#divContBotonera').hasClass('d-none')) {
    $('#comment_indicator_'+idTag).remove();
    //console.log("if($('#divContBotonera').hasClass('d-none')) {");
    //console.log($('#comment_indicator_'+idTag));
  }
  if (estudio[idTag].canvas != -1) {
    deletePaints(estudio[idTag].idAbsoluta);
  }
  //console.log(JSON.parse(JSON.stringify(estudio)));
  //console.log(idTag);
  estudio.splice(idTag,1);
  //console.log(JSON.parse(JSON.stringify(estudio)));
  for(var f = 0; f < estudio.length; f++) {
    var valActual = estudio[f].id;
    var nuevoVal = valActual;

    if(f >= idTag) {
      nuevoVal = valActual - 1;
      var nuevoId = '#comment_indicator_'+valActual;
      $('#comment_indicator_'+valActual).attr('id',nuevoId);
      $('#comment_indicator_'+valActual).attr('data-id',nuevoId);

      estudio[f].id = nuevoVal;
    }

    if(!$('#divContBotonera').hasClass('d-none')) {
      var tiempototal = (video.duration()).toFixed(2);
      var tiem = parseFloat(estudio[f].tiempomilis)/1000;
      var leftpc = ((tiem/tiempototal)*100).toFixed(2);
      var ini = Number(estudio[f].segundosIni);
      if(ini==='') {
        ini = 0;
      }
      var fin = Number(estudio[f].segundosFin);
      if(fin==='') {
        fin = 0;
      }
      tiem1 = tiem - ini;
      tiem2 = tiem + fin;
      playFunct = 'playVideo('+tiem1+','+tiem2+','+estudio[f].id+')';
      delFunct = 'deleteTag('+estudio[f].id+')';
      estiloTag = '';

      if(estudio[f].colo !== '') {
        estiloTag = 'background-color:'+estudio[f].colo+';color:'+estudio[f].coloT+';';
      }
      $('.vjs-progress-control').append('<div id="comment_indicator_'+nuevoVal+'" class="comment_indicator" data-id="'+nuevoVal+'" data-time="'+tiem+'" style="top: -35px; left: '+leftpc+'%;z-index:1000;" onClick="'+playFunct+'"><div class="stick" style="'+estiloTag+'"></div><ul class="flag" onclick="getAttributes('+idB+')"><li style="z-index:1000;'+estiloTag+'" class="watch" data-time="'+tiem+'"></li><li style="'+estiloTag+'"></li></ul></div>');
    }
  }

  localStorage.setItem("estudio", JSON.stringify(estudio));
  $('#playVid'+idTag).remove();
  $('#informePlayVid'+idTag).remove();
  if($('#contags')) {
    $('#contags').text(estudio.length);
  }
  saveEstudio(false,true);
  $('.comment_indicator').remove();
  if (estudio.length == 0){
  }
}
//elimina el ultimo atributo aÃ±adido a un tag y lo guarda en la base de datos
function deleteAtribTag() {
  //console.log(estudio[selectedTag]);
  atribArr = estudio[selectedTag].atributos;
  atribArr.pop();
  estudio[selectedTag].atributos = atribArr;
  saveEstudio(false);
}
//guarda el estudio en la base de datos
function saveEstudio (showsms,refrescar) {
 //console.log('saveEstudio() ----------------------------------------------');
  modificadoEstudio = true;
  if(showsms === '') {
    showsms = true;
  }
  $('#total-acciones').text(estudio.length);
  //comprueba si hay conexion
  //console.log(navigator.onLine);
 //console.log("Antes de guardar");
 //console.log(estudio);

  if (estudio.length > 0) {
    $('#addAll').show();
    $('#addSelect').show();
    $('#num-acciones-coleccion').show();
    $('#exportarVideo').show();
    $('#exportarDibujos').show();
  } else {
    $('#addAll').hide();
    $('#addSelect').hide();
    $('#num-acciones-coleccion').hide();
    $('#exportarVideo').hide();
    $('#exportarDibujos').hide();
  }

  jsoncanvas = [];
  estudio.sort(sortByProperty('tiempo'));
  canvasarr.sort(sortByProperty('tiempo'));
  for (var i = 0; i < estudio.length; i++) {
    jsoncanvas.push(estudio[i]);
    console.log('********************' + estudio[i].boton.toUpperCase() + '********************');
    if (estudio[i].canvas != -1) {
      paintsArr = estudio[i].canvas.toString().split(',');
      for (var j = 0; j < paintsArr.length; j++) {
        //console.log(paintsArr[j]);
        canvasarr.map((c, k) => {
          if (c.id == paintsArr[j]) {
            console.log('*-----' + c.boton.toUpperCase() + '-----');
            jsoncanvas.push(c);
          }
        });
      }
    }
  }
  //jsoncanvas.sort(sortByProperty('tiempo'));
  console.log('estudio -------------------------------------');
  console.log(JSON.parse(JSON.stringify(estudio)));
  console.log('canvasarr -------------------------------------');
  console.log(JSON.parse(JSON.stringify(canvasarr)));
  console.log('jsoncanvas -------------------------------------');
  console.log(JSON.parse(JSON.stringify(jsoncanvas)));

  if(navigator.onLine) {
    guardando = true;
    var nombre = $('#ideEstudio').val();
    //console.log(jsoncanvas);
    var tipoServicio = $('#tipoServicio').val();
    $.ajax({
      cache: false,
      type: 'POST',
      url: '/Save.estudio',
      data: {
        'idestudio':nombre,
        'json': JSON.stringify(estudio),
        'tracker': JSON.stringify(trackloc),
        'trackerpk': JSON.stringify(trackerpk),
        'jsoncanvas': JSON.stringify(jsoncanvas),
        'tipoServicio':tipoServicio
      },
      success: function(data) {

        guardando = false;
        pendienteGuardar = false;
        var auxTagSel = selectedTag;
        //selectedTag = -1;
        var ini = 0;
        if(estudio[auxTagSel]) {
          var ini = estudio[auxTagSel].tiempomilis;
        }
        if($('#divContBotonera').hasClass('d-none')) {
          //console.log('saveEstudio');
          changeTagBackgroundColor(ini,auxTagSel,'save');
        }
        var res = data;
        if(data.indexOf('.') !== -1) {
          var arr = data.split('.');
          res = arr[0];
        }
        if(esSafari && !llamandoGestionColaFrames && colaFrames.length > 0) {
          llamandoGestionColaFrames = true;
          gestionColaFrames();
        }
        if(res == 'OK') {
          if(navigator.onLine) {
            if($('#divContBotonera').hasClass('d-none') && refrescar) {
             //console.log("Guardamos y refrescamos");
             //console.log('modificarContenidoDivTags(true, '+selectedTag+')');
              modificarContenidoDivTags(true, selectedTag);
            }
            $('#semaforo'+nombre).css('background-color','#27AE60');
          }
          if(showsms) {
            $('#modalGuardarEstudio').modal('show');
          } else {
            $('#idsavestate').css("background-color", "#27AE60");
          }
        } else {
          if(showsms) {
          } else {
            $('#idsavestate').css("background-color", "#C0392B");
          }
        }
      }
    });
  } else {
    guardando = false;
    pendienteGuardar = true;
    perdidaRed = true;
    if(showsms) {
      alert("No se encontrÃ³ conexiÃ³n");
    } else {
      $('#idsavestate').css("background-color", "#C0392B");
    }
  }

}
//elimina el clip del div de tags
function removeElement(tag) {
  $(tag).remove();
}

$('#selinformemod').click(function(){
  if($('#selinformemod').val() == -1) {
    $('#nuevacole').removeClass('d-none');
  } else {
    $('#nuevacole').addClass('d-none');
  }
});

/*-----------------------------------------------------------------------------------*/

//inicializa el timer
function startTime() {
  if(document.getElementById('relojestudio')) {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if(h < 10){
      h = '0' + h;
    }
    if(m < 10){
      m = '0' + m;
    }
    if(s < 10){
      s = '0' + s;
    }

    //m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('relojestudio').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
}

//funcion para aÃ±adir 0 delante de los numeros menores que 10
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
var hrefBackEstudio = '';
//Abre el modal para borrar clip
$('#modalDeleteTagConfirm').on('show.bs.modal', function (e) {
  if(!editando) {
    var idclip = $(e.relatedTarget).attr('data-id');
    if($('#divContBotonera').hasClass('d-none')) {
      changeTagBackgroundColor(1,idclip,'a');
    }
    $('#tagtodetelemodal').val(idclip);
  } else {
    $('#modalDeleteTagConfirm').modal('hide');
  }
});

//boton que acepta eliminar un clip
$('#accModalConfirmDeleteTag').click(function(){
  var tagdel = $('#tagtodetelemodal').val();
  deleteTag(tagdel);
});

//oculta todos los divs que hay sobre el video
function ocultarCapasSobreVideo() {
  if($('.canvas_controls') && $('.canvas_controls').hasClass('shown')) {
    $('.canvas_controls').removeClass('shown');
    toggle_canvas(false);
  }

  if(!$('#tags').hasClass('d-none')) {
    $('#tags').addClass('d-none');
  }

  if(!$('#botoneraVideo').hasClass('d-none')) {
    $('#botoneraVideo').addClass('d-none');
  }

  if(!$('#divinforme').hasClass('d-none')) {
    $('#divinforme').addClass('d-none');
  }
}

//muestra u oculta divs para hacer el efecto de desplegar niveles de la botonera
function visibilidadDIV(iddiv,id) {
  if($(id).hasClass('fa-chevron-down')) {
    $('.menudesp').addClass('d-none');
    $('.icono').addClass('fa-chevron-down');
    $('.icono').removeClass('fa-chevron-up');
    $(id).removeClass('fa-chevron-down');
    $(id).addClass('fa-chevron-up');
  } else {
    $(id).removeClass('fa-chevron-up');
    $(id).addClass('fa-chevron-down');
  }
  if($(iddiv).hasClass('d-none')) {
    $(iddiv).removeClass('d-none');
  } else {
    $(iddiv).addClass('d-none');
  }
  redimensionar();
}

/*
function actualizarTagImg() {
  for(var k = 0; k < estudio.length; k++) {
    var te = estudio[k].tiempo;
    te = te.split(':');
    var minu = Number(te[0]);
    var segu = Number(te[1]);
    var milis = (minu*60)+segu;
    var ima = capturaFrame(k,milis);
  }
}
*/

//copia al portapapeles el contenido de la ficha
function copiarAlPortapapeles() {
  if($('#tipoServicio').val() == 'I') {
    var ficha = ' PK: ' + document.getElementById("pkficha").value;
    var via = ' Via: ' + document.getElementById("viaficha").value;
    var sentido = ' Sentido: ' + document.getElementById("sentidoficha").value;
    var coord = ' Coordenadas: ' + document.getElementById("coord").innerHTML;
  } else {
    var ficha = '';
    var via = '';
    var sentido = '';
    var coord = '';
  }

  var textoo = document.getElementById("titFicha").innerHTML+'\r\n'+document.getElementById("fechaFicha").innerHTML+'\r\n'+document.getElementById("camposTipoFicha").innerHTML+'\n'+document.getElementById("fichaTag").innerHTML+'\r\n'+ficha+via+sentido+coord+'\r\n Notas: '+document.getElementById("tagnotedesc").innerHTML;
  textoo = textoo.replace('&lt;br&gt;','\r\n');
  textoo = textoo.replace('<br><br><br>','\r\n');
  textoo = textoo.replace('<br>','\r\n');
  textoo = textoo.replace('<b>','');
  textoo = textoo.replace('&nbsp;','');
  textoo = textoo.replace(/<br[^>]*>/g, "\r\n");
  $('#clipboardpaste').html(textoo);
  var aux = document.getElementById("clipboardpaste");
  aux.select();
  document.execCommand("copy");
  //Make the container Div contenteditable
  /*$('#frameid').attr("contenteditable", true);
  //Select the image
  SelectText($('#frameid').get(0));
  //Execute copy Command
  //Note: This will ONLY work directly inside a click listenner
  document.execCommand('copy');
  //Unselect the content
  window.getSelection().removeAllRanges();
  //Make the container Div uneditable again
  $('#frameid').removeAttr("contenteditable");
  //Success!!
  alert("image copied!");*/
}
//Cross-browser function to select content
/*function SelectText(element) {
    var doc = document;
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}*/
//aplica el ajuste al PK
function ajustePK(ajuste){
  var pkac = parseFloat($('#pkvalue').val());
  ajuste = parseFloat(ajuste);
  var operacion = pkac + ajuste;
}


//Muestra un mapa con el punto de las coordenadas que le pasas
var latlong;
var map;
//Muestra el mapa en la ficha de tag con las coordenadas de la accion seleccionada
function initMap(lat,lon, title = '') {
  lati = parseFloat(lat);
  long = parseFloat(lon);
  var coord = {lat: lati, lng: long};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: coord,
    zoom: 10
  });

  var marker = new google.maps.Marker({position: coord, map: map,title: title});
  /*var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: coord,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  map.setStreetView(panorama);*/
}
function initMapInOut(latIni,lonIni, latFin, lonFin, title = '') {
  latiIni = parseFloat(latIni);
  latiFin = parseFloat(latFin);
  longIni = parseFloat(lonIni);
  longFin = parseFloat(lonFin);

  var coordIni = {lat: latiIni, lng: longFin};
  var coordFin = {lat: latiFin, lng: longFin};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10
  });
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: 'roadmap'
  };
  bounds.extend(coordIni);
  bounds.extend(coordFin);
  marker = new google.maps.Marker({
            position: coordIni,
            map: map,
            title: 'Inicio',
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }

          });

  marker = new google.maps.Marker({
            position: coordFin,
            map: map,
            title: 'Fin',
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }

          });
  // Add info window to marker
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infoWindow.setContent(infoWindowContent[i]);
      infoWindow.open(map, marker);
    }
  })(marker, i));
  // Center the map to fit all markers on the screen
  map.fitBounds(bounds);
}

//Ya no se usa muestra una lista de pks cercanos
/*function calcularPK(){
  coordGeo = $('#coord').text();
  idButt = $('#idButt').val();
  distance = $('select[name=distanciamapa]').val();
  coordG = "'"+coordGeo+"'";

  $('#listaPKcercanos').html('');
  if(coordGeo != '' && coordGeo != ' ') {
    var laloarr = coordGeo.split(',');
    //console.log('mapa::: '+laloarr[0].replace(' ','')+','+laloarr[1].replace(' ',''));
    var latGM = parseFloat(laloarr[0].replace(' ',''));
    var longGM = parseFloat(laloarr[1].replace(' ',''));
    //console.log(latGM);
    //console.log(longGM);
    latlong = Wgs2Utm(longGM,latGM);
    var longlatarr = latlong.split(' ; ');
    var latitud = longlatarr[0];
    var conzona = longlatarr[1];
    var conzonaarr = conzona.split(' ');
    var longitud = conzonaarr[0];
    var zona = conzonaarr[1];
    var distancia = $('#distanciamapa').val();
    //console.log(latitud + ' - ' + longitud + ' - ' + zona + ' - ' + distancia)
    var arcgislink = "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Puntos_kilometricos_Espana/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry="+latitud+"%2C"+longitud+"&geometryType=esriGeometryPoint&inSR=258"+zona+"&spatialRel=esriSpatialRelIntersects&resultType=none&distance="+distancia+"&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    $.ajax({
      cache: false,
      type: 'GET',
      url: arcgislink,
      data: {
      },
      success: function(data) {
        var tojson = JSON.parse(data);
        if(tojson.features.length > 0) {
          for(var i = 0; i < tojson.features.length; i++) {
            //console.log(tojson.features[i]);
            //console.log(tojson.featurfes[i].geometry.x + ', ' + tojson.features[i].geometry.y);
            $('#listaPKcercanos').append('<option value="'+tojson.features[i].attributes.Nombre+'"><strong><span id="gpshtml">'+tojson.features[i].attributes.Nombre+'</span></strong> - PK <span id="km_last">'+tojson.features[i].attributes.numero+'</span> - <span id="km_last">'+tojson.features[i].attributes.sentidopkD+'</span></option>');
          }
        } else {
          $('#listaPKcercanos').html('Aumente la distancia para obtener resultados');
        }
        $('#listaPKcercanos').show();
      }
    });
  }
}*/

//No se usa FunciÃ³n para mostrar los botones que son atributos de la categoria seleccionada
/*function getAttributes(id, color){
  idTag = '#divima'+id;
  if(color === undefined){
    color = $(idTag).attr("data-color");
  }
  var botonesSelected = $('.botones-selected');
  for(var i = 0; i < botonesSelected.length; i++){
    $('.3botones-unselected.active').append($('.2botones-selected.active #'+botonesSelected[i].id));
    $('#'+botonesSelected[i].id).removeClass('botones-selected');
  }
  var botonesAtr = $('.3botones-unselected.active .boton-atributo');
  div = $('#resaltoPlayVid'+id);
  if(div.hasClass('resalto')){
    $('.2botones-selected.active').hide();
    $('.3botones-unselected.active').show();
    //$('#1botonera-original').show();
    var botonesSelected = $('.botones-selected');
    for(var i = 0; i < botonesSelected.length; i++){
      $('.3botones-unselected.active').append($('.2botones-selected.active #'+botonesSelected[i].id));
      $('#'+botonesSelected[i].id).removeClass('botones-selected');
    }
  }else{
    $('.2botones-selected.active').show();
    $('.3botones-unselected.active').hide();
    //$('#1botonera-original').hide();
    for(var k = 0; k < botonesAtr.length; k++){
      botonAtr = $('.3botones-unselected.active #'+botonesAtr[k].id);
      colorBoton = botonAtr.attr("data-color");
      if(colorBoton == color){
        $('.2botones-selected.active').append(botonAtr);
        botonAtr.removeClass('d-none');
        botonAtr.addClass('botones-selected');
      }
    }
    $('.3botones-unselected.active').hide();
  }
}*/
//No se usa Muestra todos los botones atributos
/*function displayAllButtons(){
  $('.2botones-selected.active').hide();
  $('.3botones-unselected.active').show();
  var botonesSelected = $('.botones-selected');
  for(var i = 0; i < botonesSelected.length; i++){
    $('.3botones-unselected.active').append($('.2botones-selected.active #'+botonesSelected[i].id));
    $('#'+botonesSelected[i].id).removeClass('botones-selected');
  }
}*/

//funciÃ³n para ir abriendo las diferentes pestaÃ±as/botoneras
function displayTab(evt, botName, idBotonera, filtro){
  var i, tabcontent, tablinks, namePadre, idB;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-estudio");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(botName).style.display = "flex";
  evt.currentTarget.className += " active";
  botonesVisibles = $('.botones-visibles');
  botonesParent = $('.botones-parent');
  for(var i = 0; i < botonesParent.length; i++){
    if($('#'+botonesParent[i].id).hasClass('activo')){
      namePadre = $('#'+botonesParent[i].id).attr('data-name');
    }
  }
  for(var i = 0; i < botonesVisibles.length; i++){
    $('#'+botonesVisibles[i].id).removeClass('botones-visibles');
    $('#'+botonesVisibles[i].id).addClass('d-none');
  }
  if(botonesVisibles[0] !== undefined){
    idBo = '#'+botonesVisibles[0].id;
    namePadre = $(idBo).attr('data-namePadre');
    idPadre = $(idBo).attr('data-idPadre');
  }
  getChilds(idBotonera, namePadre,0,true);
  alturaBotonesHijo();
  if(filtro){
    if($('#filter-estudio-none').hasClass('active') || $('#filter-estudio-pattern').hasClass('active')){
      nameBot = $('#tab-estudio-'+idBotonera).data('name');
      filtrarPorBotonera(idBotonera,nameBot);
    }
  }
}

function displayTabTags(evt, tab, tabLink){
  //console.log('displayTabTags( ' + tab + ', ' + tabLink + ')');
  var i, tabcontent, tablinks;
  tabcontent = $('.tabcontent-vista');
  for (i = 0; i < tabcontent.length; i++) {
    $('#'+tabcontent[i].id).hide();
  }
  tablinks = $('.tablinks-vista');
  for (i = 0; i < tablinks.length; i++) {
    $('#'+tablinks[i].id).removeClass('active');

  }
  $('#'+tab).show();
  $('#'+tabLink).addClass('active');

  localStorage.setItem("tabVistaEstudio", tab);
  localStorage.setItem("tabLinkVistaEstudio", tabLink);

  var flags = $('.comment_indicator');

  for (i = 0; i < flags.length; i++) {
    flag = $('#'+flags[i].id);
    if (tab == 'divClips') {
      if (flag.hasClass('clip')) {
        flag.show();
      } else {
        flag.hide();
      }
    } else if (tab == 'divPaints') {
      if (flag.hasClass('paint')) {
        flag.show();
      } else {
        flag.hide();
      }
    } else if (tab == 'divClipsPaints') {
      flag.show();
    }

  }

  if (tab == 'divClips') {
    $('#edit-estudio').removeClass('visibility-hidden');
    $('#insert-estudio').removeClass('visibility-hidden');
    $('#filter-estudio-none').removeClass('visibility-hidden');
    $('#filter-estudio-pattern').removeClass('visibility-hidden');
    $('#undo-estudio').removeClass('visibility-hidden');
    $('#botoneraVideo').removeClass('visibility-hidden');
    $('#botonerasAtributos').removeClass('visibility-hidden');
    $('#divinforme').removeClass('visibility-hidden');
    //$('#slide-dibujos').hide();
    //$('#video-content').show();
    resaltoClass = 'resaltoPlayVid';
    divClass = 'clip-video-est';
    resaltoId = 'playVid';
    combo = '';
    tabId = 'divClips';
    tagsResalto = $('.resaltoPlayvid');
    for (var i = 0; i < tagsResalto.length; i++) {
      if ($('#'+tagsResalto[i].id).hasClass('resalto')){
        id = tagsResalto[i].id.substr(14);
       //console.log('id tag: ' + id + ' *********************************************');
        //changeTagBackgroundColor(0,id,'a', false);
        tiempoIni = parseInt(estudio[id].tiempomilis / 1000) - parseInt(estudio[id].segundosIni);
        video.currentTime(tiempoIni);
      }
    }
  }
  if (tab == 'divPaints') {
    $('#edit-estudio').addClass('visibility-hidden');
    $('#insert-estudio').addClass('visibility-hidden');
    $('#filter-estudio-none').addClass('visibility-hidden');
    $('#filter-estudio-pattern').addClass('visibility-hidden');
    $('#undo-estudio').addClass('visibility-hidden');
    $('#botoneraVideo').addClass('visibility-hidden');
    $('#botonerasAtributos').addClass('visibility-hidden');
    $('#divinforme').addClass('visibility-hidden');
    //$('#slide-dibujos').show();
    //$('#video-content').hide();
    resaltoClass = 'resaltoPaintVid';
    divClass = 'paint-video-est';
    resaltoId = 'paintVid';
    combo = '';
    tabId = 'divPaints';
    tagsResalto = $('.resaltoPaintvid');
    /*for (var i = 0; i < tagsResalto.length; i++) {
      if ($('#'+tagsResalto[i].id).hasClass('resalto')){
        id = tagsResalto[i].id.substr(15);
        show_canvas((canvasarr[id].tiempomilis/1000),id);
        video.currentTime(canvasarr[id].tiempomilis/1000);
      }
    }*/
  }
  if (tab == 'divClipsPaints') {
    $('#edit-estudio').removeClass('visibility-hidden');
    $('#insert-estudio').removeClass('visibility-hidden');
    $('#filter-estudio-none').removeClass('visibility-hidden');
    $('#filter-estudio-pattern').removeClass('visibility-hidden');
    $('#undo-estudio').removeClass('visibility-hidden');
    $('#botoneraVideo').removeClass('visibility-hidden');
    $('#botonerasAtributos').removeClass('visibility-hidden');
    $('#divinforme').removeClass('visibility-hidden');
    //$('#slide-dibujos').hide();
    //$('#video-content').show();
    resaltoClass = 'clip-paint-video-est';
    divClass = 'clip-paint-video-est';
    resaltoId = 'playVid';
    combo = 'Combo';
    tabId = 'divClipsPaints';
  }
  var tipoServicio = $('#tipoServicio').val();
  //console.log("tipoServicio: " + tipoServicio)
  if(tipoServicio == 'S'){
    $('#edit-estudio').addClass('visibility-hidden');
    $('#insert-estudio').addClass('visibility-hidden');
    $('#filter-estudio-none').addClass('visibility-hidden');
    $('#filter-estudio-pattern').addClass('visibility-hidden');
    $('#undo-estudio').addClass('visibility-hidden');
    $('#botoneraVideo').addClass('visibility-hidden');
    $('#botonerasAtributos').addClass('visibility-hidden');
    $('#divinforme').addClass('visibility-hidden');
    resaltoClass = 'resaltoPaintVid';
    divClass = 'paint-video-est';
    resaltoId = 'paintVid';
    combo = '';
    tabId = 'divPaints';
    tagsResalto = $('.resaltoPaintvid');
    for (var i = 0; i < tagsResalto.length; i++) {
      if ($('#'+tagsResalto[i].id).hasClass('resalto')){
        id = tagsResalto[i].id.substr(15);
        show_canvas((canvasarr[id].tiempomilis/1000),id);
        video.currentTime(canvasarr[id].tiempomilis/1000);
      }
    }
  }
}
//Muestra los botones de hijos y atributos de la categoria seleccionada
function getChilds(idBotonera, idBotonPadre, botonP,active, nameBoton){
  //console.log('getChilds( ' + idBotonera + ', ' + idBotonPadre + ', ' + botonP + ', ' + active + ', ' + nameBoton + ' )');

  if(!$('#divContBotonera').hasClass('d-none')){
    active = true;
  }
  if($('#filter-estudio-none').hasClass('inactive') && $('#filter-estudio-pattern').hasClass('inactive')){
    active = true;
  }
  if (idBotonera == 0 && idBotonPadre == 0) {
    active = false;
  }
  botParent = $('.bot-parent-est');
  botonesParent = $('.botones-parent');
  botonesChild = $('.botones-childs');

  if(active){
    var arrBot = [];
    for(var i = 0; i < botParent.length; i++){
      arrBot.push($('#'+botParent[i].id).data('id'));
    }
    var coincide = false;
    if(!arrBot.includes(idBotonera)){
      for(var i = 0; i < botonesParent.length; i++){
        botonParent = $('#'+botonesParent[i].id);
        if(nameBoton && botonParent.data('name').toLowerCase().trim() == nameBoton.toLowerCase().trim() && !coincide){
          idBotonera = botonParent.data('idbotonera');
          idBotonPadre = botonParent.data('id');
          botonP = '#'+botonesParent[i].id;
          coincide = true;
        }
      }
      if(!coincide){
        for(var i = 0; i < botonesChild.length; i++){
          botonChild = $('#'+botonesChild[i].id);

        }
      }
    }
    //console.log(idBotonera + ' - ' + idBotonPadre + ' - ' + botonP + ' - ' + active + ' - ' + nameBoton);

    isInt = Number.isInteger(idBotonPadre);
    if(urlPagina.match(/estudio/)){
      for(var i = 0; i < botonesParent.length; i++){
        if("#"+botonesParent[i].id == botonP){
          $('#'+botonesParent[i].id).css('border','3px solid #ffffff');
          $('#'+botonesParent[i].id).addClass('activo');
        }else{
          $('#'+botonesParent[i].id).css('border','2px solid #000000');
          $('#'+botonesParent[i].id).removeClass('activo');
        }
      }
    }else if(urlPagina.match(/inspeccion/)){
      //console.log("for: " + botonesParent.length)
     //console.log(botonesParent)
      for(var i = 0; i < botonesParent.length; i++){
        //console.log("idBoton: " + botonesParent[i].id)
        if("#"+botonesParent[i].id == botonP){
          $('#'+botonesParent[i].id).css('border','3px solid #000000');
          $('#'+botonesParent[i].id).addClass('activo');
        }else{
          $('#'+botonesParent[i].id).css('border','2px solid #ffffff');
          $('#'+botonesParent[i].id).removeClass('activo');
        }
      }
    }
    //console.log($('#bot-child-'+idBotonera));
    $('#bot-child-'+idBotonera).css('display','block');
    //console.log("for Hijos: " + botonesChild.length)
    for(var i = 0; i < botonesChild.length; i++){
      //console.log("idBotonHijo: " + botonesChild[i].id)
      $('#'+botonesChild[i].id).removeClass('botones-visibles');
      $('#'+botonesChild[i].id).addClass('d-none');
    }
    botonesChilds = $('.botones-childs.bot-child-'+idBotonera);
    botonesVisibles = [];
    //console.log("for Hijos: " + botonesChilds.length, isInt);
    for(var i = 0; i < botonesChilds.length; i++){
      if(isInt){
        idPadre = $('#'+botonesChilds[i].id).attr("data-idPadre");
      }else{
        idPadre = $('#'+botonesChilds[i].id).attr("data-namePadre");
      }
      //console.log("idPadre: " + idPadre + "     idBotonPadre: " + idBotonPadre);
      if(idBotonPadre == idPadre){
        //console.log('if --------------------------------');
        botonesVisibles.push($('#'+botonesChilds[i].id));
        //console.log(botonesChilds[i].id);
        $('#'+botonesChilds[i].id).addClass('botones-visibles');
        $('#'+botonesChilds[i].id).removeClass('d-none');
      }
    }
    botonesVisibles = $('.botones-visibles');
    var numericallyOrderedDivs = botonesVisibles.sort(function (a, b) {
      if(a.id < b.id) {
       return -1;
      }else{
        return 1;
      }
    });
    for(var i = 0; i < numericallyOrderedDivs.length; i++){
      $('#bot-child-'+idBotonera).append(numericallyOrderedDivs[i]);
    }

    botonesAttributes = $('.botones-attributes');
    botonesVis = [];
    //console.log("for atributos: " + botonesAttributes.length);
    for(var i = 0; i < botonesAttributes.length; i++){
      $('#'+botonesAttributes[i].id).removeClass('botones-vis');
      $('#'+botonesAttributes[i].id).addClass('d-none');
      if(isInt){
        idPadre = $('#'+botonesAttributes[i].id).attr("data-idPadre");
      }else{
        idPadre = $('#'+botonesAttributes[i].id).attr("data-namePadre");
      }
      idBot = $('#'+botonesAttributes[i].id).attr("data-idBotonera");
      //console.log("idPadre: " + idPadre + "     idBotonPadre: " + idBotonPadre + " - idBot: " + idBot + "     idBotonera: " + idBotonera);
      if(idBotonPadre == idPadre && idBot == idBotonera){
        //console.log('if --------------------------------');
        botonesVis.push($('#'+botonesAttributes[i].id));
        $('#'+botonesAttributes[i].id).addClass('botones-vis');
        $('#'+botonesAttributes[i].id).removeClass('d-none');
      }
    }
    //console.log(botonesVis);
    botonesVis = $('.botones-vis');
    var numericallyOrdered = botonesVis.sort(function (a, b) {
      if(a.id < b.id) {
       return -1;
      }else{
        return 1;
      }
    });
    for(var i = 0; i < numericallyOrdered.length; i++){
      $('#botoneraAtributosDerecha').append(numericallyOrdered[i]);
    }
    if(urlPagina.match(/estudio/)){
      if($('#botoneraAtributosIzquierda') != ''){
        for(var i = 0; i < botonesAttributes.length; i++){
          $('#'+botonesAttributes[i].id).removeClass('col-md-4');
          $('#'+botonesAttributes[i].id).removeClass('col-xs-6');
          $('#'+botonesAttributes[i].id).addClass('col-md-3');
          $('#'+botonesAttributes[i].id).addClass('col-xs-4');
        }
      }
    }
    $('#insert-estudio').hasClass('active')
    tabs = $('.tablinks-estudio');$('#insert-estudio').hasClass('active')
    for(var i = 0; i < tabs.length; i++){
      if($('#'+tabs[i].id).data('id') == idBotonera){
        $('#'+tabs[i].id).addClass('active');
      }else{
        $('#'+tabs[i].id).removeClass('active');
      }
    }
    for(var i = 0; i < botParent.length; i++){
      if($('#'+botParent[i].id).data('id') == idBotonera){
        $('#'+botParent[i].id).show();
      }else{
        $('#'+botParent[i].id).hide();
      }
    }
    setTimeout('alturaBotonesHijo()',1000);
  }
}

/******** ESTUDIOS **********/
//FunciÃ³n a la que se llama cuando haces click en una acciÃ³n y en funciÃ³n de si esta activo el filtrado o no hace una cosa u otra
function filtroAÃ±adirAccion(id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,temp){
  if($('#divContBotonera').hasClass('d-none')) {
    //Estudios
    if($('#filter-estudio-none').hasClass('inactive') && $('#filter-estudio-pattern').hasClass('inactive')){
      //Sin Fltros
      if($('#insert-estudio').hasClass('active') || $('#edit-estudio').hasClass('active')){
        creacionEstudio2(id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,temp);
      }
    }else if($('#filter-estudio-none').hasClass('active')){
      //Marca de agua
      if(!$('#filter-estudio-none').prop('disabled')){
        botonesBotoneras = $('.filtro-estudio');
        //console.log(botonesBotoneras.length);
        for(var i = 0; i < botonesBotoneras.length; i++){
          botFiltro = $('#'+botonesBotoneras[i].id);
          //console.log(botFiltro.data('id') + ' == ' + idB);
          if(botFiltro.data('id') == idB){
            if(familia != ''){
              filtrarAccion(idB,esAtributo,familia,botFiltro.data('id'),act,-999);
            }else{
              filtrarAccion(idB,esAtributo,-555,botFiltro.data('id'),act,-999);
            }
          }
        }
      }else if($('#edit-estudio').hasClass('active')){
        creacionEstudio2(id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,temp);
      } else{
        if($('#insert-estudio').hasClass('active') || $('#edit-estudio').hasClass('active')){
          creacionEstudio2(id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,temp);
        }
      }
    }else if($('#filter-estudio-pattern').hasClass('active')){
      if(!$('#filter-estudio-pattern').prop('disabled')){
       //console.log("}else if($('#filter-estudio-pattern').hasClass('active')){");
        botonesBotoneras = $('.filtro-estudio');
        for(var i = 0; i < botonesBotoneras.length; i++){
          botFiltro = $('#'+botonesBotoneras[i].id);
         //console.log(botFiltro.data('id') + ' == ' + idB);
          if(botFiltro.data('id') == idB){
            if(botFiltro.data('id') == idB){
              if(familia != ''){
               //console.log("filtrarAccion(" + idB + ", " +  esAtributo + ", " + familia +", " + botFiltro.data('id') + ", " + act + ", " + "-999)")
                filtrarAccion(idB,esAtributo,familia,botFiltro.data('id'),act,-999);
              }else{
               //console.log("filtrarAccion(" + idB + ", " +  esAtributo + ", -555, " + botFiltro.data('id') + ", " + act + ", " + "-999)")
                filtrarAccion(idB,esAtributo,-555,botFiltro.data('id'),act,-999);
              }
            }
          }
        }
      }else if($('#edit-estudio').hasClass('active')){
        creacionEstudio2(id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,temp);
      }
      else{
        if($('#insert-estudio').hasClass('active') || $('#edit-estudio').hasClass('active')){
          creacionEstudio2(id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,temp);
        }
      }
    }
  }else{
    if($('#insert-estudio').hasClass('active') || $('#edit-estudio').hasClass('active')){
      creacionEstudio2(id,idB,idBF,act,familia,pan,bloc,boton2,boton3,est,colo,coloT,hayestudio,esAtributo,esInOut,segundosIni,segundosFin,temp);
    }
  }
}

//Resaltar la ultima accion aÃ±adida o modificada
function resaltar(scr, idClip){
  //console.log('resaltar( ' + scr + ', ' + idClip + ' )');
  if(idClip != undefined && idClip != -1){
    idAdd = idClip;
  }
  //if ($('#divPaints').css('display') == 'none' && $('#divClipsPaints').css('display') == 'none') {
  if ($('#divPaints').css('display') == 'none') {
    resalto = $('.resaltoPlayVid');

    for(var i = 0; i < resalto.length; i++){
      $('#'+resalto[i].id).removeClass('resalto');;
    }
    //console.log('resaltar() - ' + idAdd);
    $('#resaltoPlayVid'+idAdd).addClass('resalto');
    selectedTag = idAdd;
    //console.log(idAdd);
    //scroll = parseInt(idAdd) * 105;
    scroll = 0;
    for(var i = 0; i <= idAdd; i++){
      if (resalto[i]) {
        scroll += $('#'+resalto[i].id).height();
      }
    }
    scroll = scroll - 200;
    //console.log('scrollResalto: ' + scroll);
    //if(scr){
    //console.log($('#resaltoPlayVid'+idAdd).offset());
    if ($('#resaltoPlayVid'+idAdd).offset()) {
      //console.log('if');
      $('#divClips').scrollTop($('#resaltoPlayVid'+idAdd).offset().top - 200); //scroll
    }
    //}
    //console.log('scrollResalto: ' + scroll);

  }
  //if ($('#divClipsPaints').css('display') == 'none' && $('#divClips').css('display') == 'none') {
  if ($('#divClips').css('display') == 'none') {
    resalto = $('.resaltoPaintVid');

    for(var i = 0; i < resalto.length; i++){
      $('#'+resalto[i].id).removeClass('resalto');;
    }

    $('#resaltoPaintVid'+idAdd).addClass('resalto');
    selectedTag = idAdd;

    scroll = 0;
    for(var i = 0; i <= idAdd; i++){
      if (resalto[i]) {
        scroll += $('#'+resalto[i].id).height();
      }
    }
    scroll = scroll - 200;

    if ($('#resaltoPaintVid'+idAdd).offset()) {
      $('#divPaints').scrollTop($('#resaltoPaintVid'+idAdd).offset().top - 200); //scroll
    }
  }
  if ($('#divPaints').css('display') == 'none' && $('#divClips').css('display') == 'none') {

  }
  $('#divClips').height(heightWindow-130);
  $('#divPaints').height(heightWindow-130);
  $('#divClipsPaints').height(heightWindow-130);
  $('body').css('cursor','inherit');
}
//Ajusta la altura del div de los botones hijos para que ocupe todo el espacio
function alturaBotonesHijo(){
  divClips = $('#divClips').height();
  botonesPadreHeight = $('#botonesPadre').height();
  botoneraVideoHeight = $('#divRowVid').height()-35;
  botonesPadrePercent = (botonesPadreHeight/divClips)*100;

  if(urlPagina.match(/inspeccion/)){
    botonesHijoPercent = 100 - botonesPadrePercent - 2;
  }else{
    botonesHijoPercent = 99 - botonesPadrePercent - 2;
  }
  //console.log('divClips: ' + divClips);
  //console.log('botoneraVideoHeight: ' + botoneraVideoHeight)
  //console.log('botonesPadrePercent: ' + botonesPadrePercent);
  //console.log('botonesHijoPercent: ' + botonesHijoPercent);
  $('#botonesHijo').height(botonesHijoPercent + '%');
}

//Elimina elementos duplicados en un array No se usa
function eliminarDuplicados(array){
  var arr_limpio = [];
  var cantidad = {};
  for(var i = 0; i < array.length; i++){
    if(!(array[i] in cantidad)) {
      cantidad[array[i]] = 0;
      arr_limpio.push(array[i]);
      cantidad[array[i]]++;
    } else {
      cantidad[array[i]]++;
    }
  }
  arrayFinal = [];
  for (var j=0; j < arr_limpio.length; j++) {
    arrayFinal.push(arr_limpio[j]);
  }

  return arrayFinal;
}

/*******************************************************************************************************************************************************************************/
//CÃ³digo que se ejecta al cargar la pÃ¡gina
$(document).ready(function(){
  botonesAtributo = $('.botonera-atributos-generales');
  var num = botonesAtributo.sort(function (a, b) {
    if(a.id < b.id) {
     return -1;
    }else{
      return 1;
    }
  });
  for(var i = 0; i < num.length; i++){
    $('#botoneraAtributosGenerales').append(num[i]);
  }

  redimensionar()
/*  if($('#botoneraAtributosGenerales').attr('data-tipo') == "I"){
    if($('#botoneraAtributosIzquierda').children().length == 0 && $('#botoneraAtributosDerecha').children().length == 0){
      $('#botoneraAtributosGenerales').width('98%');
    }
  }*/

  //$('#botoneraAtributosDerecha').css('padding-left' , 15);

  heightWindow = $(window).height();

  if(urlPagina.match(/inspeccion/)){
    $('#divWrapper').height(heightWindow);
    $('#botoneraInspeccion').height(heightWindow-56);
    $('#tags').height(heightWindow-98.5);
    $('#botoneraFavoritosAtributos').height('auto');
    $('#botoneraFavoritosAtributos').css('max-height',heightWindow-56);
    $('#botoneraAtributosDerecha').height('auto');
    $('#botoneraAtributosDerecha').css('max-height',heightWindow-56);
    if($('#botoneraAtributosGenerales').children().length != 0){
      $('#botoneraAtributosGenerales').height(heightWindow-431);
    }
  }
  //Gestiona boton deshacer Ãºltima acciÃ³n
  $('#undo-estudio').click(function() {
    $('#undo-estudio').removeClass('active');
    $('#undo-estudio').addClass('inactive');
    if (lastChange == 'estudio') {
     //console.log('undo estudio');
      estudio = JSON.parse(previousEstudio);
      if (alsoPaints) {
       //console.log('alsoPaints');
        canvasarr = JSON.parse(previousCanvas);
       //console.log(canvasarr);
        if (canvasarr.length == 0) {
          clear_canvas();
        }
      }
    }
    if (lastChange == 'canvas') {
     //console.log('undo canvas');
      if (!onlyPaint) {
       //console.log('!onlyPaint');
        estudio = JSON.parse(previousEstudio);
      }
      canvasarr = JSON.parse(previousCanvas);
    }
    saveEstudio(false,true);
    $('#undo-estudio').attr('disabled',true);
  });

  //Gestiona el botÃ³n de volver atrÃ¡s
  $('#botBack').click(function(){
    //console.log('-------- modificadoEstudio: ', modificadoEstudio);
    if(modificadoEstudio){
      cerrarInOuts();
      pararContador();
      showWaitMouse();
      //guardarRuta(1,false);
      guardarTiempo();
      clearInterval(gpsInterval);
      saveEstudio(false);
    }
  });

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // estamos desde un movil o tablet
}

$('#resaltoPlayVid0').addClass('resalto');
$('#resaltoPaintVid0').addClass('resalto');

/*$(document).keyup(function(e) {
  if (event.ctrlKey || event.metaKey) {
    //alert("The CTRL key was pressed!");
  }else {
    //alert("The CTRL key was NOT pressed!");
  }
});*/

/*if($('#videoprincipal').hasClass('vjs-fullscreen')){
  $('button.vjs-control.fa-tag').hide();
  //console.log('if fullscreen');
}else{
  $('button.vjs-control.fa-tag').show();
  //console.log('else fullscreen');
}*/
});

function convertirInOut(){
 //console.log("convertirInOut");
 var estudioAnterior;
  if(!$('#divContBotonera').hasClass('d-none')) {
    var estudioAnterior = estudio.length -1;
    if (estudio[estudioAnterior].tipo != 1){
      tipo = 1;
      $("#BotonInOut").attr("disabled", false);
      //$("#BotonInOut2").attr("disabled", true);

      estudio[estudioAnterior].tipo = tipo;
      estudio[estudioAnterior].segundosIni = 0;
      estudio[estudioAnterior].segundosFin = 0;
      var nuevoInOut = '<input type="hidden" id="BotonInOut' + estudio[estudioAnterior].idboton + '" value="'+ estudio[estudioAnterior].id +'">';
      //console.log(estudio[estudioAnterior]);
      $("#boton-fav-"+estudio[estudioAnterior].idboton).addClass("lineas-diagonales-R");
      //$("#boton--"+estudio[estudioAnterior].idboton).addClass("lineas-diagonales-R");
      //$("#"+estudio[estudioAnterior].idboton).addClass("lineas-diagonales-R");
      $("#"+estudio[estudioAnterior].idbotonFam).addClass("lineas-diagonales-R");
      var semaforo = $("#semaforo" + estudio[estudioAnterior].id)[0].outerHTML;
     //console.log(semaforo);
      var atributos =""
      estudio[estudioAnterior].atributos.forEach(function callback(atributo, index, array) {
        atributos = atributos + atributo.atributo + "<br/>"
      });
      $('#zonaInOut').prepend(nuevoInOut);

      claseTag="<i id='tag" + estudio[estudioAnterior].id + "' style='font-size:15px;height: 20px;padding-left: 20px;' class='float-right fas fa-stopwatch'></i>";

      var boton = '<div class="col-md-12" style="padding:0;"> \
            <div id="bot'+estudio[estudioAnterior].id+'" class="btn btn-default btn-barra" style="border:0;border-radius:0;width:100%;background-color:'+estudio[estudioAnterior].colo+'\
            ;color:'+estudio[estudioAnterior].coloT+'"><div style="padding-right:10px;float:right;">'+semaforo+'</div>' + estudio[estudioAnterior].boton + '<br>'+ atributos+'</span><br>\
              <span id="gps'+estudio[estudioAnterior].id+'">' + estudio[estudioAnterior].pk.viapkguardado + " - " + estudio[estudioAnterior].pk.sentidopkguardado + '<br>\
              Inicio '+ estudio[estudioAnterior].geolocalizacion+ '<br/> PK: ' + estudio[estudioAnterior].pk.pkguardado+'<br/>' + estudio[estudioAnterior].tiempo +'</span><br/><span id="gpsFin'+estudio[estudioAnterior].id+'"\
              style="display:none;"></span><br><span class="pad-right"></span><button id="buttnote'+estudio[estudioAnterior].id+'"\
              class="btn btn-xs yellow" data-toggle="modal" data-id="'+estudio[estudioAnterior].id+'" data-target="#editTagNote" style="text-align:left !important;width: 30px;\
              height: 20px;border-color:' + estudio[estudioAnterior].coloT + ';border-width: 3px;"></button>'+ claseTag + '\
            </div>\
          </div>';
      $("#playVid"+estudio[estudioAnterior].id).html(boton);
    }
  }else{
    if(!$('#edit-estudio').hasClass('active')){
      var absoluta = 0;

      for ( var i = 0; i<estudio.length; i++){
        if(parseInt(absoluta,10) < parseInt(estudio[i].idAbsoluta,10)){
          absoluta = estudio[i].idAbsoluta;
          estudioAnterior = estudio[i].id;
        }
      }
      //console.log("estudioAnterior: " + estudioAnterior)
      estudio[estudioAnterior].segundosIni = 0;
      estudio[estudioAnterior].segundosFin = 0;

      if (estudio[estudioAnterior].tipo != 1){
        $("#BotonInOut").attr("disabled", false);
        //$("#BotonInOut2").attr("disabled", true);

        estudio[estudioAnterior].tipo = 1
        var nuevoInOut = '<input type="hidden" id="BotonInOut' + estudio[estudioAnterior].idboton + '" value="'+ estudio[estudioAnterior].idAbsoluta +'">'
        //$("#boton--"+estudio[estudioAnterior].idboton).addClass("lineas-diagonales-R");
        //$("#"+estudio[estudioAnterior].idboton).addClass("lineas-diagonales-R");
        $("#"+estudio[estudioAnterior].idbotonFam).addClass("lineas-diagonales-R");
        $('#zonaInOut').prepend(nuevoInOut);
        saveEstudio(false,true);
      }else{
        estudio[estudioAnterior].tipo = 0
        //$("#boton--"+estudio[estudioAnterior].idboton).removeClass("lineas-diagonales-R");
        //$("#"+estudio[estudioAnterior].idboton).removeClass("lineas-diagonales-R");
        $("#"+estudio[estudioAnterior].idbotonFam).removeClass("lineas-diagonales-R");
        $("#BotonInOut" + estudio[estudioAnterior].idboton).remove();
      }
    }else{
      var estudioAnterior = $(".resalto")[0].id.substring(14)
      if (estudio[estudioAnterior].tipo != 1){
        $("#BotonInOut").attr("disabled", false);
        //$("#BotonInOut2").attr("disabled", true);

        estudio[estudioAnterior].tipo = 1
        var nuevoInOut = '<input type="hidden" id="BotonInOut' + estudio[estudioAnterior].idboton + '" value="'+ estudio[estudioAnterior].idAbsoluta +'">'
        //$("#boton--"+estudio[estudioAnterior].idboton).addClass("lineas-diagonales-R");
        //$("#"+estudio[estudioAnterior].idboton).addClass("lineas-diagonales-R");
        $("#"+estudio[estudioAnterior].idbotonFam).addClass("lineas-diagonales-R");
        $('#zonaInOut').prepend(nuevoInOut);
        saveEstudio(false,true);
      }else{
        estudio[estudioAnterior].tipo = 0
        //$("#boton--"+estudio[estudioAnterior].idboton).removeClass("lineas-diagonales-R");
        //$("#"+estudio[estudioAnterior].idboton).removeClass("lineas-diagonales-R");
        $("#"+estudio[estudioAnterior].idbotonFam).removeClass("lineas-diagonales-R");
        $("#BotonInOut" + estudio[estudioAnterior].idboton).remove();
      }
    }
  }
  localStorage.setItem("estudio", JSON.stringify(estudio));
  saveEstudio(false,true);
}


function cerrarInOuts(){
  //console.log("cerrarInOuts estudio");
    if(!$('#divContBotonera').hasClass('d-none')) {
      var botonesInOut = $("#zonaInOut").children()

      for (i = 0; i< botonesInOut.length; i++){
       //console.log(botonesInOut[i].id);
       //console.log(botonesInOut[i].value);

        var idBoton = botonesInOut[i].id;
        var idTagInOut = botonesInOut[i].value;

       //console.log(estudio[idTagInOut].idboton);

        $("#boton-fav-"+estudio[idTagInOut].idboton).removeClass("lineas-diagonales-R");
        //$("#boton--"+estudio[idTagInOut].idboton).removeClass("lineas-diagonales-R");
        //$("#"+estudio[idTagInOut].idboton).removeClass("lineas-diagonales-R");
        $("#"+estudio[idTagInOut].idbotonFam).removeClass("lineas-diagonales-R");


        var tiempo = $("#horas").html()+ ":"+$("#minutos").html()+":"+$("#segundos").html()
        estudio[idTagInOut].tiempoFin = tiempo;
        estudio[idTagInOut].tiempomilisFin = tiempomilisFin;
        estudio[idTagInOut].geoFin = ultgeo;
        estudio[idTagInOut].pkFin = parseFloat($("#pkPK3").val()).toFixed(1)+'00';

        $('#gpsFin'+ idTagInOut).html('Fin ' + ultgeo + '<br> PK: ' + parseFloat($("#pkPK3").val()).toFixed(1)+'00<br/>' + tiempo);
        $('#gpsFin'+ idTagInOut).show();
      }
      $("#zonaInOut").html("")
    }else{
      tiempo = $('.vjs-progress-holder').attr('aria-valuetext');
      var splTiempo = tiempo.split(':');
      var horas = '00';
      var min,seg;
      if(splTiempo.length == 2) {
        horas = '00';
        min = splTiempo[0];
        seg = splTiempo[1];
      } else {
        horas = splTiempo[0];
        min = splTiempo[1];
        seg = splTiempo[2];
      }
      if(parseInt(horas) < 10) {
        horas = '0'+parseInt(horas);
      }

      if(parseInt(min) < 10) {
        min = '0'+parseInt(min);
      }

      if(parseInt(seg) < 10) {
        seg = '0'+parseInt(seg);
      }
      tiempo = horas+':'+min+':'+seg;

      tiempomilis = video.currentTime();
      tiempomilis = Mat.round(tiempomilis) * 1000;
      tiempomilis = tiempomilis.toFixed(2);

      idEst = ideEstudio.value;
      var tipoServicio = $('#tipoServicio').val();
      var geoFin, pkFin
      $.ajax({
        cache: false,
        type: 'POST',
        url: '/PK.getPKEstudio',
        data: {
          'idEstudio': idEst,
          'tiempomilis' : tiempomilis,
          'tipoServicio' : tipoServicio

        },
        success: function(data) {
         //console.log(data);
          if(data != ''){
            pk = data[0]
            geolocalizacion = data[1];
            //console.log(geolocalizacion);
            arrpk = pk.split(",")
            //console.log(arrpk[4]);
            arrPkgu = arrpk[4].split(":");

            geoFin = geolocalizacion
            pkFin = arrPkgu[1].replace(/\"/g, '');
           //console.log(geoFin +", " + pkFin + ", " + tiempo)
          }
          var botonesInOut = $("#zonaInOut").children()
          for (i = 0; i< botonesInOut.length; i++){
            var idBoton = botonesInOut[i].id;
            var idTagAbsoluto = $('#'+ idBoton).val()
           //console.log(idTagAbsoluto)
            for (j = 0; j< estudio.length; j++){
             //console.log(idTagAbsoluto + "==>" + estudio[j].idAbsoluta)
              if(parseInt(estudio[j].idAbsoluta,10) == parseInt(idTagAbsoluto, 10)){
               //console.log(geoFin +", " + pkFin + ", " + tiempo)
               //console.log(j)
                estudio[j].tiempoFin = tiempo
                estudio[j].tiempomilisFin = tiempo
                estudio[j].geoFin = geoFin
                estudio[j].pkFin = pkFin
                $("#boton-fav-"+estudio[j].idboton).removeClass("lineas-diagonales-R");
                //$("#boton--"+estudio[j].idboton).removeClass("lineas-diagonales-R");
                $("#"+estudio[j].idbotonFam).removeClass("lineas-diagonales-R");
                //$("#"+estudio[j].idboton).removeClass("lineas-diagonales-R");
              }
            }





          }
          $("#zonaInOut").html("")


        }

      });


    }
    localStorage.setItem("estudio", JSON.stringify(estudio));
    saveEstudio(false,true);
  }
function showWaitMouse(){
  //console.log('showWaitMouse() -----------------------------');
  $('body').css('cursor','wait');
  $('a').css('cursor','wait');
  $('i').css('cursor','wait');
}
function showNormalMouse(){
  //console.log('showNormalMouse() -----------------------------');
  $('body').css('cursor','inherit');
  $('a').css('cursor','inherit');
  $('i').css('cursor','inherit');
}
function redimensionar(){
  var botoneraDerecha = 0;
  if(!urlPagina.match(/scouting/)){
    if($('#botonesAtrib')[0].children.length != 0){
      var atributosBotoneras = $('#botonesAtrib')[0].children
      for(var i=0; i< atributosBotoneras.length; i++){
        if(atributosBotoneras[i].children.length != 0){
          botoneraDerecha = botoneraDerecha + atributosBotoneras[i].children.length
         //console.log("botoneraDerecha: " + botoneraDerecha)
        }
      }
    }
  }
  if(urlPagina.match(/estudio/)){
    if($('#botoneraAtributosIzquierda').children().length == 0){
        $('#botoneraAtributosIzquierda').hide();
        $('#botoneraAtributosDerecha').width('55%');
        $('#botoneraAtributosGenerales').width('44%');
      }else{
        $('#botoneraAtributosIzquierda').show();
      }
      if(botoneraDerecha == 0){
        $('#botoneraAtributosDerecha').hide();
        $('#botoneraAtributosIzquierda').width('55%');
        $('#botoneraAtributosGenerales').width('44%');
      }else{
        $('#botoneraAtributosDerecha').show();
      }
      if($('#botoneraAtributosGenerales').children().length == 0){
        $('#botoneraAtributosGenerales').hide();
        $('#botoneraAtributosDerecha').width('55%');
        $('#botoneraAtributosIzquierda').width('44%');
      }else{
        $('#botoneraAtributosGenerales').show();
      }
      if($('#botoneraAtributosGenerales').children().length == 0 && botoneraDerecha == 0){
        $('#botoneraAtributosIzquierda').width('98%');
      }
      if($('#botoneraAtributosIzquierda').children().length == 0 && botoneraDerecha == 0){
        $('#botoneraAtributosGenerales').width('98%');
      }
      if($('#botoneraAtributosIzquierda').children().length == 0 && $('#botoneraAtributosGenerales').children().length == 0){
        $('#botoneraAtributosDerecha').width('98%');
      }
  }
}

function fancyTimeFormat(time, full){
  if(time > 0){
    var hours = Math.floor(time / 3600 );
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = Math.floor(time % 60);

    //Anteponiendo un 0 a las horas si son menos de 10
    hours = hours < 10 ? '0' + hours : hours;
    //Anteponiendo un 0 a los minutos si son menos de 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    //Anteponiendo un 0 a los segundos si son menos de 10
    seconds = seconds < 10 ? '0' + seconds : seconds;

    result = (full) ? hours + ":" + minutes + ":" + seconds : hours == '00' ? minutes + ":" + seconds : minutes == '00' ? seconds : hours + ":" + minutes + ":" + seconds;

  }else{
    var result = "00:00:00";
  }

  return result;
}

function gestionColaFrames() {
    llamandoGestionColaFrames = true;
    if(!guardando) {

      $.ajax({
        cache: false,
        type: 'POST',
        url: '/Frame.getFramesUpdated',
        data: {
          'imagenes': colaFrames.toString()
        },
        success: function(res) {
          var refrescarTagsImg = false;
          if(!guardando) {
            var itemsDel = [];
            for(var it = 0; it < res.length; it++) {
              if(res[it].calculada == 'S') {
                var ind = colaFrames.indexOf(res[it].imagen);
                var frameidIma = colaIDFrames[ind];
                var imagenAMostrar = res[it].imagen;
                var imagenABuscar = imagenAMostrar.replace('-1.jpeg','-xxxx0.jpeg');
                if($('#frame'+frameidIma).attr('src') == imagenABuscar) {
                  $('#frame'+frameidIma).attr('src',imagenAMostrar);
                  estudio[frameidIma].imagen = imagenAMostrar;
                  estudio[frameidIma].imagenframe = imagenAMostrar;
                  localStorage.setItem("estudio", JSON.stringify(estudio));
                  itemsDel.push(it);
                  refrescarTagsImg = true;
                } else {
                  $('#divClips').find('img').each(function( index ) {
                    if($( this ).attr('src') == imagenABuscar) {
                      var idFrameToUpdt = $( this ).attr('id').replace('frame','');
                      $( this ).attr('src',imagenAMostrar);
                      estudio[idFrameToUpdt].imagen = imagenAMostrar;
                      estudio[idFrameToUpdt].imagenframe = imagenAMostrar;
                      localStorage.setItem("estudio", JSON.stringify(estudio));
                      itemsDel.push(it);
                      refrescarTagsImg = true;
                    }
                  });
                }


              }
            }
            if(refrescarTagsImg) {
              for(var ite = 0; ite < itemsDel.length; ite++) {
                colaFrames.splice(ite, 1);
                colaIDFrames.splice(ite, 1);
              }
              if(colaFrames.length == 0) {
                setFramesPendientes('N');
              }
              llamandoGestionColaFrames = false;
              saveEstudio(false,true);
            } else if(colaFrames.length > 0) {
              llamandoGestionColaFrames = false;
              setTimeout(function(){ gestionColaFrames(); }, 1000);
            }
          } else {
            llamandoGestionColaFrames = false;
            setTimeout(function(){ gestionColaFrames(); }, 1000);
          }
        }
      });
    } else {
      llamandoGestionColaFrames = false;
      setTimeout(function(){ gestionColaFrames(); }, 1000);
    }
}

function setFramesPendientes(estado) {
  var tipoServicio = $('#tipoServicio').val();
  $.ajax({
    cache: false,
    type: 'POST',
    url: '/Plantillas.setEstadoFrames',
    data: {
      'idEstudio': idEstudio,
      'estado': estado,
      'tipoServicio': tipoServicio
    },
    success: function(res) {

    }
  });
}
function cerrar() {
  if (confirm("Seguro que quieres salir?")) {
    window.open('','_parent','');
    window.close();
  }
}

function crearSlideDibujos() {
  canvasarr.map((canvas,i) => {
    $('#slide-dibujos').append('<div class="slides-paints fade-slide" data-id="'+i+'">\
                                  <div class="numbertext">'+(parseInt(i) + 1)+' / '+ canvasarr.length +'</div>\
                                    <img src="'+canvas.imagen+'" style="width:100%">\
                                  <div class="text">'+canvas.boton+'</div>\
                                </div>');
  });
  $('#slide-dibujos').append('<a class="prev" onclick="plusSlides(-1)">&#10094;</a>\
                              <a class="next" onclick="plusSlides(1)">&#10095;</a>');

  showSlides(slideIndex);

}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides-paints");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  let idDibujoActivo = n-1;
  resaltar(0, idDibujoActivo);

  /*var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";*/
} 
