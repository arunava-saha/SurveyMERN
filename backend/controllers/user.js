const User = require("../models/userSchema");
const servay = async (req, res, next) => {
  try {
    const { name, email, phone, nationality, gender, address, message } =
      req.body;

    const user = new User({
      name,
      email,
      phone,
      nationality,
      gender,
      address,
      message,
    });
    const savedUser = await user.save();
    return res.status(201).json({ user: savedUser });
  } catch (err) {
    next(err);
  }
};

const getAUser = async (req, res, next) => {
  try {
    const Id = req.params.id;
    const user = await User.findById({ _id: Id });
    res.status(200).json({ data: user });
  } catch (err) {
    next(err);
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (err) {
    next(err);
  }
};

module.exports = { servay, getAUser, getAllUsers };
