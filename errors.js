//  errors.js
//
//
//
//
//------------------------------------------------------

//------------------------------------------------------
// Dependencies
//------------------------------------------------------

var util        = require('util');

//------------------------------------------------------
// Internal
//------------------------------------------------------

//
//------------------------------------------------------
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

//------------------------------------------------------
// Public
//------------------------------------------------------

var errors = {};

//
//------------------------------------------------------
errors.Unknown          = errFactory("Unknown error",
                                     "An unknown error has occurred.");

//
//------------------------------------------------------
errors.UnknownHandler   = errFactory("Unknown Handler",
                                     "Specified handler is not defined.");


//------------------------------------------------------
// Interface
//------------------------------------------------------
module.exports = errors;
