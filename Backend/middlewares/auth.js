const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                return res.status(401).json('Please, authenticate');
            } else {
                const user = await User.findById(decodedToken.id);

                if (!user) {
                    return res.status(404).json({ error: 'No user' });
                }

                req.token = token;
                req.user = user;
                next();
            }
        });
    } else {
        return res.status(401).json('Please, authenticate');
    }
}

module.exports = { authenticate }