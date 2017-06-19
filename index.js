'use strict';

var plugin = require('markdown-it-regexp');


module.exports = function(opts) {
  return plugin(
    // regexp to match
    /~\[([^\]]*)\]\(([^\)]*)\)((?:\|)([^\|]*)(?:\|))?/,

    // this function will be called when something matches
    function(match) {
      var tag = opts.tag || 'div';

      var caption = match[1] || '';
      var url = match[2] || '';
      var stylesString = match[4] || '';

      var styles = stylesString.length > 0 ? stylesString.split(',') : [];

      if (!caption) {
        caption = url;
      }

      var imgTag = '<img src="' + url + '" alt="' + caption + '">';

      var html = imgTag;
      for (var index = styles.length - 1; index >= 0; index--) {
        var style = styles[index];
        html = '<' + tag + ' class="' + style + '">' + html + '</' + tag + '>';
      }

      return html;
    }
  );
};
