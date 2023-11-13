const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const globalErrorHandler = require('./controllers/errorController');

const app = express();

/// Midleware
app.use(morgan('dev'));
app.use(express.json());

/// midleware for static files
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

/// Order matters. It needs to be last in middleware stack
app.all('*', (req, res, next) => {
  // if next receives argument it means it's error
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

/// global error handling middleware
/// When there's four parameter express identifies it as a error handling middleware
app.use(globalErrorHandler);

module.exports = app;
