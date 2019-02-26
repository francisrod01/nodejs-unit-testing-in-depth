const crypto = require('crypto');

const config = require('./config');


// foo = 1f0c01e25707f55ed3014d60bd0d0373
exports.getHash = function (stringValue) {
  if (!stringValue || typeof stringValue !== 'string') return null;

  stringValue += '_' + config.secret();

  const hash = crypto.createHash('md5').update(stringValue).digest('hex');

  // console.log('Hash: ', hash);

  return hash;
};

let createHash = () => {
  return {
    update: () => {
      return {
        digest: () => {
          // return hash
        }
      }
    }
  }
}
