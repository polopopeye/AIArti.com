var url="https://cors-anywhere.herokuapp.com/https://news.google.com/topstories?hl=es-419&gl=MX&ceid=MX:es-419";

var el = $( '<div></div>' );
var h3Tittle,h4Tittle;
// All the anchor elements

function axiosQuery(){
  var axiosparams=new URLSearchParams();
  // axiosparams.append('hl', "es-419");
  // axiosparams.append('gl', "MX");
  // axiosparams.append('ceid', "MX:es-419");

  axios({
    method: 'get',
    url: url,
    data: axiosparams
  }).then(function(response){
    el.html(response.data);
    h3Tittle=$('h3', el);
    h4Tittle=$('h4', el);
    for (var i = 0; i < h3Tittle.length; i++) {
      document.getElementById("infoPage").innerHTML+=h3Tittle[i].innerText+"- h3 <br>";
    }
    for (var i = 0; i < h3Tittle.length; i++) {
      document.getElementById("infoPage").innerHTML+=h4Tittle[i].innerText+"- h4 <br>";
    }
    // console.log(response.data);
  });
}

// function ajaxQuery(){
//   $.ajax({
//        url: url,
//        dataType: 'text',
//        success: function(data) {
//          console.log(data);
//             var elements = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
//             for(var i = 0; i < elements.length; i++) {
//                  var theText = elements[i].firstChild.nodeValue;
//                  // Do something here
//             }
//        }
//   });
// }
// $("#infoPage").html(``
//
//   $("#infoPage")[0].innerHTML+);
setTimeout(function(){
  axiosQuery()
  console.log(h4Tittle);
  console.log(h3Tittle);

},1000);

// ajaxQuery();
