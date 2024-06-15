const { signup, login, google } = require('../controllers/authController');

const router = require('express').Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/google', google);

module.exports = router;