const { User, Post } = require('../Models/');
const boom = require('@hapi/boom');

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
    username: req.body.username,
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
    if (err.errors[0].type === 'unique violation') {
      return res.status(409).json({
        success: false,
        error: err.errors[0].message,
      });
    } else if (
      err.errors[0].type === 'Validation error' ||
      err.errors[0].type === 'notNull Violation'
    ) {
      return res.status(400).json({
        success: false,
        error: err.errors[0].message,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: err.errors[0].type,
      });
    }
  }
};

const getPostsByUserId = async (req, res) => {
  const id = req.params.id;
  try {
    const posts = await findAll({
      where: { id: id },
      include: [Post],
    });
    res.status(200).json({
      success: true,
      message: `user with id ${id} posts fetched successfully`,
      data: posts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  getPostsByUserId,
};
