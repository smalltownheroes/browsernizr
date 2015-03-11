var Modernizr = require('./../Modernizr');
var domPrefixes = require('./../domPrefixes');
var prefixed = require('./../prefixed');

/*!
{
  "name": "Fullscreen API",
  "property": "fullscreen",
  "caniuse": "fullscreen",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/API/Fullscreen"
  }],
  "polyfills": ["screenfulljs"],
  "builderAliases": ["fullscreen_api"]
}
!*/
/* DOC
Detects support for the ability to make the current website take over the user's entire screen
*/

  // github.com/Modernizr/Modernizr/issues/739
  Modernizr.addTest('fullscreen', !!(prefixed('exitFullscreen', document, false) || prefixed('cancelFullScreen', document, false)));

