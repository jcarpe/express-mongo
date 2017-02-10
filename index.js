'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/test');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongoose connected to test db');
});

let fishSchema = new Schema({
      name: String,
      type: String,
      size: String,
    }),
    Fish = mongoose.model('Fish', fishSchema),
    silence = new Fish({ name: 'Silence' });

console.log(silence.name);
