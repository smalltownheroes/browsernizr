var Modernizr = require('./../../Modernizr');
var testAllProps = require('./../../testAllProps');

/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/

  Modernizr.addTest('boxshadow', testAllProps('boxShadow', '1px 1px', true));

