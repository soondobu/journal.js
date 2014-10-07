
### Why?

Most small projects can benefit from a really simple wrapper around console.log,
providing nice facilities for different types of messages and automatically including a timestamp.

Also, I usually end up recreating something like this for every project and thought I'd just make
a canonical version.

Feel free to suggest improvements or provide feedback!

### Usage

Very simple:

```
var journal = require ('journal');

journal.fail("Something critical happened!");
journal.info("Some information!");
journal.debug("Only debug useful...");
journal.warn("Uh oh!!!!!");
journal.error("Passing my error callback!");

F Mon Oct 06 2014 21:03:02 GMT-0700 (PDT) Something critical happened!
I Mon Oct 06 2014 21:03:02 GMT-0700 (PDT) Some information!
D Mon Oct 06 2014 21:03:02 GMT-0700 (PDT) Only debug useful...
W Mon Oct 06 2014 21:03:02 GMT-0700 (PDT) Uh oh!!!!!
E Mon Oct 06 2014 21:03:02 GMT-0700 (PDT) Passing my error callback!


```

### License (MIT)

journal.js Copyright (C) 2014 by Taylor Russ

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
