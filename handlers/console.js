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
    colors          = require('../colors'),
    levels          = types.levels,
    prefixes        = types.prefixes;

//------------------------------------------------------
// Internal
//------------------------------------------------------

var HANDLER_NAME = 'console';

var DEFAULTS = {
  interest: 1
};


//------------------------------------------------------
// Public
//------------------------------------------------------

//
//------------------------------------------------------
function ConsoleHandler( options ) {
  options = options || DEFAULTS;
  this.interest = options.interest || 1;
  this._colorEnabled = colors.areSupported();
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
      prefix,
      color = types.colors[level] || undefined;
  if ( this.interested(level) ) {
    timestamp = (new Date()).toString();
    prefix = prefixes[level] || "";

    if ( this._colorEnabled && color ) {
      timestamp = colors.make('white', timestamp);
      prefix    = colors.make(color, prefix);
      args      = colors.make(color, args);
    }

    args.unshift(prefix, timestamp);

    console.log.apply(this, args);
  }
};

//------------------------------------------------------
// Interface
//------------------------------------------------------

module.exports = ConsoleHandler;
