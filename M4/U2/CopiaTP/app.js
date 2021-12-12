var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { join } = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Declaro estas variables para poder cargar el css tmb con las paginas estaticas
app.use(express.static(__dirname + '/' + 'css'));

//Mis manejadores de ruta

app.get('/', function(req, res, next){
  res.sendFile(join(__dirname,'/public/index.html'))
});

app.get('/nosotros', function(req, res, next){
  res.sendFile(join(__dirname,'/public/nosotros.html'))
});

app.get('/carrito', function(req, res, next){
  res.sendFile(join(__dirname,'/public/carrito.html'))
});

app.get('/contacto', function(req, res, next){
  res.sendFile(join(__dirname,'/public/contacto.html'))
});

app.get('/productos', function(req, res, next){
  res.sendFile(join(__dirname,'/public/productos.html'))
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
