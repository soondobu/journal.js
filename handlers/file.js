//  handlers/file.js
//
//
//
//
//------------------------------------------------------

//------------------------------------------------------
// Dependencies
//------------------------------------------------------

var types           = require('../types'),
    levels          = types.levels,
    prefixes        = types.prefixes;

//------------------------------------------------------
// Internal
//------------------------------------------------------

var HANDLER_NAME = "file",
    DEFAULTS_    = {};

//------------------------------------------------------
// Public
//------------------------------------------------------

//
//------------------------------------------------------
function FileHandler( options ) {
  options = options || DEFAULTS_;
  this.interest = options.interest || 1;
}

//
//------------------------------------------------------
FileHandler.prototype.getName = function() {
  return HANDLER_NAME;
};

//
//------------------------------------------------------
FileHandler.prototype.interested = function(level) {
  return level >= this.interest;
};

//
//------------------------------------------------------
FileHandler.prototype.write = function(level, args) {
  return;
};

//------------------------------------------------------
// Interface
//------------------------------------------------------

module.exports = FileHandler;
