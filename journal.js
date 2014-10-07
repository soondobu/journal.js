
function write(prefix, args) {
  var timestamp = (new Date()).toString();
  args.unshift(prefix, timestamp);
  console.log.apply(this, args);
}

var debug = function() {
  write("D", Array.prototype.slice.call(arguments));
};

var info = function() {
  write("I", Array.prototype.slice.call(arguments));
};

var error = function() {
  write("E", Array.prototype.slice.call(arguments));
};

var warn = function() {
  write("W", Array.prototype.slice.call(arguments));
};

var fail = function() {
  write("F", Array.prototype.slice.call(arguments));
};

module.exports = {
  debug: debug,
  info: info,
  error: error,
  warn: warn,
  fail: fail
};
