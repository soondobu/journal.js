//  handlers/console.js
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

var DEFAULTS_ = {
  interest: 1
};

var HANDLER_NAME = 'console';

//------------------------------------------------------
// Public
//------------------------------------------------------

//
//------------------------------------------------------
function ConsoleHandler( options ) {
  options = options || DEFAULTS_;
  this.interest = options.interest || 1;
}

//
//------------------------------------------------------
ConsoleHandler.prototype.getName = function() {
  return HANDLER_NAME;
};

//
//------------------------------------------------------
ConsoleHandler.prototype.interested = function(level) {
  return level >= this.interest;
};

//
//------------------------------------------------------
ConsoleHandler.prototype.write = function(level, args) {
  var timestamp,
      prefix;
  if ( this.interested(level) ) {
    timestamp = (new Date()).toString();
    prefix = prefixes[level] || "";
    args.unshift(prefix, timestamp);
    console.log.apply(this, args);
  }
};

//------------------------------------------------------
// Interface
//------------------------------------------------------

module.exports = ConsoleHandler;
