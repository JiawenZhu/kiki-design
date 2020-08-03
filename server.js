var express = require("express");
var app     = express();
var path    = require("path");

app.all('/server.js', function (req,res, next) {
   res.status(403).send({
      message: 'Access Forbidden'
   });
});


app.use('/server.js',express.static(path.join(__dirname, 'server.js')));

app.use(express.static(__dirname));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/index.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/cart.html',function(req,res){
  res.sendFile(path.join(__dirname+'/cart.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/checkout.html',function(req,res){
  res.sendFile(path.join(__dirname+'/checkout.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/product-details.html',function(req,res){
  res.sendFile(path.join(__dirname+'/product-details.html'));
  //__dirname : It will resolve to your project folder.
});

var port = Number(process.env.PORT ||3000);

app.listen(port);

console.log("listening");

console.log("Running at Port 3000");