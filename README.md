#whoshere.js


##A JavaScript Utility for retrieving User/Browser Information

###What's it do?

Rather than writing a bunch of custom functions to get location, IP address, browser information, host information, and JavaScript compliances, ypu can call `whoshere.getInfo()` and get all that good stuff in one fell swoop.

###That sound simple.

Well, that's because it is!

###Dependencies

None!

###Installation

`<script src='whoshere.js'></script>;`

1. Instantiate the instance: `var whoIsHere = new whoshere();`

2. Call the `getInfo` method: `whoIsHere.getInfo( callback );`

###What's the callback for?

Great question. Because much of the `whoshere` plugin relies on asynchronous processes, you must provide a callback so the browser knows what to do with the information once it becomes available. The demo has an example of a custom callback.

###What's asynchronous? 

Hmm, well. Rather than rehash whats already been said a billion times, and much better than I could put it, here's a couple articles:

1. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)

2. [A great Stack Overflow article](http://stackoverflow.com/questions/14220321/how-to-return-the-response-from-an-ajax-call)

###What's next?

Please fork, contribute, and/or submit issues/suggestions. You can do so via github, or you can contact me at [ben@benjamincripps.com](mailto:ben@benjamincripps.com)

