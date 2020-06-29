// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
	// res.redirect('https://google.com')
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});
app.get('/contact',function(req,res){
	res.render('pages/contact')
})

app.get('/add/',function(req,res){
	var x = req.query.firstNumber
	var y = req.query.secondNumber
	var z= x+y
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