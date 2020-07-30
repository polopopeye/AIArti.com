var http = require('http'),
    express=require("express"),
    bodyParser = require('body-parser'),
    os = require('os'),
    ifaces = os.networkInterfaces(),
    engine = require('ejs-mate'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    WhichX = require("whichx");

var app=express();
app.use(express.static('assets'));
app.set('views', 'views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// END CONFIG


// app.get("/",function(req,res){
// res.render('ejs/index.ejs');
// });



app.get("/MotorEngineStart",function(req,res){
res.render('ejs/ArtiMotor/MotorEngineStart.ejs');
});
// app.get("/statusMotor",function(req,res){
// res.render('ejs/index.ejs');
// });



app.listen(8968);

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
