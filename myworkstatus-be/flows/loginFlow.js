const User = require('../models/user');

async function attemptLogin(req, res) {
  console.log('Attempting login');
  const { email, password } = req.body;

  if (!email || !password) {
    console.log('Missing email or password');
    return res.status(400).json( { message: 'Missing email or password' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    console.log('Email not found');
    return res.status(400).json({ message: 'Email not found' });
  }

  if (password !== user.password) {
    console.log('Invalid password');
    return res.status(400).json({ message: 'Invalid password' });
  }

  console.log('Login successful!');
  res.json({ name: user.name, email: user.email, status: user.status });
}

module.exports = { attemptLogin };
