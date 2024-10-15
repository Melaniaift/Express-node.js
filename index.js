const debug = require('debug')('app:customLogger');
const config = require('config');
const morgan = require('morgan')
const helmet = require('helmet');
const Joi = require('joi');
const courses = require('./routes/courses')
const home = require('./routes/home')
const logger = require('./middleware/logger');
const express = require('express');
const app = express();

debug(`Application Name: ${config.get('name')}`);
debug(`Mail Server: ${config.get('mail.host')}`);
debug(`Mail Password: ${config.get('mail.password')}`);

debug(`NODE_ENV: ${process.env.NODE_ENV}`); // undefined
debug(`app: ${app.get('env')}`)

app.set('view engine', 'pug')
app.set('views', './views') // default
//adding a piece of middleware 
app.use(express.json())
app.use(logger)

app.use(express.urlencoded({ extended: true })) // reqbody is populated as json
app.use(express.static('public'))
app.use(helmet())
app.use('/api/courses', courses)
app.use('/', home)


if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    debug('morgan enabled')
}

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => debug(`Listening on port ${port}...`));
