const { Post } = require('../Models/');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json({
      success: true,
      message: 'posts fetched successfully',
      data: posts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.errors[0].message,
    });
  }
};

const getPostById = async (req, res) => {};

const createNewPost = async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
    };
    const createdPost = await Post.create(newPost);
    res.status(200).json({
      success: true,
      message: 'post created successfully',
      data: createdPost,
    });
  } catch (err) {
    if (
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
        error: err.errors[0].message,
      });
    }
  }
};

const updatePostById = async (req, res) => {};

const deletePostById = async (req, res) => {};

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePostById,
  deletePostById,
};
