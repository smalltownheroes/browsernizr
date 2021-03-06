var Modernizr = require('./../../Modernizr');
var modElem = require('./../../modElem');

/*!
{
  "name": "CSS Font ch Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "csschunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/

  Modernizr.addTest('csschunit', function () {
    var elemStyle = modElem.elem.style;
    try {
      elemStyle.fontSize = '3ch';
    } catch (e) { }
    return elemStyle.fontSize.indexOf('ch') !== -1;
  });

