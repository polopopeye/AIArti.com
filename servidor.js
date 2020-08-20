var http = require('http'),
    serverless = require('serverless-http'),
    express=require("express"),
    bodyParser = require('body-parser'),
    os = require('os'),
    ifaces = os.networkInterfaces(),
    engine = require('ejs-mate'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    Markov = require('markov-strings').default,
    WhichX = require("whichx");


var app=express();
app.use(express.json({ limit: 1000000000 })); //1K MB //actualmente 1GB
app.use(express.static('assets'));
app.set('views', 'views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use( bodyParser.json({ limit: 1000000000 }) );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
limit: 1000000000,
  extended: true
}));



//
// mongoose.connect('mongodb://localhost:27017/AIArtiDB', {useNewUrlParser: true,useUnifiedTopology: true});
// const db = mongoose.connection;
// const aiClassSchema = new mongoose.Schema({
//   id: Number,
//   status: String,
//   tittle: String,
//   label: String,
//   note: String,
//   json: String
// });
//
// const aiImportedData = new mongoose.Schema({
//   id: Number,
//   status: String,
//   tittle: String,
//   label: String,
//   note: String,
//   data: String,
//   jsonTittle: String
// });
//
// const aiClass = mongoose.model('SavedData', aiClassSchema,'SavedClassData');
// const aiData = mongoose.model('SavedData2', aiImportedData,'ArticleInputData');
// function aiClassToDB(tittle,label,json,note){
//
//   var aiClassResult = new aiClass({
//     id: Math.floor(Math.random() * 999999999999999999),
//     status: "new",
//     tittle: tittle,
//     note: note,
//     json: json,
//     label: label });
//   console.log(aiClassResult); // 'Silence'
//   // const
//   aiClassResult.save(function (err) {
//    if (err) return console.error(err);
//    console.log("Dato guardado correctamente manin");
//  });
// }
// function aiDataToDB(tittle,label,note,data,jsonTittle){
//
//   var aiDataResult = new aiData({
//     id: Math.floor(Math.random() * 999999999999999999),
//     status: "new",
//     tittle: tittle,
//     label: label,
//     note: note,
//     data: data,
//     jsonTittle:jsonTittle
//      });
//   console.log(aiDataResult); // 'Silence'
//   // const
//   aiDataResult.save(function (err) {
//    if (err) return console.error(err);
//    console.log("Dato guardado correctamente manin");
//  });
// }
//
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// console.log("conectado que mas hay que hacer...");
//
//
//
// });
//
//
//
//
//
//
//
// // END CONFIG
//
// // INI MARKOV MODEL text
//
//
//
//
// app.get("/MotorEngineStart",function(req,res){
// res.render('ejs/ArtiMotor/MotorEngineStart.ejs');
// });
// app.get("/TrytoClassify",function(req,res){
// res.render('ejs/ArtiMotor/TrytoClassify.ejs');
// });
// app.get("/AddData",function(req,res){
//   var actualApi=Math.floor(Date.now() / 1000)*6;//9581855202
// if (req.query.method!=undefined&&req.query.apiK!=undefined&&req.query.apiK==1) {
//
// if (req.query.method=="aiClassList") {
//   aiClass.find(function (err, aiClass) {
//   if (err) return console.error(err);
//   res.send(aiClass);
// })
// }
// if (req.query.method=="aiDataList") {
//   aiData.find(function (err, aiData) {
//   if (err) return console.error(err);
//   res.send(aiData);
// })
// }
//
// }else{
//   res.render('ejs/ArtiMotor/angryShark.ejs');
// }
//
//
// console.log(req.query);
// });
//
//
// app.post("/AddData",function(req,res){
//   var actualApi=Math.floor(Date.now() / 1000)*6;//9581855202
// if (req.body.method!=undefined&&req.body.apiK!=undefined&&req.body.apiK==1) {
//
// if (req.body.method=="aiClassToDB") {
//   if (req.body.tittle&&
//     req.body.json&&
//     req.body.note&&
//     req.body.label) {
//       // aiClassToDB(tittle,label,json,note)
//     aiClassToDB(req.body.tittle,req.body.label,req.body.json,req.body.note);
//     res.render('ejs/ArtiMotor/dbUpdated.ejs');
//   }
// }
// if (req.body.method=="aiDataToDB") {
//   if (req.body.tittle&&
//     req.body.data&&
//     req.body.note&&
//     req.body.label) {
//       // aiClassToDB(tittle,label,json,note)
//     aiDataToDB(req.body.tittle,req.body.label,req.body.note,req.body.data,req.body.jsonTittle);
//     res.render('ejs/ArtiMotor/dbUpdated.ejs');
//   }
// }
//
//
// }else{
//   res.render('ejs/ArtiMotor/angryShark.ejs');
// }
//
// console.log(req.body);
// });
// // app.get("/statusMotor",function(req,res){
// // res.render('ejs/index.ejs');
// // });
// app.get("/scrapeArticle",function(req,res){
//   if (req.query.imported=="1") {
//     // res.render('ejs/ArtiMotor/articleScrapeImported.ejs');
//     var loaded=false;
//
//     aiData.find(function (err, aiData) {
//     if (err) return console.error(err);
//
//     var markov = new Markov(JSON.parse(aiData[0].data), { stateSize: 3})
//     markov.buildCorpus();
//      var markovoptions = {
//         maxTries: 100000, // Give up if I don't have a sentence after 20 tries (default is 10)
//        prng: Math.random // An external Pseudo Random Number Generator if you want to get seeded results
//      }
// var string;
// function newWord(){
// string=markov.generate(markovoptions);
//
// if (string.score <= 1) {
//
// newWord();
// }else{
//   // res.send();
//   console.log(string);
//   loaded=true;
// }
// }
// newWord();
// // console.log(aiData[0].jsonTittle);
//
// // var markov2 = new Markov(JSON.parse(aiData[0].jsonTittle), { stateSize: 2})
// var markov2 = new Markov(JSON.parse(aiData[0].jsonTittle), { stateSize: 2})//maximo a no ser que se limite de otro lado
// markov2.buildCorpus();
//  var markov2options = {
//     maxTries: 100000, // Give up if I don't have a sentence after 20 tries (default is 10)
//    prng: Math.random // An external Pseudo Random Number Generator if you want to get seeded results
//  }
// var string2;
// function newWord2(){
// string2=markov2.generate(markov2options);
//
// console.log("STRING GENERATED");
// if (string2.score>=10||loaded==false) {
// setTimeout(function(){
//   newWord2();
// },500);
//
// }else{
//     console.log(string2);
//     res.send("Titulo:"+string2.string+"<br>Articulo:<br>"+string.string);
//         console.log(string.score);
//         console.log(string2.score);
//
// }
// }
// newWord2();
//
//   });
//   }else{
//     res.render('ejs/ArtiMotor/articleScrape.ejs');
//   }
// });

