var Modernizr = require('./../../Modernizr');
var testAllProps = require('./../../testAllProps');

/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/

  Modernizr.addTest('ellipsis', testAllProps('textOverflow', 'ellipsis'));

