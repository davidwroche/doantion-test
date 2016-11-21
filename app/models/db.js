/**
 + * Created by Tosh on 10/10/2016.
 + */
'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var dbURI = 'mongodb://donationuser:donationuser@ds057806.mlab.com:57806/donation';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
  });

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
  });

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
  });
