var proxyScrap=[
  "http://127.0.0.1:8967",
  "https://cors-anywhere.herokuapp.com/"
];

var SourceTittle=[
{
  url:proxyScrap[0]+"/https://news.google.com/topstories?hl=es-419&gl=MX&ceid=MX:es-419",
  name:"Google News Mèxico"
},
{
  url:proxyScrap[0]+"/https://news.google.com/topstories?hl=es-419&gl=AR&ceid=AR:es-419",
  name:"Google News Argentina"
}
];



var el1 = $( '<div></div>' );

var h3Tittle,h4Tittle;
// All the anchor elements
//h3, h4
function axiosQuery(url,el,select1,select2,select3){
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
        <div class="col note"  note="yes" noteV="" noteT="" target="#${select1}-${i}" id="${i}-note-${select1}">
        </div>
        </div>
        `;
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
        <div class="col note" note="yes" noteV="" noteT="" target="#${select2}-${i}" id="${i}-note-${select2}">
        </div>
        </div>
        `;
        getTitleNote(select2R[i].innerText,"#"+i+"-note-"+select2,i,"-note-"+select2);

      }
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

notesArray=[];
var largestNote,largestTittle;
function getBetterTittle(){
  getDATA=$(".note[note='yes']")

  for (var i = 0; i < getDATA.length; i++) {
    var note=parseInt(getDATA[i].innerText);
    if (isNaN(note)) {
      console.log("ERROR");
    }else{
      notesArray.push(note);
    }
  }
   largestNote = notesArray.sort((a,b)=>a-b).reverse()[0];
   largestTittle = $(".note[noteV="+largestNote+"]").attr("noteT")
    $("#betterTittle").html(largestTittle);

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
 $(id).html(resultStats);
 $(id)[0].noteV=resultStats;
 $(id)[0].noteT=titulo;

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

setTimeout(function(){
  axiosQuery(SourceTittle[0].url,el1,"h3","h4");
// axiosQuery(,el1,"h3","h4");
},300);


//



//   axiosQuery()
//   console.log(h4Tittle);
//   console.log(h3Tittle);
//
var whichTittle = new WhichX();
// Define an array of labels for description types.
var labels = ["malo","bueno"];
whichTittle.addLabels(labels);

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
