var loaderUtils = require("loader-utils");

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
  this.cacheable();

  return [
    'var url = require(' + loaderUtils.stringifyRequest(this, '!!' + remainingRequest) + ');',
    'var img = new Image();',
    'img.src = url;',
    'module.exports = url;'
  ].join('\n');
};

