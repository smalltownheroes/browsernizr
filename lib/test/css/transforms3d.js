var Modernizr = require('./../../Modernizr');
var testAllProps = require('./../../testAllProps');
var testStyles = require('./../../testStyles');
var docElement = require('./../../docElement');
require('./../../test/css/supports');

/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/

  Modernizr.addTest('csstransforms3d', function() {
    var ret = !!testAllProps('perspective', '1px', true);
    var usePrefix = Modernizr._config.usePrefixes;

    // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
    //   some conditions. As a result, Webkit typically recognizes the syntax but
    //   will sometimes throw a false positive, thus we must do a more thorough check:
    if ( ret && (!usePrefix || 'webkitPerspective' in docElement.style )) {
      var mq;
      // Use CSS Conditional Rules if available
      if (Modernizr.supports) {
        mq = '@supports (perspective: 1px)';
      } else {
        // Otherwise, Webkit allows this media query to succeed only if the feature is enabled.
        // `@media (transform-3d),(-webkit-transform-3d){ ... }`
        mq = '@media (transform-3d)';
        if (usePrefix ) mq += ',(-webkit-transform-3d)';
      }
      // If loaded inside the body tag and the test element inherits any padding, margin or borders it will fail #740
      mq += '{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}';

      testStyles(mq, function( elem ) {
        ret = elem.offsetLeft === 9 && elem.offsetHeight === 5;
      });
    }

    return ret;
  });

