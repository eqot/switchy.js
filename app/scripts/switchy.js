(function(switchy) {
  'use strict';

  var MOBILE_PLATFORMS = [
    'iphone',
    'ipod',
    'android mobile',
    'windows phone',
    'firefox mobile',
    'blackberry'
  ];

  var ua = navigator.userAgent.toLowerCase();

  var platform = 'PC';
  for (var i = 0, l = MOBILE_PLATFORMS.length; i < l; i++) {
    var keywords = MOBILE_PLATFORMS[i].split(' ');

    var isMatch = true;
    for (var j = 0, m = keywords.length; j < m; j++) {
      if (ua.indexOf(keywords[j]) === -1) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      platform = 'Mobile';
      break;
    }
  }
  switchy.platform = platform;

  switchy.isMobile = localStorage ? localStorage.getItem('switchy') === 'Mobile' : switchy.platform === 'Mobile';

  switchy.setPlatform = function (value) {
    if (localStorage) {
      localStorage.setItem('switchy', value);
    }
  };
})(window.switchy = window.switchy || {});
