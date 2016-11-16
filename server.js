var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;


function logger(req, res, next) {
    console.log(new Date()+ ' : '+req.method + ' for route ' + req.originalUrl);
    next();
}

app.use(logger);

/*
app.get('/',function (request, response) {
    response.send('hello express');
});
*/
app.get('/about', function (req, res, next) {
   // console.log('about route hit');
    next();
}, function (request, response) {
    response.send('about page');
});

var publicDir = __dirname + '/public';
app.use(express.static(publicDir));

app.listen(PORT, function () {
    console.log('server started');
});