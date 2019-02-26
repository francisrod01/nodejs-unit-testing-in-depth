const mongoose = require('mongoose');

const User = require('./models/user');

const mailer = require('./mailer');


exports.create = function (data) {
  if (!data || !data.email || !data.name) {
    return Promise.reject(new Error('Invalid arguments'));
  }

  const user = new User(data);

  // console.log('user', user);

  return user.save()
    .then(result => {
      return mailer
        .sendWelcomeEmail(data.email, data.name)
        .then(() => {
          return {
            message: 'User created',
            userId: result.id
          };
        });
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

exports.get = function (id, callback) {
  if (!id) {
    return callback(new Error('Invalid user id'));
  }

  User.findById(id, function (err, result) {
    if (err) {
      return callback(err);
    }

    return callback(null, result);
  });
}

exports.delete = function (id) {
  // return Promise.resolve()
  if (!id) {
    return Promise.reject(new Error('Invalid id'));
  }

  return User.remove({
    _id: id
  });
}

exports.update = async function (id, data) {
  try {
    let user = await User.findById(id);

    for (let prop in data) {
      user[prop] = data[prop];
    }

    const result = await user.save();

    return result;
  }
  catch (err) {
    // console.warn(err);
    return Promise.reject(err);
  }
}

exports.resetPassword = function (email) {
  if (!email) {
    return Promise.reject(new Error('Invalid email'));
  }

  // some operations

  return mailer.sendPasswordResetEmail(email);
}
