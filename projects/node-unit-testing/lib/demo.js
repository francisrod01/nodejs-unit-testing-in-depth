
exports.add = function (a, b) {
  return a + b;
}

exports.addCallback = function (a, b, callback) {
  setTimeout(() => {
    return callback(null, a + b);
  }, 500);
}

exports.addPromise = function (a, b) {
  // return Promise.reject(new Error('fake error on addPromise'));
  return Promise.resolve(a + b);
}
