# markdown-it-contained-image

> Plugin for creating images nested in HTML elements for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

Derived from https://github.com/hhhonzik/markdown-it-relativelink.

## Install

node.js, browser:

```sh
npm install markdown-it-contained-image --save
bower install markdown-it-contained-image --save
```

## Use

```js
var MarkdownIt = require('markdown-it');
var MarkdownItContainedImages = require('markdown-it-contained-image');

var md = new MarkdownIt();
md.use(MarkdownItContainedImages());

md.render('~[caption](url)|base1,base2|') // => '<p><div class="base1"><div class="base2"><img src="url" alt="caption"></div></div></p>'
```
