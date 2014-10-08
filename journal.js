

// Total available default levels.
// logs are assigned as level to denote
// levels of importance of criticality.
var levels = {
  DEBUG:    1,
  INFO:     2,
  ERROR:    3,
  WARN:     4,
  FAIL:     5
};

// What are we currently interested in?
var interest_ = 1;

// Line prefixes provide easy visual markers
// for human parsing and reading, along with
// helping programmatic filtering.
var prefixes = {};
prefixes[levels.DEBUG  ]  =  "D";
prefixes[levels.INFO   ]  =  "I";
prefixes[levels.ERROR  ]  =  "E";
prefixes[levels.WARN   ]  =  "W";
prefixes[levels.FAIL   ]  =  "F";

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
