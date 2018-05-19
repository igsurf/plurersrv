'use restrict'
let Logger = require('./../../main/util/logger');
let mongoose = require('mongoose'),
  dbURI = 'ds121896.mlab.com:21896/plurer_devil',
  user = 'plurer-owner',
  password = 'Abcd1234'

mongoose.connect('mongodb://' + user + ':' + password + '@' + dbURI);

mongoose.connection.on('connected', function () {
  Logger.successlog.info('CONNECTED: Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
  Logger.errorlog.error('ERROR: Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  Logger.errorlog.error('DISCONNECTED: Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    Logger.errorlog.error('DISCONNECTED: Mongoose default connection disconnected through app termination');    
    process.exit(0);
  });
});