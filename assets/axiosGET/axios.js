var proxyScrap=[
  "http://127.0.0.1:8967",
  "https://cors-anywhere.herokuapp.com/"
];
var whichTittle = new WhichX();

var newsQueryToSearch;
var SourceTittle=[
  {
    url:proxyScrap[0]+"/https://news.google.com/search?q="+newsQueryToSearch+"&hl=es-419&gl=CO&:es-419&ceid=CO:es-419",
    name:"Busqueda Personalizada"
  },
{
  url:proxyScrap[0]+"/https://news.google.com/topstories?hl=es-419&gl=MX&ceid=MX:es-419",
  name:"Google News Mèxico"
},
{
  url:proxyScrap[0]+"/https://news.google.com/topstories?hl=es-419&gl=AR&ceid=AR:es-419",
  name:"Google News Argentina"
},
{
  url:proxyScrap[0]+"/https://news.google.com/topstories?hl=es-419&gl=EN&ceid=EN:es-419",
  name:"Google News Estados Unidos"
},
{
  url:proxyScrap[0]+"/https://news.google.com/topstories?hl=es-419&gl=VE&ceid=VE:es-419",
  name:"Google News Venezuela"
}
];

$("#TopMenuSelect").html(`
  <div class="row mx-auto" style="padding:1em;">
    <div class="col">
      <span>CATEGORIA/TITULO</span>
      <input id="newsQueryToSearch" type="text" value="CATEGORIA">
    </div>
    <div class="col">
      <span>FUENTE DE NOTICIAS</span>

      <select id="selectNewSource" >
      </select>



    </div>
    <div class="col">
      <span>¿AutoAprendizaje?</span>
      <select >
        <option value="" selected>SI</option>
        <option value="" >NO</option>
      </select>
    </div>
  </div>
  <div class="row">
  <a id="selectNewSourceButton" class="btn btn-lg btn-primary">Inteligencia!</a>
  </div>
  `);

// $("#selectNewSource").change(
//
// );
$('#selectNewSourceButton').on('click', function() {
   // alert( this.value );
   if (whichTittle.addLabels(newsQueryToSearch)) {
     console.log(newsQueryToSearch+" Añadido con exito");
   }else{
     console.log("ERROR con"+newsQueryToSearch);

   }
  ;
   axiosQuery($("#selectNewSource")[0].value,el1,"h3","h4")
   getBetterTittleInterval();

  });
  $('#newsQueryToSearch').on('input', function() {
     // alert( this.value );
    // readNews();

    newsQueryToSearch=$("#newsQueryToSearch")[0].value;
    var urltoUpdate=proxyScrap[0]+"/https://news.google.com/search?q="+newsQueryToSearch+"&hl=es-419&gl=EN&:es-419&ceid=EN:es-419";
    SourceTittle[0].url=urltoUpdate;
setTimeout(reloadList(),1000);


    });





function reloadList(){
  $("#selectNewSource")[0].innerHTML="";
  for (var i = 0; i < SourceTittle.length; i++) {
    var selected;

      if (i===1) {
        selected="selected";
      }else{
        selected="";
      }


    $("#selectNewSource")[0].innerHTML+=`
    <option value="${SourceTittle[i].url}" ${selected}>${SourceTittle[i].name}</option>
    `;
  }

};
reloadList();

var el1 = $( '<div></div>' );

