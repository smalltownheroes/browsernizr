var Modernizr = require('./../../Modernizr');
var modElem = require('./../../modElem');

/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/

  Modernizr.addTest('cssexunit', function () {
    var elemStyle = modElem.elem.style;
    try {
      elemStyle.fontSize = '3ex';
    } catch (e) { }
    return elemStyle.fontSize.indexOf('ex') !== -1;
  });

