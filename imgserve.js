var express=require('express');
var imgserve=express();

imgserve.use(express.static(__dirname + '/public'));

var server=imgserve.listen(8887,function(){
    console.log('Servidor web iniciado');
});