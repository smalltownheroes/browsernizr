var Modernizr = require('./../../Modernizr');
var testStyles = require('./../../testStyles');

/*!
{
  "name": "CSS :last-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "lastchild",
  "tags": ["css"],
  "builderAliases": ["css_lastchild"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/304"
  }]
}
!*/

  testStyles('#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}', function( elem ) {
    Modernizr.addTest('lastchild', elem.lastChild.offsetWidth > elem.firstChild.offsetWidth);
  }, 2);

