var Modernizr = require('./../../Modernizr');
var createElement = require('./../../createElement');

/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
/* DOC
Detects if an audio element can automatically restart, once it has finished
*/

  Modernizr.addTest('audioloop', 'loop' in createElement('audio'));

