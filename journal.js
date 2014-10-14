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

var _console    = new ConsoleHandler(),
    _available,
    _active;

_active   = {
  'console': _console
};

_available = {
  'console': ConsoleHandler
};

function getRegisteredHandlers_() {
  var keys = Object.keys( _active );

  return keys.map(function( attr ) {
    return _active[attr];
  });
}

function handlerIs_active(handler) {
  return _active[handler] || false;
}

//------------------------------------------------------
// Public
//------------------------------------------------------

//
//------------------------------------------------------
function removeHandler(name) {
  _active[name] = null;
  return true;
}

//
//------------------------------------------------------
function addHandler(name) {
  var Constructor = _available[name] || undefined,
      handler;

  if ( !Constructor ) {
    throw new UnknownHandlerError();
  }

  if ( !handlerIs_active(name) ) {
    return true;
  }

  _active[name] = new Constructor();
  return true;
}

//
//------------------------------------------------------
function setInterest(handlerName, level) {
  if ( !handlerIs_active(handlerName) ) {
    return false;
  }

  _active[handlerName].interest = level;
  return true;
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
