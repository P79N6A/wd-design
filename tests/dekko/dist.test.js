const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('wdd.css')
  .hasFile('wdd.min.css')
  .hasFile('wdd.js')
  .hasFile('wdd.min.js');

// eslint-disable-next-line
console.log('`dist` directory is valid.');
