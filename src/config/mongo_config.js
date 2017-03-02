'use strict';

const MongoClient = require('mongodb').MongoClient;
const f = require('util').format;

const USERNAME = encodeURIComponent('Wuriyanto');
const PASSWORD = encodeURIComponent('12345');
const AUTH_MECHANISM = 'DEFAULT';

const URL = f('mongodb://%s:%s@localhost:27017/latihan1?authMechanism=%s', USERNAME, PASSWORD, AUTH_MECHANISM);

module.exports = (cb) => {
  MongoClient.connect(URL, (err, db) => {
    if(err){
      cb(err, null);
    }
    cb(null, db);
  });
};
