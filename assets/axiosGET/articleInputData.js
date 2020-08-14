var proxyScrap=[
  "http://127.0.0.1:8967/",
  "https://cors-anywhere.herokuapp.com/"
];
var whichTittle = new WhichX();

// se va a hacer un input de una noticia,
// se va a pillar los links y
// se pillara el texto de esa noticia en la web.
// se mostrará el resultado del input plano aquí.
// para posteriormente guardarlo en una base de datos.

var data;
function getArtiToScrap(){
  var url="http://localhost:8968/AddData?method=aiClassList&apiK=1";
  var axiosparams=new URLSearchParams();
  axios({
    method: 'get',
    url: url,
    data: axiosparams
  }).then(function(response){
console.log(response);
if (response.data.length>0) {
  data=response.data;
$("#infoPage")[0].innerHTML="";
  // for (var i = 0; i < response.data.length; i++) {
  for (var i = 0; i < 1; i++) {
var json=JSON.parse(data[i].json);
for (var k = 0; k < json.length; k++) {
  // json[i].link
  $("#infoPage")[0].innerHTML+=`
  <div class="row">
  <div class="col">
    ${data[i].tittle}
  </div>
  <div class="col">
    ${data[i].note}
  </div>
  <div class="col">
    ${data[i].label}
  </div>
  <div class="col">
  ${json[k].tittle}<br>
   ${json[k].link}

  </div>
  </div>
`;
scrapLink(json[k].link);
// BACKEND


}

}//fin for

  showData();
}
  });
}

getArtiToScrap();



function showData(){
  $("#TopMenuSelect").html(`
    <div class="row">
    <div class="col">
    <h3>Noticias en Cola:${data.length}</h3>
    </div>
    </div>

    `);
}


var linkScrapeResponse;
var dataImported=[];
function scrapLink(link){
  linkScrapeResponse="";
  var url=proxyScrap[0]+link;
  var axiosparams=new URLSearchParams();

  axios({
    method: 'get',
    url: url,
    data: axiosparams
  }).then(function(response){
  console.log(response);
  // console.log(response.data);
linkScrapeResponse=response.data;
  if (linkScrapeResponse.length>100) {
  var result = $( '<div></div>' );
  result.html(linkScrapeResponse);
  for(var j=0; j< $("p",result).length ; j++){
    if ($("p",result)[j].innerText.length>200) {
      dataImported.push($("p",result)[j].innerText);
      console.log($("p",result)[j].innerText);
    }
  };
  }
  });
}

setTimeout(function(){
  console.log("GUARDADO");
  saveImportedData("tittle","label","note",JSON.stringify(dataImported));
},4000)

function saveImportedData(tittle,label,note,data){ //newlabel
       var url="http://localhost:8968/AddData";
      var axiosparams=new URLSearchParams();
      axiosparams.append('method', "aiDataToDB");
      axiosparams.append('tittle', tittle);
      axiosparams.append('label', label);
      axiosparams.append('note', note);
      axiosparams.append('data', data);
      axiosparams.append('apiK', "1");
      axios({
        method: 'post',
        url: url,
        data: axiosparams
      }).then(function(response){

      });
}


// function createNewArti(){
//   var markov = new Markov(dataImported, { stateSize: 1})
//   markov.buildCorpus();
//   var markovoptions = {
//     maxTries: 100000, // Give up if I don't have a sentence after 20 tries (default is 10)
//     prng: Math.random, // An external Pseudo Random Number Generator if you want to get seeded results
//     // filter: (result) => {
//     //   return
//     //     result.string.split(' ').length >= 0 //&& // At least 5 words
//     //     // result.string.endsWith('.')             // End sentences with a dot.
//     // }
//   }
//   console.log(markov.generate(markovoptions).string);
//
// };
