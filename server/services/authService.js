const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const User = require('../models/User');

exports.register = async (username, email, password, role) => {
  const user = await User.create({ username, email, password, role });
  return user;
};

exports.login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Invalid email or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid email or password');

  const token = jwt.generateToken(user.id);
  return token;
};
