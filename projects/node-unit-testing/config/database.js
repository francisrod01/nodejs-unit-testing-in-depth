function getURL() {
  if (process.env.NODE_ENV === 'production') {
    return 'mongodb;//localhost:27017/node_unit_testing';
  }
  else {
    return 'mongodb://localhost:27017/node_unit_test_db';
  }
}

module.exports = getURL;
