var Modernizr = require('./../../Modernizr');
var testAllProps = require('./../../testAllProps');

/*!
{
  "name": "CSS text-align-last",
  "property": "textalignlast",
  "tags": ["css"],
  "knownBugs": ["IE does not support the 'start' or 'end' values."],
  "notes": [{
      "name": "Quicksmode",
      "href": "http://www.quirksmode.org/css/text/textalignlast.html"
    },{
      "name": "MDN",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"
    }]
}
!*/

  Modernizr.addTest('textalignlast', testAllProps('textAlignLast'));

