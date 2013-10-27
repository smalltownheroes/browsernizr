var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');
require('./../lib/test/canvastext');

/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
/* DOC

Detects support for emoji character sets.

*/

  Modernizr.addTest('emoji', function() {
    if (!Modernizr.canvastext) return false;
    var node = createElement('canvas'),
    ctx = node.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '32px Arial';
    ctx.fillText('\ud83d\ude03', 0, 0); // "smiling face with open mouth" emoji
    return ctx.getImageData(16, 16, 1, 1).data[0] !== 0;
  });