// FIN


// http.createServer(function(req, res) {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Welcome to the homepage!");
//   }
//
// }).listen(1337, "localhost");
app.get("/login",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/login.php",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/admin.php",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/admin",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/wp-login",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/wp-login.php",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/wp-admin",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/wp-admin.php",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/administrator",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/administrator.php",function(req,res){
  res.render('ejs/ArtiMotor/angryShark.ejs');
});
app.get("/",function(req,res){
res.render('ejs/ArtiMotor/workInProgress.ejs');
});

module.exports.handler = serverless(app);
// app.listen(8968);

setTimeout(lineaSeparatoria, 100);
setTimeout(textoBlack, 1000);
setTimeout(lineaSeparatoria, 1100);
setTimeout(ipInternas, 2000);
setTimeout(burritoSabanero, 2500);

function textoBlack(){
  console.log(`
    BIENVENIDO A
    IA Arti
    Desarrollado por Kenneth Suarez
    kenneth7e7a@gmail.com
   `);

}
function lineaSeparatoria(){
  console.log("________________________________________");
}

function ipInternas(){
  console.log("IP INTERNAS DISPONIBLES");
  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log("< "+ifname + ':' + alias, iface.address+" >");
      } else {
        // this interface has only one ipv4 adress
        console.log("< "+ifname, iface.address+" >");
      }
      ++alias;
    });
  });

}
console.log(os.hostname);
// console.log(os);
function burritoSabanero(){
  console.log(`%c
  < Webserver NODEJS iniciado correctamente>
  <entorno LOCALHOST : Puerto 8080    >
   ----------------------------------------
          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||`, "font-family:monospace");

}
