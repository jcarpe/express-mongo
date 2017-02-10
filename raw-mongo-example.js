'use strict';

let MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/admin', function (err, db) {
  if (err) throw err;
  db.authenticate('jcarpe', 'M0ng0', function (err, results) {
    if (err) throw err;
    db.collection('system.users').find().toArray(function(err, docs) {
      if (err) throw err;
      console.log(docs);
    });
  });
});
