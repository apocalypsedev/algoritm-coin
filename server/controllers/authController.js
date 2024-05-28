const authService = require('../services/authService');
const { body, validationResult } = require('express-validator');

exports.profile = async (req, res) => {
  try {
    const { id, username, email, role } = req.user;
    res.json({ id, username, email, role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.register = [
  body('username').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { username, email, password, role } = req.body;
    try {
      const user = await authService.register(username, email, password, role);
      res.status(201).json({ user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];

exports.login = [
  body('email').isEmail(),
  body('password').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    try {
      const token = await authService.login(email, password);
      res.json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];
