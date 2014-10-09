var types           = require('./types'),
    levels          = types.levels,
    ConsoleHandler  = require('./handlers/console');

// Initial loading will register a console handler
// and any other defaults (handlers are mutable though).
var handlers_ = (function() {
  var ch    = new ConsoleHandler(),
      arr   = [];
  arr.push(ch);
  return arr;
})();

function setInterest(handlerName, level) {
  handlers_.forEach(function(obj, idx, arr) {
    if ( obj.getName() === handlerName ) {
      obj.interest = level;
    }
  });
}

function dispatch(level, args) {
  handlers_.forEach(function(obj, idx, arr) {
    obj.write(level, args);
  });
}

function debug() {
  dispatch(levels.DEBUG, Array.prototype.slice.call(arguments));
}

function info() {
  dispatch(levels.INFO, Array.prototype.slice.call(arguments));
}

function error() {
  dispatch(levels.ERROR, Array.prototype.slice.call(arguments));
}

function warn() {
  dispatch(levels.WARN, Array.prototype.slice.call(arguments));
}

function fail() {
  dispatch(levels.FAIL, Array.prototype.slice.call(arguments));
}

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
  levels: levels
};
