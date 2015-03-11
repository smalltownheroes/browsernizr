var Modernizr = require('./../../Modernizr');
var createElement = require('./../../createElement');

/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/

  Modernizr.addTest('videoloop', 'loop' in createElement('video'));

