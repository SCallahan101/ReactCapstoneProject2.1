'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

const StorytellerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  email: {type: String, default: ''}
});

StorytellerSchema.methods.serialize = function() {
  return {
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email
  };
};

StorytellerSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

StorytellerSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 8);
};

const Storyteller = mongoose.model('Storyteller', StorytellerSchema);

module.exports = {Storyteller};
