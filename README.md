
### Why?

Most small projects can benefit from a really simple wrapper around console.log,
providing nice facilities for different types of messages and automatically including a timestamp.

Feel free to suggest improvements or provide feedback!

### Installation

journal.js is on npm. You can install it like any node package:

```
npm install journal-js

```

Then require it when you need it:
```
var journal = require('journal-js');
```


### Usage

Usage is very straightforward:

```
var journal = require('journal-js');

journal.fail("Something critical happened!");
journal.info("Some information!");
journal.debug("Only debug useful...");
journal.warn("Uh oh!!!!!");
journal.error("Passing my error callback!");

F Sun Oct 12 2014 22:55:07 GMT-0700 (PDT)  Something critical happened!
I Sun Oct 12 2014 22:55:07 GMT-0700 (PDT)  Some information!
D Sun Oct 12 2014 22:55:07 GMT-0700 (PDT)  Only debug useful...
W Sun Oct 12 2014 22:55:07 GMT-0700 (PDT)  Uh oh!!!!!
E Sun Oct 12 2014 22:55:07 GMT-0700 (PDT)  Passing my error callback!

```

Changing log levels can be done like this:

```
journal.setInterest("console", journal.levels.WARN);

journal.fail("Something critical happened!");
journal.info("Some information!");
journal.debug("Only debug useful...");
journal.warn("Uh oh!!!!!");
journal.error("Passing my error callback!");
```

Which would only result in the following output, since the interest has been
set to only allow certain levels and higher:

```
F Sun Oct 12 2014 22:55:07 GMT-0700 (PDT)  Something critical happened!
W Sun Oct 12 2014 22:55:07 GMT-0700 (PDT)  Uh oh!!!!!



```

### License (MIT)

journal.js Copyright (C) 2014 by Taylor Russ

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
