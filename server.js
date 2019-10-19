require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var port = process.env.PORT || 3000;

var app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
var campusArtRouter = require('./routes/campusArt');
var moodyArtRouter = require('./routes/moodyArt');
var generalRouter = require('./routes/general');
// Routing
app.use('/campusArt', campusArtRouter);
app.use('/moodyArt', moodyArtRouter);
app.use('/general', moodyArtRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port);
console.log("App listening on port " + port);