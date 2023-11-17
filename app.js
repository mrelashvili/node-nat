/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const globalErrorHandler = require('./controllers/errorController');

const app = express();

/// set Security HTTP headers
app.use(helmet());

/// Midleware for loggin
app.use(morgan('dev'));

/// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // converting to mms
  message: 'Too many request FROM this IP'
});

app.use('/api', limiter);
//// Body parser, reading data from body into req.body - middleware.
app.use(express.json({ limit: '10kb' }));

// Data sanitization agains NoSQL query injection
/// For example, without this middleware we can login with only password like an admin email: ({ "$gt": ""})
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());

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
