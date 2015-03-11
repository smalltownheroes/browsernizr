var Modernizr = require('./../Modernizr');
var createElement = require('./../createElement');

/*!
{
  "name": "Reverse Ordered Lists",
  "property": "olreversed",
  "notes": [{
    "name": "Impressive Webs article",
    "href": "http://impressivewebs.com/reverse-ordered-lists-html5"
  }],
  "builderAliases": ["lists_reversed"]
}
!*/
/* DOC
Detects support for the `reversed` attribute on the `<ol>` element.
*/

  Modernizr.addTest('olreversed', 'reversed' in createElement('ol'));

