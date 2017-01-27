'use strict';

let MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
  if (err) throw err;

  db.createCollection('mammals');

  db.collection('mammals').insert({
    name:'Bear',
    size:'large'
  });

  let aCursor = db.collection('mammals').find().toArray(function(err, docs) {
    if (err) throw err;

    console.log(docs);
  });
});
