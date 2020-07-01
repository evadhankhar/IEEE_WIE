var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('pages/index');
});
app.get('/about', function(req, res) {
	res.render('pages/about');
});
app.get('/contact',function(req,res){
	res.render('pages/contact')
})
app.get('/add/',function(req,res){
	var x = req.query.firstNumber
	var y = req.query.secondNumber
	var z= Number(x)+Number(y)
	res.send('answer:'+z)
})
app.get('/calcBMI/',function(req,res){
	var x = req.query.weight
	var y = req.query.height
	var z= (Number(x)/(Number(y)*Number(y))).toFixed(2)
	res.send('answer:'+z)
})
app.listen(8080||process.env.PORT);
console.log('8080 is the magic port');
