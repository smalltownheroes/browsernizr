var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');

/*!
{
  "name": "Drag & Drop",
  "property": "draganddrop",
  "caniuse": "dragndrop",
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/2010/WD-html5-20101019/dnd.html"
  }],
  "polyfills": ["dropfile", "moxie", "fileapi"]
}
!*/
/* DOC

Detects support for native drag & drop of elements.

*/

  Modernizr.addTest('draganddrop', function() {
    var div = createElement('div');
    return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
  });

