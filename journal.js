var types     = require('./types'),
    levels    = types.levels,
    prefixes  = types.prefixes;


var interest_ = 1;

function isInterested_(level) {
  return level >= interest_;
}

function setInterest(level) {
  interest_ = level;
}

function write(level, args) {
  var timestamp,
      prefix;
  if ( isInterested_(level) ) {
    timestamp = (new Date()).toString();
    prefix = prefixes[level] || "";
    args.unshift(prefix, timestamp);
    console.log.apply(this, args);
  }
}

var debug = function() {
  write(levels.DEBUG, Array.prototype.slice.call(arguments));
};

var info = function() {
  write(levels.INFO, Array.prototype.slice.call(arguments));
};

var error = function() {
  write(levels.ERROR, Array.prototype.slice.call(arguments));
};

var warn = function() {
  write(levels.WARN, Array.prototype.slice.call(arguments));
};

var fail = function() {
  write(levels.FAIL, Array.prototype.slice.call(arguments));
};

module.exports = {

  // Log handlers
  debug:    debug,
  info:     info,
  error:    error,
  warn:     warn,
  fail:     fail,

  // Set to filter only specified level or higher.
  setInterest: setInterest,

  // Enumeration of levels for ease of use.
  levels: levels
};
