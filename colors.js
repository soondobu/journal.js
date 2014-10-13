//  colors.js
//
//
//
//------------------------------------------------------

//------------------------------------------------------
// Dependencies
//------------------------------------------------------


//------------------------------------------------------
// Internal
//------------------------------------------------------
var _colors = {},
    _byteCodes;

_byteCodes  = {
  black:    [30, 39],
  red:      [31, 39],
  green:    [32, 39],
  yellow:   [33, 39],
  blue:     [34, 39],
  magenta:  [35, 39],
  cyan:     [36, 39],
  white:    [37, 39],
  grey:     [90, 39]
};

Object.keys(_byteCodes).forEach(function (key) {
  var val = _byteCodes[key],
      style = [];
  style.begin = '\u001b[' + val[0] + 'm';
  style.end = '\u001b[' + val[1] + 'm';
  _colors[key] = style;
});

//
//------------------------------------------------------
function _isAvailable(name) {
  var color = _colors[name];
  if (color && color.begin && color.end) {
    return true;
  }
  return false;
}

//
//------------------------------------------------------
function _colorString(color, str) {
  return color.begin + str + color.end;
}

//
//------------------------------------------------------
function _colorArray(color, arr) {
  arr.unshift(color.begin);
  arr.push(color.end);
  return arr;
}

//
//------------------------------------------------------
function _getColored(name, target) {
  var color = _colors[name];

  if ( !_isAvailable(name) ) {
    return target;
  }

  if ( Array.isArray(target) ) {
    return _colorArray(color, target);
  }

  return _colorString(color, target);
}

//------------------------------------------------------
// Public
//------------------------------------------------------

//
//------------------------------------------------------
function areSupported() {
  if (process.stdout && process.stdout.isTTY)             return true;
  if (process.platform === 'win32')                       return true;
  if (/^screen|^xterm|color|ansi/.test(process.env.TERM)) return true;
  if (/cygwin|linux/.test(process.env.TERM))              return true;
  return false;
}

//
//------------------------------------------------------
function isAvailable(target) {
  return _isAvailable(target);
}

//
//------------------------------------------------------
function make(colorName, targetObj) {
  return _getColored(colorName, targetObj);
}


//------------------------------------------------------
// Interface
//------------------------------------------------------

module.exports =  {

  // Are colors available on this platform?
  areSupported: areSupported,

  // Is the specified color available?
  isAvailable: isAvailable,

  // Color either an array or a string.
  make: make
};
