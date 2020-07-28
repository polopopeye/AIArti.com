document.write(maincode);

var maincode='';
// <!-- INICIO BODY: DENTRO DE PAGINA BLACKBOARDV1 -->
//
// <body>
<div id="blackboardpage" style="">

  <div class="modal fade modal-sm23" id="fondo" tabindex="-1" role="dialog" >
    <div class="modal-dialog modal-sm " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cambiar Fondo: Fútbol</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <select id="fondoChangeInput" class="custom-select custom-select-lg  form-control-lg">
            <option  value="futbol1">Futbol1</option>
            <option  value="futbol2">Futbol2</option>
            <option  value="basket1">Basket1</option>
          </select>
          <button id="fondoChangeSend" type="button"   class="btn btn-lg btn-primary btnPrincipal" data-dismiss="modal" aria-label="Close">
            CAMBIAR CAMPO
          </button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade  modal-sm23" id="crear" tabindex="-1" role="dialog" >
    <!-- <div class="modal-dialog modal-sm" role="document"> -->
    <div class="modal-dialog modal-lg" role="document" style="margin-top:10%;">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Galería de materiales</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="    margin-right: 0.5em;
    margin-top: 0.25em;
    border-style: solid;
    border-color: black;
    border-radius: 0.5em;
    padding: 0.25em;
    border-width: 0.15em;">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">

          <input placeholder="Buscar..."  oninput="document.getElementById('box').value=document.getElementById('buscadorVisual').value;buscando1();" id="buscadorVisual" class="form-control" type="text" style="font-size: 2.5em;"/>
          <input style="display:none;"  oninput="buscando1();" class="form-control" id="box" type="text" />
          <i id="infobutton1" style="display:none;padding:0.5em;margin-top: -2.33em;
  float: right;"  onclick="getAlert()" class="fas fa-2x fa-info-circle"></i>
          <div class="container-fluid">
            <div id="getAlert1" class="row alert alert-warning alert-dismissible fade show" role="alert">
              <div class="col-2x">
                <i class="fas fa-2x fa-info-circle"></i>

              </div>
              <div class="col">
                <strong>Para añadir el modelo al campo</strong>  haz click en la posición donde quieras añadirlo
                  cuantas veces quieras, cuando termines haz click en el botón de <strong>Terminar</strong>
              </div>
<div class="col-2x">
  <button type="button" class="close" onclick="hideAlert()">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
            </div>
          </div>



          <div class="container-fluid" style="text-align:center;">
            <button onclick='document.getElementById("box").value="Jugadores";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Jugadores</button>
            <button onclick='document.getElementById("box").value="Flechas";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Flechas</button>
            <button onclick='document.getElementById("box").value="Lineas";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Lineas</button>
            <!-- <button onclick='document.getElementById("box").value="Areas";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Áreas</button> -->
            <button onclick='document.getElementById("box").value="Conos";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Conos</button>
            <button onclick='document.getElementById("box").value="Balones";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Balones</button>
            <button onclick='document.getElementById("box").value="Barreras";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Barreras</button>
            <button onclick='document.getElementById("box").value="Postes";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Postes</button>
            <button onclick='document.getElementById("box").value="Vallas";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Vallas</button>
            <button onclick='document.getElementById("box").value="Porterias";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Porterias</button>
            <button onclick='document.getElementById("box").value="Otros";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Otros</button>
            <button onclick='document.getElementById("box").value=" ";buscando1();' class="btn-sm mx-auto " style="font-size:14px;" type="button" name="button">Todos</button>
          </div>

<div class="container-fluid mx-auto" style="padding-left:2em;">
  <div class="connect-cat">
    <div onclick="boxOverRay('Soccernone');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/player.png" alt="">
<div>
      </div>
    </div>
    <span class="name">Jugador 1</span>
    <p class="category">Player Jugadores </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('Soccernone2');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/player2.png" alt="">
<div>
      </div>
    </div>
    <span class="name">Jugador Básico</span>
    <p class="category">Player Jugadores </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('fichajugador1');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/fichajugador1.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Jugador Ficha 1</span>
    <p class="category">Objeto Jugadores </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('fichajugador2');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/fichajugador2.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Jugador Ficha 2</span>
    <p class="category">Objeto Jugadores </p>
  </div>
