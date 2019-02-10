
exports.add = function (a, b) {
  return a + b;
}

exports.addCallback = function (a, b, callback) {
  setTimeout(() => {
    return callback(null, a + b);
  }, 5000);
}
