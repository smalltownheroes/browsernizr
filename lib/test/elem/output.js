var Modernizr = require('./../../Modernizr');
var createElement = require('./../../createElement');

/*!
{
  "name": "output Element",
  "property": "outputelem",
  "tags": ["elem"],
  "builderAliases": ["elem_output"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-output-element"
  }]
}
!*/

  Modernizr.addTest('outputelem', 'value' in createElement('output'));

