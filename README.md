# markdown-it-contained-images

Wikipedia-style relative links.
`[[link|name]]` => `<a href="http://myprefix/link">name</a>`

Derived from https://github.com/hhhonzik/markdown-it-relativelink.

## Install

node.js, browser:

```sh
npm install markdown-it-contained-images --save
bower install markdown-it-contained-images --save
```

## Use

```js
var MarkdownIt = require('markdown-it');
var mdIinternalLinks = require('markdown-it-contained-images');

var md = new MarkdownIt();
md.use(mdIinternalLinks({
  prefix: 'http://example.com/'
}));

md.render('[[link|name]]') // => '<a href="http://example.com/link">name</a>'
```
