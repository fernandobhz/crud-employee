const GET = require('./get');
const POST = require('./post');
const PUT = require('./put');
const DELETE = require('./delete');

const RegExErrorStart = new Error(
  'Every route validate regex must begins with ^'
);

const RegExErrorEnd = new Error(
  'Every route validate regex must ends with $'
);

const RegExErrorSlash = new Error(
  'Every route validate regex must have a slash after ^'
);

[GET, POST, PUT, DELETE].forEach(arr => {
  arr.forEach(re => {
    const text = re.toString();

    if (!text.startsWith('/^')) throw RegExErrorStart;
    if (!text.startsWith('/^\\/')) throw new Error(RegExErrorSlash);

    if (!text.endsWith('$/')) throw RegExErrorEnd;
  });
});

module.exports = { GET, POST, PUT, DELETE };
