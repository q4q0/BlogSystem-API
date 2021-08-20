const { Post } = require('../Models/');

const getAllPosts = async (req, res) => {
  try {
    let query = Post.findAll();
    if (!query) {
      return res.status(404).json({
        success: false,
        message: 'no found posts in the database',
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      message: 'posts fetched successfully',
      data: query,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.errors[0].message,
    });
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.postId;
  try {
    const query = await Post.findOne(postId);
    if (!query) {
      return res.status(404).json({
        success: false,
        message: 'post not found in the database',
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      message: 'post fetched successfully',
      data: query,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};

const createNewPost = async (req, res) => {
  const newPost = {
    title: req.body.title,
    body: req.body.body,
  };
  try {
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

const updatePostById = async (req, res) => {
  const id = req.params.id;
  const updatedPost = {
    title: req.body.title,
    body: req.body.body,
  };
  try {
    const post = await Post.update(updatedPost, {
      where: {
        id: id,
      },
    });
    if (!post[0]) {
      return res.status(404).json({
        success: false,
        message: 'post not found in the database',
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      message: 'post updated successfully',
      data: updatedPost,
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
        message: 'something went wrong',
        error: err,
      });
    }
  }
};

const deletePostById = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.destroy({ where: { id: id } });
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'post not found in the database',
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      message: 'post deleted successfully',
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePostById,
  deletePostById,
};
