
exports.sendWelcomeEmail = function (email, name) {
  // console.log('--- in mailer > sendWelcomeEmail');

  if (!email || !name) {
    return Promise.reject(new Error('Invalid input'));
  }

  const body = `Dear ${name}, welcome to our family!`;

  return sendEmail(email, body);
}

exports.sendPasswordResetEmail = function (email) {
  // console.log('--- in mailer > sendPasswordResetEmail');

  if (!email) {
    return Promise.reject(new Error('Invalid input'));
  }

  const body = 'Please click http://some_link to reset your password.';

  return sendEmail(email, body);
}

function sendEmail(email, body) {
  // console.log('--- in mailer > sendEmail');

  if (!email || !body) {
    return Promise.reject(new Error('Invalid input'));
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Email sent!');

      // return reject(new Error('Fake error));
      return resolve('Email sent');
    }, 100);
  });
}
