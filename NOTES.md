<html>
<% include ../template/head.html %>
  <body>
    <!-- FIN CABEZERA: DENTRO DE ZONA BLACKBOARD -->
    <div id="wrapper">
      <% include ../template/menuvertical.html %>
      <div id="page-wrapper">
        <!-- inicio menu -->
        <% include ../template/menuhorizontal.html %>
    <!-- fin menu -->
<% include ../blackboardv2.html %>
  </div>
</div>
<% include ../template/footer.html %>
</body>
axios1Query.append('token', randomNum);


// var axios2Query = new URLSearchParams();
// axios2Query.append('token2', (response.data*randomNum)*2);
//
// axios({
//   method: 'post',
//   url: 'https://'+blackboard3Denvironment+'/blackboard.datos',
//   data: axios2Query
// }).then(function(response){
//    cameraReset();
//    if (document.getElementById("isSavingInProgressBlackboard")) {
//      document.getElementById("isSavingInProgressBlackboard").style.display="none";
//    }
// });


Luego crear nueva etiqueta y añadir el input como lavel y añadir el texto como info a ese label. 
