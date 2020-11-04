'use strict'

let mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_bloc', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('la conexion a la base de datos, se ha realizado ok!!!');

    });