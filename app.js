const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const jwtToken = require('./helpers/jwtToken');

const publicRoutes = require('./publicRoutes');

const usersRouter = require('./routes/users');
const employeesRouter = require('./routes/employees');
const accessRouter = require('./routes/access');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use((req, res, next) => {
  if (publicRoutes[req.method].some(re => re.test(req.path))) next();
  else {
    /*
     * if you have the token, then you are authorized to do everything
     * almost for now :-)
     */

    try {
      const auth = req.headers.authorization;
      const parts = auth.split(' ');

      if (parts.length !== 2)
        throw new Error('Unexpect request authorization header');
      if (parts[0] !== 'Bearer')
        throw new Error('Request authorization header invalid');

      const token = parts[1];

      const data2 = jwtToken.decode(token);
      // eslint-disable-next-line no-console
      console.log(data2);

      if (jwtToken.validate(token)) next();
      else throw new Error('Invalid token');
    } catch (err) {
      res.status(403).end();
    }
  }
});

app.use('/users', usersRouter);
app.use('/employees', employeesRouter);
app.use('/access', accessRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).end();
});

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500).end();
});

module.exports = app;
