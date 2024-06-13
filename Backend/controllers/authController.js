const User = require('../models/user');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    const maxAge = 60 * 60 * 24 * 3;

    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge,
    });
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: 'Email does not exist' });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) return res.status(400).json({ error: 'Password is incorrect' });

    const token = createToken(user._id);

    return res.status(200).json({ error: 'Login successful', user, token });
}

module.exports = {
    login,
}