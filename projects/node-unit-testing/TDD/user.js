exports.getFullAddress = function (user) {
  if (!user.street) {
    return 'Invalid user';
  }

  return `${user.street}, ${user.city}, ${user.province}, ${user.postal}`;
}
