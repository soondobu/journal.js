//  types.js
//
//
//
//
//------------------------------------------------------

//------------------------------------------------------
// Public
//------------------------------------------------------
var prefixes  = {},
    colors    = {},
    levels    = {};

levels = {
  DEBUG:    1,
  INFO:     2,
  ERROR:    3,
  WARN:     4,
  FAIL:     5
};

prefixes[levels.DEBUG  ]  =  "D";
prefixes[levels.INFO   ]  =  "I";
prefixes[levels.ERROR  ]  =  "E";
prefixes[levels.WARN   ]  =  "W";
prefixes[levels.FAIL   ]  =  "F";

colors[levels.DEBUG  ]  =  "grey";
colors[levels.INFO   ]  =  "white";
colors[levels.ERROR  ]  =  "cyan";
colors[levels.WARN   ]  =  "yellow";
colors[levels.FAIL   ]  =  "red";

//------------------------------------------------------
// Interface
//------------------------------------------------------

module.exports = {

  // logs are assigned a level to denote
  // levels of importance of criticality.
  levels: Object.freeze(levels),

  // Line prefixes provide easy visual markers
  // for human parsing and reading, along with
  // helping programmatic filtering.
  prefixes: Object.freeze(prefixes),

  // Colors are used for different log levels
  // if supported in the current context.
  colors: Object.freeze(colors)

};
