/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const path = require('path');
const fs = require('fs');

const files = fs.readdirSync(__dirname);

files.forEach(file => {
  if (file === 'index.js') return;

  const resource = path.join(__dirname, file);
  const basename = path.basename(resource, '.js');

  exports[basename] = require(resource);
});