var h3Tittle,h4Tittle;
// All the anchor elements
//h3, h4
var tittlesLength;
function axiosQuery(url,el,select1,select2,select3){
  document.getElementById("infoPage").innerHTML="";
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
    if (select1) {
      select1R=$(select1, el);
      for (var i = 0; i < select1R.length; i++) {
        document.getElementById("infoPage").innerHTML+=`
        <div class="row" id="${select1}-${i}">
        <div class="col">
        ${select1R[i].innerText}
        </div>
        <div class="col note"  note="yes" notev="1" notet="1" target="#${select1}-${i}" id="${i}-note-${select1}">
        </div>
        <div class="col category" category="yes" >${newsQueryToSearch}
        </div>
        </div>
        `;
        // setTimeout();ç
        whichTittle.addData(newsQueryToSearch, select1R[i].innerText);
        getTitleNote(select1R[i].innerText,"#"+i+"-note-"+select1,i,"-note-"+select1);
      }
    }
    if (select2) {
      select2R=$(select2, el);
      for (var i = 0; i < select2R.length; i++) {
        document.getElementById("infoPage").innerHTML+=`
        <div class="row" id="${select2}-${i}">
        <div class="col innerText">
        ${select2R[i].innerText}
        </div>
        <div class="col note" note="yes" notev="1" notet="1" target="#${select2}-${i}" id="${i}-note-${select2}">
        </div>
        <div class="col category" category="yes" >${newsQueryToSearch}
        </div>

        </div>
        `;
        whichTittle.addData(newsQueryToSearch,select2R[i].innerText);

        getTitleNote(select2R[i].innerText,"#"+i+"-note-"+select2,i,"-note-"+select2);

      }
    tittlesLength=select1R.length+select2R.length;
    }
    // if (select3) {
    //   select3R=$(select3, el);
    //   for (var i = 0; i < select3R.length; i++) {
    //     document.getElementById("infoPage").innerHTML+=select3R[i].innerText+" - "+select3+"<br>";
    //   }
    // }
    // console.log(response.data);
  });
}

var notesArray=[];
var largestNote,largestTittle;
function getBetterTittle(){
  notesArray=[];
  getDATA=$(".note[note='yes']")

  for (var i = 0; i < getDATA.length; i++) {
    var note=parseInt(getDATA[i].innerText);
    if (isNaN(note)) {
      // console.log("ERROR con"+note+" - "+getDATA[i].innerText);
    }else{
      notesArray.push(note);
    }
  }
   largestNote = notesArray.sort((a,b)=>a-b).reverse()[0];
    largestTittle = $(".note[notev='"+largestNote+"']").attr("notet")
   // largestTittle=
    $("#betterTittle").html(largestTittle);
    console.log(largestNote);
console.log(largestTittle);
}





var resultStatsGET,resultStats2,resultStats;
var betterTittle;
function getTitleNote(titulo,id,n,div){
  var result = $( '<div></div>' );


    var urlNote=proxyScrap[0]+"/https://www.google.com/search?q="+titulo;

    var axiosparams=new URLSearchParams();

    axios({
      method: 'get',
      url: urlNote,
      data: axiosparams
    }).then(function(response){
    result.html(response.data);
     resultStatsGET=$("#result-stats", result);
     resultStats2 = resultStatsGET[0].innerText.match(/Aproximadamente(.*.)resultados/);
 resultStats= parseInt(resultStats2[1].replace(".", ""));
 // console.log($(id));
 $(id).html(resultStats);
 // console.log(id);

 $(id).attr("notev",resultStats);
 $(id).attr("notet",titulo);
 // console.log($(id)[0].notev);
 // console.log($(id)[0].notet);

 // for (var i = 0; i < n; i++) {
 //
 //   if (resultStats > parseInt($("#"+i+div)[0].innerText)) {
 //     $("#betterTittle").html(titulo);
 //   }
 // }

// console.log(resultStats);
// select1R=$(select1, el);
    });
  }

// setTimeout(function(){
//   axiosQuery($("#selectNewSource")[0].value,el1,"h3","h4");
// // axiosQuery(,el1,"h3","h4");
// },200);
// // getBetterTittleInterval();



var switchInterval=false;
var setInterval;
// intervalManager(switch){
//   switch (switch) {
//     case true:
//
//
// switchInterval=false;
//       break;
//       case false:
//       clearInterval(startInterval);
//
//   switchInterval=true;
//
//   }
// }
var startInterval;
function getBetterTittleInterval(){
   startInterval= setInterval(function () {
  if($(".note")[$(".note").length-1]&&$(".note")[$(".note").length-1].innerText>10){
    getBetterTittle();
    clearInterval(startInterval);
  }
  }, 1000);
}

//



//   axiosQuery()
//   console.log(h4Tittle);
//   console.log(h3Tittle);
//
// Define an array of labels for description types.
// var labels = ["malo","bueno"];
// whichTittle.addLabels(labels);

function AddNewDataTextClassify(dataSet,tolabel,newlabel){

if (newlabel) {
  whichTittle.addLabels(newlabel);
}
  whichTittle.addData(tolabel, dataSet);
}

function tryClassify(textToTryToClass){
  var text = whichTittle.classify(textToTryToClass);
console.log("ES: " + text + "!");
}
