
var util = require('util');



var ERRORS = {};

var errFactory = function(name, message) {

  function cTor () {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = name;
    this.message = message;
  }

  util.inherits(cTor, Error);
  return cTor;
};


ERRORS.UnknownError = errFactory("Unknown error",
                                 "An unknown error has occurred.");
module.exports = ERRORS;
