

    <title>Blackboard</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://bmdevel.1d3a.com/imgfiles/blackboard3D/style.css" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <!-- Modal -->
    <div class="modal fade" id="fondo" tabindex="-1" role="dialog" >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Cambiar Fondo: Fútbol</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="btn-toolbar">
              <div class="btn-group mr-2">
            <input id="footballTextures3d" type="button" class="btn btn-sm btn-primary" value="Campo 3D"/>
            <input id="footballTextures1" type="button" class="btn btn-sm btn-primary" value="1"/>
            <input id="footballTextures2" type="button" class="btn btn-sm btn-primary" value="2"/>
            <input id="footballTextures3" type="button" class="btn btn-sm btn-primary" value="3"/>
            <input id="footballTextures4" type="button" class="btn btn-sm btn-primary" value="4"/>
            <input id="footballTextures5" type="button" class="btn btn-sm btn-primary" value="5"/>
            <input id="footballTextures6" type="button" class="btn btn-sm btn-primary" value="6"/>
          </div>
        </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="crear" tabindex="-1" role="dialog" >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Crear Objetos: Fútbol</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

                <label for="crearrectangulo">
                  <input id="createItemInput" type="button" class="btn btn-sm btn-primary" value="Crear Rectangulo"/>
                </label>
                <label>
                  <input id="createItemInputBall" type="button" class="btn btn-sm btn-primary" value="Crear Balón"/>
                </label>
                <label>
                  <input id="createItemInputCone" type="button" class="btn btn-sm btn-primary" value="Crear Cono"/>
                </label>
                <label>
                  <input id="createItemInputPlayer" type="button" class="btn btn-sm btn-primary" value="Crear Player"/>
                </label>
                <label>
                  <input id="createItemInputGoal" type="button" class="btn btn-sm btn-primary" value="Crear Porteria"/>
                </label>



          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

          </div>
        </div>
      </div>
    </div>



    <!-- FIN MODALS -->




    <div id="loaderContainer" class="loaded container-fluid">
    <center>
      <img class="container-sm logoloader mx-auto" src="https://1d3a.com/wp-content/uploads/2019/01/1d3a.png" alt="1d3a" />
      <div class="preloader"></div>
    </center>
    </div>
    <img class="logofixed" src="https://1d3a.com/wp-content/uploads/2019/01/1d3a.png" alt="1d3a">

    <!-- Bootstrap, JS, y AwesomeFont -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/f015c16f33.js" crossorigin="anonymous"></script>
  <!-- FIN Bootstrap, JS, AwesomeFont -->
<!-- TWEEN - Gestor de colas -->
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/Tween.js"></script>
    <!-- THREEJS - Framework3D -->

    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/three.js"></script>
    <!-- THREEJS - LIBRERIAS UTILIZADAS-->
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/three.module.js" type="module"></script>

    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/controls/OrbitControls.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/controls/DragControls.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/controls/TransformControls.js"></script>

    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/loaders/DDSLoader.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/loaders/PLYLoader.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/loaders/FBXLoader.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/loaders/STLLoader.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/loaders/OBJLoader.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/loaders/MTLLoader.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/loaders/GLTFLoader.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/js/loaders/ColladaLoader.js"></script>


    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/blackboard3d.js"></script>
    <script src="https://bmdevel.1d3a.com/imgfiles/blackboard3D/main.js"></script>


<!-- <input style="position:fixed;left:0;top:50%;" id="advancedControl3" type="button" class="btn btn-sm btn-primary" value="Activar Controles Avanzados"/> -->

<div class="container tabladetiempo d-print-none">
  <div class="barradetiempo">
    <label>
      <input id="puntoinicial" type="button" class="btn btn-sm btn-primary" value="Crear Escena"/>
      <input id="scenacreate" type="button" class="btn btn-sm btn-primary" value="Play"/>
      <!-- <input id="#" type="button" class="btn btn-sm btn-primary" value="Compartir"/> -->
    </label>
    <label style="float:right;">
    <input id="scenaselect" type="button" name="" value="<<">
    <input type="button" name="" value="<">
<input style="width: 50px;"type="text" name="" value="Escena">
<input type="button" name="" value=">">
<input type="button" name="" value=">>">

<input type="button" name="Submit" value="Imprimir" class="btn btn-sm btn-primary" onclick="javascript:window.print()">
  </label>
  </div>
</div>


<!-- MENU ABAJO -->


<!-- FIN MENU ABAJO -->
<center class="container container-fluid"style="position:fixed;bottom:0;;min-width:100%"><input type="button" data-toggle="collapse" data-target="#container-menu"  class="btn btn-sm btn-primary container-fluid" value="Menú"/>
</center>
<div id="container-menu" class="container container-fluid d-print-none collapse show" >
<!-- <center><h1>BlackBoard 3D</h1></center> -->

<br>
<form style="display:block;">
<div class="row">
  <div class="col">
    <h6>Control Camara</h6>
    <label for="capturecamera">
    <input id="cameraFixInputCB" class="btn btn-sm btn-primary" type="checkbox" value="false" unchecked />
    Fijar Camara
  </label>
  <label>
    <input id="camera2D" type="button" class="btn btn-sm btn-primary" value="Vista aerea 2D"/>
  </label>
  <label>
    <input id="cameraLR" type="button" class="btn btn-sm btn-primary" value="Vista Lateral Izquierda"/>
  </label>
  <label>
    <input id="cameraRR" type="button" class="btn btn-sm btn-primary" value="Vista Lateral Derecha"/>
  </label>
  </div>
  <div class="col">
    <h6>Opciones</h6>
    <label for="drag">
        <input id="draggableObjectsInputCB" class="btn btn-sm btn-primary" type="checkbox" name="draggableObjectsInputCB" checked/>
      Objetos Movibles</label>

<!-- INICIO POPUP -->
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fondo">
Cambio de campo
</button>
<!-- FIN POPUP -->
  </div>
  <div class="col">
    <h6>Crear Objetos</h6>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#crear">
    Crear Objetos
    </button>



  </div>
</div>
</form>

</div>