<!-- FLECHAS -->
  <div class="connect-cat">
    <div id="flecha1Button" onclick='startlinea("none","simple","none",0.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/NoneSimpleNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Linea</span>
    <p class="category">Objeto Lineas</p>
  </div>
  <div class="connect-cat">

    <div id="flecha1Button" onclick='startlinea("arrow","simple","none",0.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ArrowSimpleNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Flecha Simple 1</span>
    <p class="category">Objeto Flechas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("arrow","simple","arrow",0.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ArrowSimpleArrow.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Flecha Simple 2</span>
    <p class="category">Objeto Flechas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("arrow","double","none",1.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ArrowSimpleDoubleNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Flecha Doble 1</span>
    <p class="category">Objeto Flechas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("arrow","double","arrow",1.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ArrowSimpleDoubleArrow.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Flecha Doble 2</span>
    <p class="category">Objeto Flechas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("arrow","singleDotted","none",0.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ArrowSimgleDottedNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Flecha Punteado 1</span>
    <p class="category">Objeto Flechas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("arrow","singleDotted","arrow",0.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ArrowSimgleDottedArrow.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Flecha Punteado 2</span>
    <p class="category">Objeto Flechas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("arrow","doubleDotted","none",1.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ArrowDoubleDottedNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Flecha Doble Punteado 1</span>
    <p class="category">Objeto Flechas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("arrow","doubleDotted","arrow",1.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ArrowDoubleDottedArrow.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Flecha Doble Punteado 2</span>
    <p class="category">Objeto Flechas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("none","stairs","none",3);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/NoneStairsNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Linea Escaleras</span>
    <p class="category">Objeto  Lineas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("none","circle","none",2);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/NoneCircleNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Linea Circulos</span>
    <p class="category">Objeto  Lineas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("none","double","none",1.7);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/NoneSimpleDoubleNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Linea Doble</span>
    <p class="category">Objeto  Lineas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("none","singleDotted","none",0.5);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/NoneSimgleDottedNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Linea Punteada</span>
    <p class="category">Objeto  Lineas </p>
  </div>
  <div class="connect-cat">
    <div onclick='startlinea("none","doubleDotted","none",1.7);'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/NoneDoubleDottedNone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Linea Doble Punteada</span>
    <p class="category">Objeto  Lineas </p>
  </div>
<!-- CONOS -->
  <div class="connect-cat">
    <div onclick="boxOverRay('cone');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/cone.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Cono 1</span>
    <p class="category">Objeto Conos </p>
  </div>


  <div class="connect-cat">
    <div onclick="boxOverRay('cone2');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/cone2.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Cono 2</span>
    <p class="category">Objeto Conos</p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('cone3');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/cone3.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Cono 3</span>
    <p class="category">Objeto Conos</p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('cone4');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/cone4.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Cono 4 Largo</span>
    <p class="category">Objeto Conos</p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('conesGroup');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/conesGroup.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Grupo de conos</span>
    <p class="category">Objeto grupo </p>
  </div>
  <!-- BALONES -->
  <div class="connect-cat">
    <div onclick="boxOverRay('ball');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/ball.png" alt="">
<div>
      </div>
    </div>
    <span class="name">Balón de Futbol</span>
    <p class="category">Objeto Balones </p>
  </div>


  <div class="connect-cat">
    <div onclick="boxOverRay('pivot1soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/pivot1soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Poste de velocidad 1</span>
    <p class="category">Objeto Postes</p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('pivot2soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/pivot2soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Poste de velocidad 2</span>
    <p class="category">Objeto Postes</p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('pivot3soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/pivot3soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Poste de velocidad 3</span>
    <p class="category">Objeto Postes</p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('pivot4soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/pivot4soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Poste de velocidad 4</span>
    <p class="category">Objeto Postes </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('barrierPlayer1soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrierPlayer1soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Barrera Dummy 1</span>
    <p class="category">Objeto Barreras </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('barrierPlayer2soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrierPlayer2soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Barrera Dummy  2</span>
    <p class="category">Objeto Barreras </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('barrierPlayer4soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrierPlayer4soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Barrera Dummy 3</span>
    <p class="category">Objeto Barreras </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('barrierPlayer3soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrierPlayer3soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Barrera 5 Dummies</span>
    <p class="category">Objeto Barreras </p>
  </div>

  <div class="connect-cat">
    <div onclick="boxOverRay('barrier1soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrier1soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Valla de Velocidad 1</span>
    <p class="category">Objeto Vallas </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('barrier2soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrier2soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Valla de Velocidad 2</span>
    <p class="category">Objeto Vallas </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('barrier3soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrier3soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Valla de Velocidad 3</span>
    <p class="category">Objeto Vallas </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('barrier4soccer')" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrier4soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Valla de Velocidad 4</span>
    <p class="category">Objeto Vallas </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('barrier5soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrier5soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Valla de Velocidad 5</span>
    <p class="category">Objeto Vallas </p>
  </div>

  <div class="connect-cat">
    <div onclick="boxOverRay('barrier6soccer');" type="button"  class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
      <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/barrier6soccer.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Valla de Velocidad 6</span>
    <p class="category">Objeto Vallas </p>
  </div>


  <div class="connect-cat">
    <div onclick="boxOverRay('goalSoccer1');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/goal1.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Porteria de Futbol Simple</span>
    <p class="category">Objeto Porterias </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('goalSoccer2');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/goal2.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Porteria de Futbol 11</span>
    <p class="category">Objeto Porterias </p>
  </div>
  <div class="connect-cat">
    <div onclick="boxOverRay('goalSoccer3');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/goal3.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Porteria de Futbol Sala</span>
    <p class="category">Objeto Porterias </p>
  </div>

  <div class="connect-cat">
    <div onclick="boxOverRay('goalSoccerSmall1');" type="button"   class="createItem btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
    <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/goalsmall1.png" alt="">
      <div>
      </div>
    </div>
    <span class="name">Porteria pequeña</span>
    <p class="category">Objeto Porterias </p>
  </div>


              <div class="connect-cat">
                <div  type="button"   class="createBarrier btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#createBarrierModal">
                <img src="https://previews.123rf.com/images/aurielaki/aurielaki1606/aurielaki160600169/58887029-ilustraci%C3%B3n-del-jugador-de-f%C3%BAtbol-atleta-de-deportes-icono-set-3d-isom%C3%A9trica-del-equipo-de-f%C3%BAtbol-barrera-players.jpg" alt="">

                </div>
                <span class="name">Barrera de Dummies</span>
                <p class="category">Objeto Barreras </p>
              </div>


              <div class="connect-cat">
                <div  type="button"  onclick="createArea1();startArea3d1();" class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close" >
                <!-- <img src="https://previews.123rf.com/images/aurielaki/aurielaki1606/aurielaki160600169/58887029-ilustraci%C3%B3n-del-jugador-de-f%C3%BAtbol-atleta-de-deportes-icono-set-3d-isom%C3%A9trica-del-equipo-de-f%C3%BAtbol-barrera-players.jpg" alt=""> -->
  <i class="fas fa-vector-square fa-8x  iconMenuItem"></i>
                </div>
                <span class="name">Área 1</span>
                <p class="category">Objeto Areas Otros</p>
              </div>
              <div class="connect-cat">
                <div id="createItemInputDrawPlane"  type="button"  class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close" >
                <!-- <img src="https://previews.123rf.com/images/aurielaki/aurielaki1606/aurielaki160600169/58887029-ilustraci%C3%B3n-del-jugador-de-f%C3%BAtbol-atleta-de-deportes-icono-set-3d-isom%C3%A9trica-del-equipo-de-f%C3%BAtbol-barrera-players.jpg" alt=""> -->
              <!-- <i class="fas fa-vector-square fa-8x  iconMenuItem"></i> -->
                <i class="fas fa-pencil-alt fa-8x    iconMenuItem"></i>
                </div>
                <span class="name">Dibujo Libre</span>
                <p class="category">Objeto Otros</p>
              </div>
              <div class="connect-cat">
                <div type="button" data-target="#texto2d2" data-toggle="modal" class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close" >
                <!-- <img src="https://previews.123rf.com/images/aurielaki/aurielaki1606/aurielaki160600169/58887029-ilustraci%C3%B3n-del-jugador-de-f%C3%BAtbol-atleta-de-deportes-icono-set-3d-isom%C3%A9trica-del-equipo-de-f%C3%BAtbol-barrera-players.jpg" alt=""> -->
              <!-- <i class="fas fa-vector-square fa-8x  iconMenuItem"></i> -->
                <!-- <i class="fas fa-pencil-alt fa-8x    iconMenuItem"></i> -->
                <i class="fas fa-font fa-8x iconMenuItem"></i>

                </div>
                <span class="name">Crear Texto</span>
                <p class="category">Objeto Otros</p>
              </div>
              <!-- <div class="connect-cat">
                <button onclick='startlinea("circle","simple","none",1)'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
                <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/flecha2.png" alt="">
                  <div>
                    <span class="name">Flecha 3</span>
                    <p class="category">Objeto Flechas </p>
                  </div>
                </div>
              </div>
              <div class="connect-cat">
                <button onclick='startlinea("circle","simple","circle",1)'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
                <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/flecha2.png" alt="">
                  <div>
                    <span class="name">Flecha 4</span>
                    <p class="category">Objeto Flechas </p>
                  </div>
                </button>
              </div>
              <div class="connect-cat">
                <button onclick='startlinea("circle","simple","arrow",1)'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
                <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/flecha2.png" alt="">
                  <div>
                    <span class="name">Flecha 4</span>
                    <p class="category">Objeto Flechas </p>
                  </div>
                </button>
              </div>
              <div class="connect-cat">
                <button onclick='startlinea("arrow","double","none",1)'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
                <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/flecha2.png" alt="">
                  <div>
                    <span class="name">Flecha 4</span>
                    <p class="category">Objeto Flechas </p>
                  </div>
                </button>
              </div>
              <div class="connect-cat">
                <button onclick='startlinea("arrow","double","arrow",1)'  type="button"   class="btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close">
                <img src="/imgfiles/blackboard3D/models/lastPreviewsModels/flecha2.png" alt="">
                  <div>
                    <span class="name">Flecha 4</span>
                    <p class="category">Objeto Flechas </p>
                  </div>
                </button>
              </div> -->
</div>


          <button style="display:none;" type="button"   class="createBarrier btn btn-lg btn-secondary btnPrincipal" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#createBarrierModal2">
            Crear Barrera Objetos Planos
          </button>
          <!-- <input  data-dismiss="modal"data-target="#createAreaModal" type="button" class="btn btn-lg btn-primary btnPrincipal" data-toggle="modal" value="Crear Área" /> -->

              <!-- <input  data-dismiss="modal" id="createItemInputLine3D1" type="button" class="btn btn-lg btn-primary btnPrincipal" value="Crear Linea" data-toggle="modal" data-target="#createItemInputLineModal"/> -->
              <!-- <input  data-dismiss="modal" id="createItemInputCurvedLine" type="button" class="btn btn-lg btn-primary btnPrincipal" value="Crear Linea Curva (OLD)"/> -->
              <!-- <input  data-dismiss="modal" id="createItemInputDrawPlane" type="button" class="btn btn-lg btn-primary btnPrincipal" value="Dibujar Linea"/> -->


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary container-fluid" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>

<!-- EXIT MODAL ALERT -->
<div class="modal fade show modal-sm23 " id="exitAlerta" tabindex="-1" role="dialog" >
  <!-- <div class="modal-dialog modal-sm" role="document"> -->
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="margin-top:10%;">
    <div class="modal-content bg-danger" >
      <div class="modal-header">
        <h5 class="modal-title">¿Está seguro de salir?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="    margin-right: 0.5em;
  margin-top: 0.25em;
  border-style: solid;
  border-color: black;
  border-radius: 0.5em;
  padding: 0.25em;
  border-width: 0.15em;">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-body">
<p class="mx-auto container-fluid">Asegúrese de guardar la tarea antes de salir. </p>
<div class="mx-auto">
  <button onclick="saliryaguardado();" class="container-fluid btn btn-lg" type="button" name="button">SI, SALIR</button>
</div>
</div>

    </div>
  </div>
</div>
<!-- MODAL INFO -->

  <!-- INICIO Modal -->
  <div class="modal fade show " id="texto2d" tabindex="-1" role="dialog" >
    <div class="modal-dialog  modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header" style="display:none;">
          <h2 class="modal-title">Nombrar Objeto</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="btn-toolbar">
            <div class="form-group">
              <label>Texto</label>
              <input id="createText2DInputString" type="text" class="form-control-lg" placeholder="Introduce un texto">
            </div>
            <div class="form-group" style="display:none;">
              <label >Tamaño</label>
              <input id="createText2DInputSize" value="1"type="range" max="6" min="0.5" step="0.5" class="form-control-lg custom-range btnSlider" placeholder="Tamaño del texto">
            </div>
<select id="createText2DInpuMode" class="custom-select form-control-lg" multiple>
  <option selected value="2DCamFixObj">Nombrar Objeto</option>
</select>
            <div class="form-group">
              <label >Color</label>
              <input id="createText2DInputColor" value="blue" type="color" class="form-control-lg" placeholder="Color del Texto">
            </div>
            <button id="createText2DBotton" type="button" name="button" class="btn-Tercero btn btn-lg btn-primary btn-block" data-dismiss="modal">
            Añadir Texto al Objeto
            </button>
            <button id="createText2DBotton4" onclick="createAreaText2('horizontal');" type="button" name="button" class="btn-Tercero btn btn-lg btn-primary btn-block" data-dismiss="modal">
            Añadir Texto Horizontal
            </button>
            <button  id="createText2DBotton3" onclick="createAreaText2('vertical');" type="button" name="button" class="btn-Tercero btn btn-lg btn-primary btn-block" data-dismiss="modal">
            Añadir Texto Vertical
            </button>
      </div>
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade show  modal-sm23" id="createBarrierModal" tabindex="-1" role="dialog" >
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Crear Barrera</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="btn-toolbar">
            <div class="form-group" style="display:none;">
              <label>Objeto</label>
              <select id="createBarrierOBJ" class="custom-select custom-select-lg  form-control-lg">
                <option selected  value="Soccernone">Jugador</option>
                <option  value="cone2">Cono</option>
                <option  value="ball">Balones de Futbol</option>
                <option  value="goalSoccer">Porterias de Futbol</option>
              </select>
            </div>
            <div class="form-group">
              <label >Numero de Objetos</label>
  <input id="createBarrierNumber" type="number" class="form-control-lg" >
              </div>
            <div class="form-group" style="display:none;">
              <label >Distancia</label>
              <input id="createBarrierDistance" value="4"type="range" max="8" min="0.5" step="0.5" class="form-control-lg custom-range btnSlider" placeholder="Tamaño del texto">
            </div>

            <button id="createBarrierSend" type="button" name="button" class="btn-Tercero btn btn-lg btn-primary btn-block" data-dismiss="modal">
            Crear Barrera
            </button>
      </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade show  modal-sm23" id="createBarrierModal2" tabindex="-1" role="dialog" >
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Crear Barrera 2</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="btn-toolbar">
            <div class="form-group">
              <label>Objeto</label>
              <select id="createBarrier2OBJ" class="custom-select custom-select-lg  form-control-lg">
                <option selected  value="circle">Circulos</option>
              </select>
            </div>
            <div class="form-group">
              <label >Numero de Objetos</label>
  <input id="createBarrier2Number" type="number" class="form-control-lg" >
              </div>
            <div class="form-group">
              <label >Distancia</label>
              <input id="createBarrier2Distance" value="6"type="range" max="15" min="0.5" step="0.5" class="form-control-lg custom-range btnSlider" placeholder="Tamaño del texto">
            </div>
            <div class="form-group">
              <label >Escala</label>
              <input id="createBarrier2Scale" value="5"type="range" max="15" min="1" step="0.5" class="form-control-lg custom-range btnSlider" placeholder="Escala">
            </div>

            <button id="createBarrier2Send" type="button" name="button" class="btn-Tercero btn btn-lg btn-primary btn-block" data-dismiss="modal">
            Crear Barrera 2
            </button>
      </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade show  modal-sm23" id="createAreaModal" tabindex="-1" role="dialog" >
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Crear Área</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="btn-toolbar form-control-lg">
            <div class="custom-control custom-checkbox mr-sm-2">
              <input checked type="checkbox" class="custom-control-input" id="fixedCheckArea">
              <label class="custom-control-label" for="fixedCheckArea">Fixed</label>
            </div>
            <div class="custom-control custom-checkbox mr-sm-2">
              <input checked  type="checkbox" class="custom-control-input" id="filledCheckArea">
              <label class="custom-control-label" for="filledCheckArea">Filled</label>
            </div>
  <div class="custom-control custom-checkbox mr-sm-2">
    <input checked  type="checkbox" class="custom-control-input" id="borderCheckArea">
    <label class="custom-control-label" for="borderCheckArea">Border</label>
  </div>
  <div class="form-group">
    <label >Color 1</label>
    <input id="createItemInputLineColor1Area" value="blue" type="color" class="form-control-lg" placeholder="Color del Texto">
  </div>
  <div class="form-group">
    <label >Color 2</label>
    <input id="createItemInputLineColor2Area" value="red" type="color" class="form-control-lg" placeholder="Color del Texto">
  </div>
  <div class="form-group">
    <label >Color 3</label>
    <input id="createItemInputLineColor3Area" value="black" type="color" class="form-control-lg" placeholder="Color del Texto">
  </div>

            <button id="createAreaSend" type="button" name="button" class="btn-Tercero btn btn-lg btn-primary btn-block" data-dismiss="modal">
            Añadir Area
            </button>

      </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade show  " id="texto2d2" tabindex="-1" role="dialog" >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Añadir Texto</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="btn-toolbar">
            <div class="form-group">
              <label>Texto</label>
              <input id="createText2DInputString2" type="text" class="form-control-lg" placeholder="Introduce un texto">
            </div>
            <div style="display:none;" class="form-group">
              <label >Tamaño</label>
              <input id="createText2DInputSize2" value="2"type="range" max="6" min="0.5" step="0.5" class="form-control-lg custom-range btnSlider" placeholder="Tamaño del texto">
            </div>
            <div style="display:none;" class="form-group">
              <label >Tipo de texto</label>

              <select id="createText2DInpuMode2" class="custom-select custom-select-lg  form-control-lg">
                <option selected  value="2DPlane">Plano</option>
                <option value="2DCamFix">Sigue la pantalla</option>
              </select>
            </div>
            <div class="form-group">
              <label >Color</label>
              <input id="createText2DInputColor2" value="blue" type="color" class="form-control-lg" placeholder="Color del Texto">
            </div>
            <button id="createText2DBotton2" type="button" name="button" class="btn-Tercero btn btn-lg btn-primary btn-block" data-dismiss="modal">
            Añadir Texto
            </button>
      </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal show  modal-sm23" id="createItemInputLineModal" tabindex="-1" role="dialog" >
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Crear Linea</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="btn-toolbar">
            <div class="form-group">
              <label>Tipo de Linea: Punto Inicial</label>
              <select id="createItemInputLineIniPoint" class="custom-select custom-select-lg  form-control-lg">
                <option selected  value="none">Ninguna</option>
                <option selected  value="arrow">Flecha</option>
                <option selected  value="circle">Circulo</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tipo de Linea: Punto Final</label>
              <select id="createItemInputLineEndPoint" class="custom-select custom-select-lg  form-control-lg">
                <option selected  value="none">Ninguna</option>
                <option selected  value="arrow">Flecha</option>
                <option selected  value="circle">Circulo</option>
              </select>
                          </div>
            <div class="form-group">
              <label>Tipo de Linea: Cuerpo</label>
              <select id="createItemInputLineBody" class="custom-select custom-select-lg  form-control-lg">
                <option selected  value="simple">Simple</option>
                <option selected  value="double">Doble</option>
                <option selected  value="singleDotted">Simple Dotted</option>
                <option selected  value="doubleDotted">Doble Dotted</option>
                <option selected  value="stairs">Escaleras</option>
                <option selected  value="circle">Circulos</option>

              </select>
                        </div>
                        <div class="form-group">
                          <label>Ancho de linea</label>
                          <input id="createItemInputLineWidthLine" value="0.5"type="range" max="3" min="0.1" step="0.01" class="form-control-lg custom-range btnSlider" placeholder="Ancho de la linea">
                                    </div>
                                    <div class="form-group">
                                      <label >Color</label>
                                      <input id="createItemInputLineColorLine" value="blue" type="color" class="form-control-lg" placeholder="Color de la flecha">
                                    </div>

            <button id="createItemInputLineSend" type="button" name="button" class="btn-Tercero btn btn-lg btn-primary btn-block" data-dismiss="modal">
            Crear Linea
            </button>
      </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FIN MODALS -->




  <!-- <script data-main="/imgfiles/blackboard3D/require.js" src="/imgfiles/blackboard3D/require.js"></script> -->
<!-- AXIOS JS API -->
  <script src="/imgfiles/blackboard3D/0apicall.js"></script>
  <script src="/imgfiles/blackboard3D/html2canvas.js"></script>
<script type="text/javascript" src="//wurfl.io/wurfl.js"></script>

  <!-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/simple-crypto-js@latest/dist/SimpleCrypto.min.js"></script>

<script module type="text/javascript">
  import axios from 'axios';
  import SimpleCrypto from "simple-crypto-js";
  import import html2canvas from 'html2canvas';
</script>
  <!-- Bootstrap, JS, y AwesomeFont -->
  <!-- <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script> -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script> -->
  <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> -->
  <!-- <script src="https://kit.fontawesome.com/f015c16f33.js" crossorigin="anonymous"></script> -->
  <!-- FIN Bootstrap, JS, AwesomeFont -->
  <!-- UndoManager-->


  <script src="/imgfiles/blackboard3D/undomanager.js"></script>
  <!-- TWEEN - Gestor de colas -->
  <script src="/imgfiles/blackboard3D/Tween.js"></script>
  <!-- SuperGif - Framework sencillo para tratar gifs -->
  <script src="/imgfiles/blackboard3D/SuperGif.js"></script>
  <!-- THREEJS - Framework3D -->
  <script src="/imgfiles/blackboard3D/three.js"></script>
  <!-- THREEJS - LIBRERIAS UTILIZADAS-->
  <script src="/imgfiles/blackboard3D/js/libs/stats.min.js"></script>
  <script src="/imgfiles/blackboard3D/three.module.js" type="module"></script>

  <script src="/imgfiles/blackboard3D/js/controls/OrbitControls.js"></script>
  <script src="/imgfiles/blackboard3D/js/controls/DragControls.js"></script>
  <script src="/imgfiles/blackboard3D/js/controls/TransformControls.js"></script>

  <!-- Librerias Interactivas de control -->
  <script src="/imgfiles/blackboard3D/js/interactive/SelectionBox.js"></script>
  <script src="/imgfiles/blackboard3D/js/interactive/SelectionHelper.js"></script>


  <!-- Final Librerias -->


  <script src="/imgfiles/blackboard3D/js/loaders/DDSLoader.js"></script>
  <script src="/imgfiles/blackboard3D/js/loaders/PLYLoader.js"></script>
  <script src="/imgfiles/blackboard3D/js/loaders/FBXLoader.js"></script>
  <script src="/imgfiles/blackboard3D/js/loaders/STLLoader.js"></script>
  <script src="/imgfiles/blackboard3D/js/loaders/OBJLoader.js"></script>
  <script src="/imgfiles/blackboard3D/js/loaders/MTLLoader.js"></script>
  <script src="/imgfiles/blackboard3D/js/loaders/GLTFLoader.js"></script>
  <script src="/imgfiles/blackboard3D/js/loaders/ColladaLoader.js"></script>


<!-- Librerias THREEJS PREPROCESAMIENTO -->
<script src="/imgfiles/blackboard3D/js/postprocessing/EffectComposer.js"></script>
<script src="/imgfiles/blackboard3D/js/postprocessing/RenderPass.js"></script>
<script src="/imgfiles/blackboard3D/js/postprocessing/ShaderPass.js"></script>
<script src="/imgfiles/blackboard3D/js/postprocessing/OutlinePass.js"></script>
<script src="/imgfiles/blackboard3D/js/shaders/FXAAShader.js"></script>


<!-- FINAL PREPROCESAMIENTO -->

  <script src="/imgfiles/blackboard3D/1mainConfig.js"></script> <!-- CONFIGURACIONES -->
  <script src="/imgfiles/blackboard3D/2camera.js"></script> <!-- CAMARA -->
  <script src="/imgfiles/blackboard3D/3background.js"></script> <!-- FONDOS -->
  <script src="/imgfiles/blackboard3D/4functions.js"></script> <!-- FUNCIONES -->
  <script src="/imgfiles/blackboard3D/5campos.js"></script> <!-- ESCENARIOS -->
  <script src="/imgfiles/blackboard3D/6ObjectsUsed.js"></script> <!-- OBJETOS UTILIZADOS -->
  <script src="/imgfiles/blackboard3D/7blackboard3d.js"></script><!-- ARCHIVO MAIN -->








<!-- MODO EDICION -->
<div id="container-editmode" class="container container-fluid d-print-none  bg-transparent" >
<!-- <center><h1>BlackBoard 3D</h1></center> -->

<form>
<div class="row">
  <div class="col">
    <h6 style="position: fixed;top: 20px;">Modo edición</h6>
    <!-- Button trigger modal -->

      <!-- <div class="row">
        <div class="col"> -->
        <button id="controls3ModeMove2" type="button" class="btn btn-primary btn-lg btn-block"  data-toggle="modal" data-target="#color-picker">
    Cambiar de color
        </button>
          <button id="controls3ModeMove" type="button" class="btn btn-primary btn-lg btn-block">
         Mover
          </button>
        <!-- </div> -->
      <!-- <div class="col"> -->
        <button id="controls3ModeRotate" type="button" class="btn btn-primary btn-lg btn-block">
        Rotar
        </button>
      <!-- </div> -->
      <!-- <br>
      <div class="col" > -->
        <button id="controls3ModeScale" type="button" class="btn btn-primary btn-lg btn-block">
        Transformar/Cambiar de tamaño
        </button>
      <!-- </div> -->
      <!-- </div> -->




    <button id="controls3deactivate" type="button" class="btn btn-primary btn-danger  btn-lg btn-block">
    Salir modo edición
    </button>
  </div>
</div>
</form>
</div>
<!-- FIN MODO EDICION -->




<!-- NUEVA INTERFAZ -->





<!-- FIN NOTIFICACIONES -->

<!-- INICIO MENU TOP ATACH TO ROTATION TOUCH -->
<div  class="container-fluid marpadInterfaz topInterfaz" style="z-index:1;display:block;">




  <div id="containerTOP" class="row justify-content-md-center marpadInterfaz">
    <div class="col-md-auto marpadInterfaz" id="controls4CamMoveContainer">
      <!-- <h3 class="titleHeadMenu">Opciones de cámara</h3> -->



      <div  id="container-editmode2" class="row marpadInterfaz" style="flex-wrap: nowrap;display:flex;" >


        <div id="editmodeName" class="col marpadInterfaz">
        <!-- <button  type="button" name="button" class="btn btn-primary   container-fluid btnTopAttached">
          <i class="fas fa-undo  iconMenuItem"></i>
        </button> -->


        <button onclick='hidebuttonArea("normal");'  class="btn btn-primary   container-fluid btnTopAttached" data-dismiss="modal" data-target="#texto2d" data-toggle="modal">
          <i class="fas fa-file-signature"></i><br>
          <span class="nav-label">Nombrar </span>
        </button>
        </div>


        <div id="editmodeAreaName2" class="col marpadInterfaz">
        <button   onclick='hidebuttonArea("horizontal");' class="btn btn-primary   container-fluid btnTopAttached" data-dismiss="modal"data-target="#texto2d" data-toggle="modal">
          <i class="fas fa-file-signature"></i><br>
          <span class="nav-label">Horizontal</span>
        </button>
        </div>
        <div id="editmodeAreaName1" class="col marpadInterfaz">
        <button   onclick='hidebuttonArea("vertical");' class="btn btn-primary   container-fluid btnTopAttached" data-dismiss="modal" data-target="#texto2d" data-toggle="modal">
          <i class="fas fa-file-signature"></i><br>
          <span class="nav-label">Vertical</span>
        </button>
        </div>
        <div id="editmodeSize" class="col marpadInterfaz">
          <button class="btn btn-primary   container-fluid btnTopAttached" onclick="editarObjetoScale();" style="color:white;">

            <i class="fas fa-expand-alt"></i><br>
            <span class="nav-label">Tamaño</span>
          </button>
        </div>

    <!-- AQUI VIENEN LAS OPCIONES INCLUIDAS EN LOS MODELS -->
    <!-- <button data-toggle="collapse" href="#controls4scalemodecontainer" style="color:white;"> -->


    <!-- <button data-toggle="collapse" href="#controls4rotatemodecontainer" style="color:white;"> -->
    <div id="editmodeRotate" class="col marpadInterfaz">

    <button class="btn btn-primary   container-fluid btnTopAttached" onclick="editarObjetoRotate();" style="color:white;">
      <i class="fas fa-sync-alt"></i><br>
      <span class="nav-label">Rotar </span>
    </button>
  </div>
  <div id="editmodeColor" class="col marpadInterfaz">

    <button class="btn btn-primary   container-fluid btnTopAttached" id="containerColorInput4" style="color:white;">
      <input style="display:none;" id="controls4modeColorPicker" oninput="clickInputColor4();" class="btnColor" type="color" name="color2" value="#3355cc">
      <i class="fas fa-fill-drip"></i><br>
      <span class="nav-label">Pintar Objeto</span>
    </button>
  </div>

    <script>
    // On mouse-over, execute myFunction
    function  clickInputColor4(){
      // document.getElementById("controls4modeColorPicker").click(); // Click on the checkbox
    controls3ModeColor(document.getElementById("controls4modeColorPicker").value);
    }
    </script>
    <div id="editmodePicture" class="col marpadInterfaz">

    <button class="btn btn-primary   container-fluid btnTopAttached" onclick="clickInputImage4()">
      <input style="display:none;" id="profileTxtObjInput" type="file" class="form-control-file btnSlider">
      <i class="fas fa-portrait"></i><br>
      <span class="nav-label">Añadir Imagen</span>
    </button>
  </div>

    <script>
    // On mouse-over, execute myFunction
    function clickInputImage4() {
      document.getElementById("profileTxtObjInput").click(); // Click on the checkbox
    }
    </script>
    <!-- FIN MODELS NUEVOS -->

        <button  class="btn btn-primary   container-fluid btnTopAttached" style="display:none;"data-toggle="collapse" href="#controls4editmodecontainer" >
           <i class="fas fa-edit"></i><br>
          <span class="nav-label">Otras Opciones</span>
        </button>
        <div class="col marpadInterfaz">

        <button  id="controls3ModeDelete"  class="btn btn-danger   container-fluid btnTopAttached">
          <i class="fas fa-trash-alt"></i><br>
          <span class="nav-label">Borrar </span>
        </button>
      </div>

</div>


      <!-- <ul class="nav in"> -->

        <!-- <li id="menulateral1" class="menu bg-info"> -->

        <!-- </li> -->

      <!-- </ul> -->





<!-- BARRA TOP -->

      <div id="controls4ContainerBarDIV" class="row marpadInterfaz" style="flex-wrap: nowrap;display:flex;" >





<!-- <div class="btn-group btn-groupMenu" role="group"> -->
  <!-- undo -->
  <div class="col marpadInterfaz" style="display:none;">
  <button  type="button" name="button" class="btn btn-primary   container-fluid btnTopAttached">
    <i class="fas fa-undo  iconMenuItem"></i>
  </button>
  </div>
  <!-- redo -->
  <div class="col marpadInterfaz" style="display:none;">
  <button  type="button" name="button" class="btn btn-primary container-fluid btnTopAttached">
    <i style="transform: rotateY(180deg);" class="fas fa-undo  iconMenuItem"></i>
  </button>
  </div>
  <!-- </div> -->



<div class="row container-fluid containerRowTop" style="display:none;">
    <div class="row titleGroupButton" >
      <p>Guardar</p>
    </div>

    <div class="row containerNoWrap" >
      <!-- Guardar Como Nuevo -->
          <div class="col marpadInterfaz">
          <button onclick="location.href='/portal/';" type="button" name="button" class="btn  btn-danger container-fluid btnTopAttached">
            <i class="fas fa-sign-out-alt iconMenuItem"></i>
          </button>
        </div>
      <!-- Guardar Como Nuevo -->
          <div class="col marpadInterfaz">
          <button  data-toggle="modal" data-target="#saveBlackboard" type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached">
            <i class="fas fa-save  iconMenuItem"></i>
          </button>
        </div>
      </div>
</div>

  <div class="row container-fluid containerRowTop">
      <div class="row titleGroupButton"style="border-style: solid;
border-color: white;
border-left-width: 2px;
border-right-width: 1px;
border-top-width: 0;
border-bottom-width: 0;" >
        <p>Cámara:</p>
      </div>
      <div class="row containerNoWrap">
        <!-- 2d -->
            <div class="col marpadInterfaz" data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();'  template='<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>' title="<em>  Cámara en visión <b>2D</b></em>">
            <button id="controls4Cam2D"  type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
    border-color: white;
    border-left-width: 2px;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;">
              <i class="fas fa-square  iconMenuItem" ></i>
            </button>
          </div>
        <!-- Lateral -->
        <div class="col marpadInterfaz" data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em>Cámara en visión <b>3D</b></em>">
        <button id="controls4CamLR" type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 1px;
border-top-width: 0;
border-bottom-width: 0;">
          <i class="fas fa-cube  iconMenuItem"></i>
        </button>
        </div>
    <!-- Libre -->
        <div class="col marpadInterfaz" style="display:none;">
        <button   id="controls4CamFree" type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 1px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
          <i class="fas fa-dice-d6  iconMenuItem"></i>
        </button>
        </div>
      </div>
  </div>




<div class="row container-fluid containerRowTop">
  <div class="row titleGroupButton" style="border-style: solid;
border-color: white;
border-left-width: 1px;
border-right-width: 1px;
border-top-width: 0;
border-bottom-width: 0;">
    <p>Opciones de Cámara:</p>
  </div>
<div class="row containerNoWrap">
  <!-- FIJAR CAMARA -->
  <div class="col marpadInterfaz" data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em>Modo <b>Fijo</b></em>">
  <button data-dismiss="modal" id="controls4CamFix"  type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 1px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
  <i class="fas fa-lock "></i>
  </button>
  </div>
  <!-- Mover CAMARA -->
  <div class="col marpadInterfaz"  data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em>Modo <b>Movimiento</b></em>">
  <button  data-dismiss="modal" id="controls4CamMove"  type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
  <i class="fas fa-expand-arrows-alt  iconMenuItem"></i>
  </button>
  </div>
  <!-- rotar CAMARA -->
  <div class="col marpadInterfaz"  data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em>Modo <b>Rotación</b></em>">
  <button data-dismiss="modal" id="controls4CamRotate" type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
<i class="fas fa-sync-alt  iconMenuItem"></i>
  </button>
  </div>
  <!-- Punto Inicial CAMARA -->
  <div class="col marpadInterfaz"  data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();'  title="<em>Cámara en <b>Posición Inicial</b></em>">
  <button onclick="cameraReset(true);" data-dismiss="modal" type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 1px;
border-top-width: 0;
border-bottom-width: 0;">
<i class="fas fa-trash-restore-alt"></i>
  </button>
  </div>

  <!-- <div class="container">
    <h3>Tooltip Example</h3>
    <p>Tooltips are not CSS-only plugins, and must therefore be initialized with jQuery: select the specified element and call the tooltip() method.</p>
    <a href="#"  >Hover over me</a>
  </div> -->


  </div>

</div>




  <div class="row container-fluid containerRowTop" >
    <div class="row titleGroupButton" style="border-style: solid;
border-color: white;
border-left-width: 1px;
border-right-width: 2px;
border-top-width: 0;
border-bottom-width: 0;">

        <p>Animación:</p>
      </div>

      <div class="row containerNoWrap">
        <!--FIRST create Scene -->
        <div class="col marpadInterfaz"  data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em> <b>Crear Escenas de movimiento </b> Convierte una tarea estatica a dinámica</em>">
        <button id="FirstScenaCreate" onclick="firstScenaCreate();" type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
    border-color: white;
    border-left-width: 1px;
    border-right-width: 0px;
    border-top-width: 0;
    border-bottom-width: 0;
      width:75px;">

        <i class="fas fa-video"></i>
        </button>
        </div>
        <!-- create Scene -->
        <div style="display:none;" id="movement1" class="col marpadInterfaz"  data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em> <b>Crear nueva escena </b>de movimiento</em>">
        <button id="scenacreate3"  type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 1px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
          <i class="fas fa-plus  iconMenuItem"></i>
        </button>
        </div>
        <!-- delete -->
        <div style="display:none;" id="movement2" class="col marpadInterfaz"  data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em> <b>Eliminar  </b>escena actual</em>">
        <button  id="deleteSceneButtonInput" type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
        <i class="fas fa-trash-alt  iconMenuItem"></i>
        </button>
        </div>

        <!-- arrow left -->
        <div style="display:none;" id="movement3" class="col marpadInterfaz"  data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em>Ir a la escena <b> anterior</b></em>">
        <button id="undoSceneButtonInput"   type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
        <i class="fas fa-arrow-left  iconMenuItem"></i>
        </button>
        </div>
        <!-- Sort -->
        <div style="display:none;" id="movement4" class="col marpadInterfaz" data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em>Ir a una  <b>escena específica</b></em>">
        <button  type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
        <span id="scenaNumberSpan">0</span><i class="fas fa-sort  iconMenuItem"></i>
        </button>
        </div>
        <!-- arrow right -->
        <div style="display:none;" id="movement5" class="col marpadInterfaz" data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover " onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em>Ir a la escena <b> siguiente</b></em>">
        <button  id="redoSceneButtonInput" type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
        <i class="fas fa-arrow-right  iconMenuItem"></i>
        </button>
        </div>

        <!-- play -->
        <div style="display:none;" id="movement6" class="col marpadInterfaz" data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover"  onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em> <b>Reproducir</b> todas las escenas</em>">
        <button id="scenaplaytween"  type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 0px;
border-top-width: 0;
border-bottom-width: 0;">
        <i class="fas fa-play  iconMenuItem"></i>
        </button>
        </div>
        <div style="display:none;" id="movement7" class="col marpadInterfaz" data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover"  onmouseover="showtooltip();"  onclick='hidetooltip();' title="<em> <b>Mostrar u ocultar</b> lineas de movimiento</em>">
        <button id="buttonSwitchLines" onclick="switchLinesFunction();"  type="button" name="button" class="btn  btn-primary container-fluid btnTopAttached" style="border-style: solid;
border-color: white;
border-left-width: 0px;
border-right-width: 2px;
border-top-width: 0;
border-bottom-width: 0;
height: 99%;">
        <!-- <i class="fas fa-play  iconMenuItem"></i> -->
        <img id="buttonSwitchLinesIMG" class="iconoactivadoManuVertical" src="/imgfiles/blackboard3D/img/textures/program/menuverticalActivado.png">
        </button>
        </div>
      </div>



</div>

<!-- AQUI VIENE TODO LO RELACIONADO CON LOS OBJETOS -->


<!-- EDITAR MENU 1 -->
<!-- <div id="container-editmode2" class="row container-fluid collapse show containerRowTop" >
  <div class="row titleGroupButton" >
    <p>Objeto seleccionado:</p>
  </div>
  <div class="row containerNoWrap">
    <div class="col marpadInterfaz">
      <button data-toggle="modal" data-target="#texto2d"   type="button" name="button" class="btn bg-info container-fluid   btnTopAttached">
        <i class="fas fa-file-signature"></i>
      </button>
    </div>
    <div class="col marpadInterfaz">
    <button data-toggle="collapse" href="#controls4editmodecontainer" type="button" name="button" class="btn bg-info container-fluid  btnTopAttached">
    <i class="fas fa-edit"></i>
    </button>
    </div>
    <div class="col marpadInterfaz">
    <button id="controls3ModeDelete" type="button" name="button" class="btn btn-danger container-fluid   btnTopAttached">
     <i class="fas fa-trash-alt"></i>
    </button>
    </div>
    <div class="col marpadInterfaz" style="display:none;">
      <button id="closeeditmodebutton" data-toggle="collapse" data-target="#container-editmode2" type="button" class=" btn btn-danger container-fluid btnTopAttached">
    <i class="fas fa-times-circle"></i>
  </button>
      </diV>
  </div>
   </div> -->
<!-- FIN OPCIONES DE LOS OBJETOS -->



      </div>


<!-- VER TEMA HABER SI FUNCIONA -->

  <div id="ObjectCreated1" class="container-fluid" style="display:block;
  margin: 0;
padding: 0;
">
    <p class="mb-0" style="text-align:center;display:flex;">
      <button id="stopcreate"onclick="stopcreate()" type="button" class="btn-danger"style="
      padding: 0.5em;
    margin: 0;
    border-style: hidden;
    padding-left: 2em;
    padding-right: 2em;
    width:150px;

" data-toggle="tooltip" data-placement="bottom"data-html="true" trigger="hover" title="<em>Deja de posicionar objetos</em>">
  <h3 style="font-size: 1.5em;"><i class="fab fa-font-awesome-flag"></i>  FIN</h3>
  </button>
  <button id="changeColorDiv1" onclick="changedivColor(true);" type="button" class="btn-danger" style="
          padding: 0.5em;
          margin: 0;
          border-style: hidden;
          padding-left: 0.5em;
          padding-right: 0.5em;
           background:#da1a2e;
           color:black;
           width:150px;

    " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Color del objeto</em>">
      <h3 style="font-size: 1.5em;"><i class="fas fa-palette"></i>COLOR</h3>
      </button>
      <button id="changeColorDiv2" onclick="changedivColor(true,true);" type="button" class="btn-danger" style="
              padding: 0.5em;
              margin: 0;
              border-style: hidden;
              padding-left: 0.5em;
              padding-right: 0.5em;
              background:#da1a2e;
              color:black;
               width:150px;
               display:none;

        " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Color Secundario del objeto</em>">
          <h3 style="font-size: 1.5em;"><i class="fas fa-palette"></i>COLOR 2</h3>
          </button>
          <button id="changeRotationDiv" onclick="hidetopRotation();" type="button" class="btn-primary" style="
                  padding: 0.5em;
                  margin: 0;
                  border-style: hidden;
                  padding-left: 0.5em;
                  padding-right: 0.5em;

                   width:150px;

            " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Propiedad por defecto en la rotación</em>">
              <h3 style="font-size: 1.5em;"><i class="fas fa-sync-alt"></i>ROTAR</h3>
              </button>

      <button  id="changeScaleDiv"   onclick="" type="button" class="btn-primary" style="
              padding: 0.5em;
              margin: 0;
              border-style: hidden;
              padding-left: 0.5em;
              padding-right: 0.5em;
              display:none;
               width:150px;
        " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Deja de dibujar en el campo</em>">
          <h3 style="font-size: 1.5em;"><i class="fas fa-expand-alt"></i>TAMAÑO</h3>
          </button>
      <button onclick="" type="button" class="btn-primary" style="
             padding: 0.5em;
             margin: 0;
             border-style: hidden;
             padding-left: 0em;
             padding-right: 0em;
             display:none;
       " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Deja de dibujar en el campo</em>">
         <h3 style="font-size: 1.5em;"><i class="fas fa-palette"></i>RESET</h3>
         </button>
         <input style="display:none;" id="colorInput1" onchange="changedivColor();" type="color" value="#da1a2e" />
      <input style="display:none;" id="colorInput2" onchange="changedivColor(false,true);" type="color" value="#da1a2e" />
</p>
</div>

<!--DRAW TEMA -->
<div id="DrawCreated1" class="container-fluid" style="display: block; margin: 0px; padding: 0px;">
    <p class="mb-0" style="text-align:center;display:flex;">
      <button id="stopcreate2" onclick="finishDrawLine(1);stopcreate();" type="button" class="btn-danger" style="
      padding: 0.5em;
    margin: 0;
    border-style: hidden;
    padding-left: 5em;
    padding-right: 5em;
" data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Deja de dibujar en el campo</em>">
  <h3 style="font-size: 1.5em;"><i class="fab fa-font-awesome-flag"></i>  TERMINAR</h3>
  </button>

  <button id="changeColorDrawDiv" onclick="cambioColorDraw();" type="button" class="btn-danger" style="
        padding: 0.5em;
        margin: 0;
        border-style: hidden;
        padding-left: 5em;
        padding-right: 5em;
        background:#0000ff;
  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Deja de dibujar en el campo</em>">
    <h3 style="font-size: 1.5em;"><i class="fas fa-palette"></i>COLOR</h3>
    </button>
    <input style="display:none;" id="drawColorInput1" onchange="cambioColorDraw('true');" type="color" value="#0000ff" />
</p>
</div>
<!-- FIN DRAW TEMA -->
<!--Tamaño TEMA -->
<div id="SizeChange1" class="container-fluid" style="display: block; margin: 0px; padding: 0px;">
<div class="container-fluid bg-primary" style="display:flex;" >
  <div class="col" style="min-width: 100%;">
    <div class="row">
      <div class="col" style="text-align: left;padding: 0.5em;">
        <i class="fas fa-2x fa-search-minus"></i>
      </div>
      <div id="infoScaleDiv" class="col"  style="text-align: center;padding: 0.5em;">
1
      </div>
      <div class="col"  style="text-align: right;padding: 0.5em;">
       <i class="fas fa-2x fa-search-plus"></i>
      </div>
    </div>
    <div class="row">
      <input id="inputSizeChange1"  oninput="scaleInputChange()" type="range" class="form-control-range form-control custom-range" />
    </div>
  </div>
<div class="col">
  <button onclick="resetscaleInputChange();hidetooltip();" type="button" class="btn-danger" style="
        padding: 0.5em;
        margin: 0;
        border-style: hidden;
        padding-left: 1em;
        padding-right: 1em;
  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Dejar el tamaño por defecto del objeto</em>">
    <h3 style="font-size: 1.5em;"><i class="fas fa-trash-restore-alt"></i>RESET</h3>
    </button>
</div>
<div class="col" style="padding:0;display:block;">
  <button onclick="hideModification();hidetooltip();" type="button" class="btn-danger" style="
        margin: 0;
        border-style: hidden;
        padding-left: 1em;
        padding-right: 1em;
        min-height: 100%;
        margin-left: -1.2em;

  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Cerrar menu de Tamaño</em>">
    <h3 style="font-size: 1.5em;"><i class="far fa-times-circle"></i> </h3>
    </button>
</div>
</div>
</div>
<!-- FIN Tamaño TEMA -->
<!-- ROTACION TEMA -->
<div id="RotateChange1" class="container-fluid" style="display: block; margin: 0px; padding: 0px;">
<div class="container-fluid bg-primary" style="display:flex;" >
  <div class="col" style="min-width:26em;">
    <!-- <div class="col conainer-fluid"> -->
      <div class="row">
        <div class="col" style="text-align: left;padding: 0.5em;">
          <i class="fas fa-2x fa-undo"></i>
        </div>
        <div class="col"  style="text-align: center;padding: 0.5em;">

        </div>
        <div class="col"  style="text-align: right;padding: 0.5em;">
         <i class="fas fa-2x fa-redo"></i>
        </div>
      </div>
      <div class="row">
        <input style="transform: rotate(180deg);" oninput="editarObjetoRotate();" id="inputRotateChange1" max="3.14" min="-3.14" step="0.01"  type="range" class="form-control-range form-control custom-range" />
      </div>
    <!-- </div> -->

  </div>
<div class="col" style="padding:0;">
  <button onclick="controls4rotatemode(0,true);hidetooltip();" type="button" class="btn-primary" style="

        margin: 0;
        border-style: hidden;
      padding-left:1em;
      padding-right:1em;
        min-height: 100%;
  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Dejar la rotación por defecto 0º</em>">
    <h3 style="font-size: 1.5em;"><i class="fas fa-arrow-right"></i><br> 0º</h3>
    </button>
</div>
<div class="col" style="padding:0;">
  <button onclick="controls4rotatemode(1.57,true);hidetooltip();"type="button" class="btn-primary" style="

        margin: 0;
        border-style: hidden;
  padding-left:1em;
  padding-right:1em;
        min-height: 100%;
  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Rotar 90º el objeto</em>">
    <h3 style="font-size: 1.5em;"><i class="fas fa-arrow-up"></i> <br>90º</h3>
    </button>
</div>

<div class="col" style="padding:0;">
  <button onclick="controls4rotatemode(3.14,true);hidetooltip();" type="button" class="btn-primary" style="

        margin: 0;
        border-style: hidden;
padding-left:1em;
padding-right:1em;
        min-height: 100%;
  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Rotar 180º el objeto</em>">
    <h3 style="font-size: 1.5em;"><i class="fas fa-arrow-left"></i> <br>180º</h3>
    </button>
</div>
<div class="col" style="padding:0;">
  <button onclick="controls4rotatemode(-1.57,true);hidetooltip();"type="button" class="btn-primary" style="

        margin: 0;
        border-style: hidden;
    padding-left:1em;
    padding-right:1em;
        min-height: 100%;
  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Rotar 270º el objeto</em>">
    <h3 style="font-size: 1.5em;"><i class="fas fa-arrow-down"></i> <br>270º</h3>
    </button>
</div>

<div class="col" style="padding:0;display:block;">
  <button onclick="hideModification();hidetooltip();" type="button" class="btn-danger" style="
        margin: 0;
        border-style: hidden;
        padding-left: 5em;
        padding-right: 5em;
        min-height: 100%;
  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Cerrar menu de rotación</em>">
    <h3 style="font-size: 1.5em;"><i class="far fa-times-circle"></i> </h3>
    </button>
</div>
</div>
</div>
<!-- FIN ROTACION TEMA -->

<!-- FLECHAS TEMA -->
<div id="FlechasChange1" class="container-fluid" style="display: none; margin: 0px; padding: 0px;">
<div class="container-fluid bg-primary" style="display:flex;" >
  <div class="col" >

      <div class="row">
Punto inicial
      </div>
      <div class="row">
        <select id="InitialArrow">
          <option data-img_src="/imgfiles/blackboard3D/img/textures/program/endPoint.png">Flecha</option>
          <option data-img_src="/imgfiles/blackboard3D/img/textures/program/endPoint2.png">Circulo</option>
          <option data-img_src="/imgfiles/blackboard3D/img/textures/program/Blank.png">Ninguno</option>
        </select>
      </div>

  </div>
  <div class="col">

      <div class="row">
  Cuerpo
      </div>
      <div class="row">
        <select id="BodyArrow">
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/line.png">Solido</option>
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/endPoint2.png">Punteado</option>
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/Blank.png">Doble</option>
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/line.png">Doble Solido</option>
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/endPoint2.png">Doble Punteado</option>
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/Blank.png">Circulos</option>
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/Blank.png">Cuadrados</option>
        </select>
      </div>

  </div>

  <div class="col">

      <div class="row">
  Punto Final
      </div>
      <div class="row">
        <select id="FinalArrow">
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/endPoint.png">Flecha</option>
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/endPoint2.png">Circulo</option>
               <option data-img_src="/imgfiles/blackboard3D/img/textures/program/Blank.png">Ninguno</option>
        </select>
      </div>

  </div>


<div class="col" style="padding:0;">
  <button onclick="controls4rotatemode(-1.57,true);hidetooltip();"type="button" class="btn-primary" style="

        margin: 0;
        border-style: hidden;
        padding-left: 5em;
        padding-right: 5em;
        min-height: 100%;
  " data-toggle="tooltip" data-placement="bottom" data-html="true" trigger="hover" title="" data-original-title="<em>Dejar el tamaño por defecto del objeto</em>">
    <h3 style="font-size: 1.5em;"><i class="fas fa-arrow-down"></i> <br>-90º</h3>
    </button>
</div>
</div>
</div>
<script type="text/javascript">
    function custom_template(obj){
            var data = $(obj.element).data();
            var text = $(obj.element).text();
            if(data && data['img_src']){
                img_src = data['img_src'];
                template = $("<div style='display:flex;'><img src=\"" + img_src + "\" style=\"width: 27px;transform: rotate(-90deg);\"/><p style=\"margin-left: 1em;font-size:12pt;text-align:center;\">" + text + "</p></div>");
                return template;
            }
        }
        function custom_template2(obj){
                var data = $(obj.element).data();
                var text = $(obj.element).text();
                if(data && data['img_src']){
                    img_src = data['img_src'];
                    template = $("<div style='display:flex;'><img src=\"" + img_src + "\" style=\"width: 27px;transform: rotate(90deg);\"/><p style=\"margin-left: 1em;font-size:12pt;text-align:center;\">" + text + "</p></div>");
                    return template;
                }
            }
    var options = {
         'templateSelection': custom_template,
        'templateResult': custom_template,
    }
    var options2 = {
         'templateSelection': custom_template2,
        'templateResult': custom_template2,
    }
    $('#InitialArrow').select2(options);
    $('#BodyArrow').select2(options2);
    $('#FinalArrow').select2(options2);
     $('.select2-container--default .select2-selection--single').css({'height': '40px','padding': '0em'});

</script>
<!-- FIN FLECHAS TEMA -->

      </div>
    </div>

  </div>



<div id="container-menu" class="container container-fluid d-print-none collapse" >
<form>
<div class="row">
  <div class="col">
    <button onclick="stopcreate()" type="button" class="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#crear">
    Crear Objetos
    </button>
    <button type="button" class="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#fondo">
    Cambio de campo
    </button>
  </div>
</div>
</form>
</div>

</div>
<!-- FIN MENU INICIO -->





<!-- EDITAR MENU 2 OPCIONES -->
<div id="controls4editmodecontainer"  class="container-fluid topInterfaz marpadInterfaz collapse" style="z-index:101;">
<div class="row marpadInterfaz" >
  <div class="col marpadInterfaz">
    <button data-toggle="collapse" data-target="#controls4scalemodecontainer" type="button" name="button" class=" btnPrimero btn btn-lg btn-primary container-fluid  ">
   TAMAÑO</button>
  </div>
<div class="col marpadInterfaz">
  <button data-toggle="collapse" data-target="#controls4rotatemodecontainer" type="button" name="button" class=" btnPrimero btn btn-lg btn-primary container-fluid  ">
 ROTAR</button>
</div>
<!-- <div class="col marpadInterfaz">
  <button data-toggle="collapse" data-target="#controls4colormodecontainer"  type="button" name="button" class="btn btn-lg btn-primary container-fluid   btnTopAttached">
 COLOR</button>
</div> -->
<div class="col marpadInterfaz">
  <button  data-toggle="collapse" data-target="#controls4photomodecontainer"  type="button" name="button" class=" btnTopAttached btn btn-lg btn-primary container-fluid  ">
    FOTO</button>
</div>
<button  data-toggle="collapse" data-target="#controls4editmodecontainer" aria-controls="controls4editmodecontainer" type="button" name="button" class="btn btn-lg btn-danger container-fluid btnCerrar">
CERRAR</button>
</div>
</div>


<div id="container-draw" class="container-fluid marpadInterfaz topInterfaz" style="z-index:100;display:none;">
<div class="row marpadInterfaz">
<div class="col marpadInterfaz">
<button id="stopItemInputDrawPlane" type="button" name="button" class="btn btn-lg btn-danger container-fluid   btnPrincipal">
 TERMINAR
</button>
</div>
</div>
</div>

<!-- <div id="controls4scalemodecontainer" class="container-fluid  topInterfaz marpadInterfaz" style="z-index:102;display:none;">
<div class="row marpadInterfaz">
<div class="col marpadInterfaz">
<div class="container-fluid bg-primary">
  <label style="min-width:100%;" class="marpadInterfaz"><span>Largo</span>
    <input id="controls4ModeScaleLargo" type="range" min="0.1" max="10" value="1" step="0.01" class="custom-range btnSlider2">
  </label>
  <label style="min-width:100%;" class="marpadInterfaz"><span>Ancho</span>
    <input id="controls4ModeScaleAncho" type="range" min="0.1" max="10" value="1" step="0.01" class="custom-range btnSlider2">
  </label>
</div>
</div>
<button id="closeEditModecontainer2" type="button" name="button" class="btn btn-lg btn-danger container-fluid btnCerrar">
CERRAR</button>
</div>
</div> -->






<!-- <div id="controls4colormodecontainer" class="container-fluid  topInterfaz marpadInterfaz collapse" style="z-index:103">
<div class="row marpadInterfaz">
<div class="col marpadInterfaz">
<div class="container-fluid bg-primary">
    <input id="controls4modeColorPicker" class="btnColor" type='color' name='color2' value='#3355cc' />
</div>
</div>
<button data-toggle="collapse" href="#controls4colormodecontainer" type="button" name="button" class="btn btn-lg btn-danger container-fluid btnCerrar">
CERRAR</button>
</div>
</div> -->

<div id="controls4rotatemodecontainer" class="container-fluid  topInterfaz marpadInterfaz collapse" style="z-index:104">
<div class="row marpadInterfaz">
<div class="col marpadInterfaz">
<div class="container-fluid bg-primary">
  <input id="controls4rotatemodecontainerInput" type="range" min="-3.14" max="3.14"  step="0.01"class="custom-range btnSlider">
</div>
</div>
<button data-toggle="collapse" href="#controls4rotatemodecontainer" type="button" name="button" class="btn btn-lg btn-danger container-fluid btnCerrar">
CERRAR</button>
</div>
</div>


<div id="controls4scalemodecontainer" class="container-fluid  topInterfaz marpadInterfaz collapse" style="z-index:104">
<div class="row marpadInterfaz">
<div class="col marpadInterfaz">
<div class="container-fluid bg-primary">
  <input id="controls4scalemodecontainerInput"   type="range" min="0.6" max="3"  step="0.01"class="custom-range btnSlider">
</div>
</div>
<button data-toggle="collapse" href="#controls4scalemodecontainer" type="button" name="button" class="btn btn-lg btn-danger container-fluid btnCerrar">
CERRAR</button>
</div>
</div>

<div id="controls4photomodecontainer" class="container-fluid  topInterfaz marpadInterfaz collapse" style="z-index:104">
<div class="row marpadInterfaz">

  <div class="col marpadInterfaz">
    <button data-toggle="collapse" data-target="#controls4photomodecontainer2"  type="button" name="button" class="btn btn-lg btn-primary container-fluid   btnPrimero">
   GALERIA</button>
  </div>
  <div class="col marpadInterfaz">
    <button data-toggle="collapse" data-target="#controls4photomodecontainer3"  type="button" name="button" class="btn btn-lg btn-primary container-fluid   btnPrimero">
   SUBIR</button>
  </div>

<button data-toggle="collapse" href="#controls4photomodecontainer" type="button" name="button" class="btn btn-lg btn-danger container-fluid btnCerrar">
  CERRAR</button>
</div>
</div>

<div id="controls4photomodecontainer2" class="container-fluid  topInterfaz marpadInterfaz collapse" style="z-index:104">
<div class="row marpadInterfaz">
  <div class="col marpadInterfaz">
    <button id="profileTxtObj1"   type="button" name="button" class="btn btn-lg btn-primary container-fluid   btnPrimero">
   Ronaldinho</button>
  </div>
  <div class="col marpadInterfaz">
    <button id="profileTxtObj2"   type="button" name="button" class="btn btn-lg btn-primary container-fluid   btnPrimero">
   Prueba</button>
  </div>
  <div class="col marpadInterfaz">
    <button id="profileTxtObj3"   type="button" name="button" class="btn btn-lg btn-primary container-fluid   btnPrimero">
   Prueba2</button>
  </div>

<button data-toggle="collapse" href="#controls4photomodecontainer2" type="button" name="button" class="btn btn-lg btn-danger container-fluid btnCerrar">
CERRAR</button>
</div>
</div>

<div id="controls4photomodecontainer3" class="container-fluid  topInterfaz marpadInterfaz collapse" style="z-index:104">
<div class="row marpadInterfaz">
<div class="col marpadInterfaz">
<div class="container-fluid bg-primary">
  <!-- <input id="profileTxtObjInput"type="file" class="form-control-file btnSlider"> -->
</div>
</div>
<button data-toggle="collapse" href="#controls4photomodecontainer3" type="button" name="button" class="btn btn-lg btn-danger container-fluid btnCerrar">CERRAR</button>
</div>

</div>
<!-- NUEVA INTERFAZ:END -->

  <!-- MENU ABAJO -->



<!-- FIN MENU ABAJO -->

<p  style="display:none;top:5em;z-index:999;left:15em;background:white;" id="disclaimer">V:Alfa-0.1(M-01)
  <!-- <a id="download_link" download="my_exported_file.json" href="#" >Download as Text File</a> -->
</p>

<!-- <img id="img1Photo"src="#" alt="#"> -->

<script type="text/javascript">
//esto tiene que ver con la galeria de objetos para mostrar los resultados mediante un regex
  // document.getElementById("box").oninput=
// document.getElementById("box").onchange=
function buscando1(){
var matcher = new RegExp(document.getElementById("box").value, "gi");
for (var i=0;i<document.getElementsByClassName("connect-cat").length;i++) {
  if (matcher.test(document.getElementsByClassName("name")[i].innerHTML) || matcher.test(document.getElementsByClassName("category")[i].innerHTML)) {
    document.getElementsByClassName("connect-cat")[i].style.display="inline-block";
  } else {
    document.getElementsByClassName("connect-cat")[i].style.display="none";
  }

}
}

// function buscar(){
// var matcher = new RegExp(document.getElementById("box").value, "gi");
// for (var i=0;i<document.getElementsByClassName("connect-cat").length;i++) {
//   if (matcher.test(document.getElementsByClassName("name")[i].innerHTML) || matcher.test(document.getElementsByClassName("category")[i].innerHTML)) {
//     document.getElementsByClassName("connect-cat")[i].style.display="inline-block";
//   } else {
//     document.getElementsByClassName("connect-cat")[i].style.display="none";
//   }
//
// }
// }

</script>

<!-- FINAL BODY: DENTRO DE PAGINA BLACKBOARDV1 /////// -->
