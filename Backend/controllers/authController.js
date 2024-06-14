const User = require("../models/user");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  const maxAge = 60 * 60 * 24 * 3;

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const signup = async (req, res) => {
  const { email, displayName, username, password, dob } = req.body;

  if (!email || !displayName || !username || !password || !dob)
    return res.status(400).json({ error: "Input fields cannot be empty" });

  if (!validator.isEmail(email))
    return res.status(400).json({ error: "Invalid email address" });

  if (password.length < 8)
    return res.status(400).json({
      error: "Password length must be equal to or more than 8 characters",
    });

  const emailExists = await User.findOne({ email });

  if (emailExists)
    return res.status(400).json({ error: "Email exists already" });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    displayName,
    username,
    password: hash,
    dob,
  });

  const token = createToken(user._id);

  return res
    .status(201)
    .json({ message: "Registration successful", user, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: "Email does not exist" });

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch)
    return res.status(400).json({ error: "Password is incorrect" });

  const token = createToken(user._id);

  return res.status(200).json({ message: "Login successful", user, token });
};

const google = async (req, res) => {
  const { displayName, email, photoURL, dob } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    const token = createToken(user._id);
    return res.status(200).json({ message: "Login successful", user, token });
  } else {
    const generatePWD =
      Math.random().toString(36).slice(-8) +
      Math.random().toString(36).slice(-8);

    const hashedPwd = bcrypt.hashSync(generatePWD, 10);

    const username =
      displayName.split(" ").join("").toLowerCase() +
      Math.floor(Math.random() * 10000).toString();

    const newUser = await User.create({
      email,
      displayName,
      username,
      password: hashedPwd,
      dob,
      photoURL,
    });
    await newUser.save();
    const token = createToken(newUser._id);

    return res
      .status(201)
      .json({ message: "Registration successful", newUser, token });
  }
};

module.exports = {
  login,
  signup,
  google,
};
