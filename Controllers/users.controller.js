const { User, Post } = require('../Models/');
const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      success: true,
      message: 'users fetched successfully',
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
    });
    throw boom.boomify(err, { statusCode: 500 });
  }
};

const createNewUser = async (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const createdUser = await User.create(newUser);
    res.status(201).json({
      success: true,
      message: 'user created successfully',
      data: createdUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
    });
    throw boom.boomify(err, { statusCode: 500 });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
};
