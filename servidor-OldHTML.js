var http = require('http'),
    express=require("express"),
    bodyParser = require('body-parser'),
    os = require('os'),
    ifaces = os.networkInterfaces(),
    engine = require('ejs-mate'),
    fs = require('fs');

var app=express();
app.use(express.static('assets'));


app.set('views', 'views');
app.engine('ejs', engine);
app.set('view engine', 'ejs'); // Nuevo Layout Manager EJS
// app.engine('html', require('ejs').renderFile);//engine Antiguo HTML
//app.set("view engine", "html");//render directamente HTML
app.get("/",function(req,res){
  res.render("bmdevel.html");
//res.render("index.html");
});
app.get("/1.html",function(req,res){
  // res.render("/template/header.html","/template/footer.html");
  // res.render("footer.html","header.html");
  // res.render(;
res.render('test', { what: 'best', who: 'me' });
// res.render("test.ejs");
});
app.get("/2.html",function(req,res){
res.render("2.html");
});
app.get("/bmdevel",function(req,res){

res.render("bmdevel.html");
});
app.get("/menu1",function(req,res){
 res.header("Access-Control-Allow-Origin", "*");
res.render("menuvertical.html");
});
app.listen(8969);

setTimeout(textoIdea, 50);
setTimeout(lineaSeparatoria, 4000);
setTimeout(textoBlack, 5000);
setTimeout(lineaSeparatoria, 6000);
setTimeout(ipInternas, 6250);
setTimeout(burritoSabanero, 6500);

function textoBlack(){
  console.log(`%c
    /$$$$$$$ /$$                  /$$      /$$$$$$$                                  /$$
   | $$__  $| $$                 | $$     | $$__  $$                                | $$
   | $$  \\ $| $$ /$$$$$$  /$$$$$$| $$   /$| $$  \\ $$ /$$$$$$  /$$$$$$  /$$$$$$  /$$$$$$$
   | $$$$$$$| $$|____  $$/$$_____| $$  /$$| $$$$$$$ /$$__  $$|____  $$/$$__  $$/$$__  $$
   | $$__  $| $$ /$$$$$$| $$     | $$$$$$/| $$__  $| $$  \\ $$ /$$$$$$| $$  \\__| $$  | $$
   | $$  \\ $| $$/$$__  $| $$     | $$_  $$| $$  \\ $| $$  | $$/$$__  $| $$     | $$  | $$
   | $$$$$$$| $|  $$$$$$|  $$$$$$| $$ \\  $| $$$$$$$|  $$$$$$|  $$$$$$| $$     |  $$$$$$$
   |_______/|__/\\_______/\\_______|__/  \\__|_______/ \\______/ \\_______|__/      \\_______/
   `, "font-family:monospace");

}
function textoIdea(){
  console.log(`%c


                           dddddddd
      1111111              d::::::d333333333333333
     1::::::1              d::::::3:::::::::::::::33
    1:::::::1              d::::::3::::::33333::::::3
    111:::::1              d:::::d3333333     3:::::3
       1::::1      ddddddddd:::::d            3:::::3 aaaaaaaaaaaaa
       1::::1    dd::::::::::::::d            3:::::3 a::::::::::::a
       1::::1   d::::::::::::::::d    33333333:::::3  aaaaaaaaa:::::a
       1::::l  d:::::::ddddd:::::d    3:::::::::::3            a::::a
       1::::l  d::::::d    d:::::d    33333333:::::3    aaaaaaa:::::a
       1::::l  d:::::d     d:::::d            3:::::3 aa::::::::::::a
       1::::l  d:::::d     d:::::d            3:::::3a::::aaaa::::::a
       1::::l  d:::::d     d:::::d            3:::::a::::a    a:::::a
    111::::::11d::::::ddddd::::::d3333333     3:::::a::::a    a:::::a
    1::::::::::1d:::::::::::::::::3::::::33333::::::a:::::aaaa::::::a
    1::::::::::1 d:::::::::ddd::::3:::::::::::::::33 a::::::::::aa:::a
    111111111111  ddddddddd   ddddd333333333333333    aaaaaaaaaa  aaaa








  `, "font-family:monospace");

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

function burritoSabanero(){
  console.log(`%c
  < Webserver NODEJS iniciado correctamente>
  <entorno LOCALHOST : Puerto 8969    >
   ----------------------------------------
          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||`, "font-family:monospace");

}
