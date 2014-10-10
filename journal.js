//  journal.js
//
//
//
//
//------------------------------------------------------

//------------------------------------------------------
// Dependencies
//------------------------------------------------------

var types           = require('./types'),
    levels          = types.levels,
    ConsoleHandler  = require('./handlers/console'),
    err             = require('./errors');

//------------------------------------------------------
// Error Declarations
//------------------------------------------------------
var UnknownHandlerError = err.UnknownHandler;

//------------------------------------------------------
// Internal
//------------------------------------------------------

var console_    = new ConsoleHandler(), // default
    available_,
    active_;

active_   = {
  'console': console_
};

//TODO: Abstract handler registration into handlers/index
//      module.
available_ = {
  'console': ConsoleHandler
};

function getRegisteredHandlers_() {
  var keys = Object.keys( active_ );

  return keys.map(function( attr ) {
    return active_[attr];
  });
}

function handlerIsActive_(handler) {
  return active_[handler] || false;
}

//------------------------------------------------------
// Public
//------------------------------------------------------

//
//------------------------------------------------------
function removeHandler(name) {
  active_[name] = null;
}

//
//------------------------------------------------------
function addHandler(name) {
  var Constructor = available_[name] || undefined,
      handler;

  if ( !Constructor ) {
    throw new UnknownHandlerError();
  }

  if ( !handlerIsActive_(name) ) {
    return;
  }

  active_[name] = new Constructor();
}

//
//------------------------------------------------------
function setInterest(handlerName, level) {
  if ( !handlerIsActive_(handlerName) ) {
    return;
  }

  active_[handlerName].interest = level;
}

//
//------------------------------------------------------
function dispatch(level, args) {
  var handlers = getRegisteredHandlers_();

  handlers.forEach(function(obj, idx, arr) {
    obj.write(level, args);
  });
}

//
//------------------------------------------------------
function debug() {
  dispatch(levels.DEBUG, Array.prototype.slice.call(arguments));
}

//
//------------------------------------------------------
function info() {
  dispatch(levels.INFO, Array.prototype.slice.call(arguments));
}

//
//------------------------------------------------------
function error() {
  dispatch(levels.ERROR, Array.prototype.slice.call(arguments));
}

//
//------------------------------------------------------
function warn() {
  dispatch(levels.WARN, Array.prototype.slice.call(arguments));
}

//
//------------------------------------------------------
function fail() {
  dispatch(levels.FAIL, Array.prototype.slice.call(arguments));
}

//------------------------------------------------------
// Interface
//------------------------------------------------------

module.exports = {

  // Log handlers
  debug:    debug,
  info:     info,
  error:    error,
  warn:     warn,
  fail:     fail,

  // Set to filter only specified level or higher
  // for a given handler
  setInterest: setInterest,

  // Enumeration of levels for ease of use
  levels: levels,

  // Add a new handler (type of output)
  addHandler: addHandler,

  // Remove a handler (ie stop logging to file)
  removeHandler: removeHandler
};
