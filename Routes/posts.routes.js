const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/posts.controller');

router.get('/', postsController.getAllPosts);
router.post('/', postsController.createNewPost);

module.exports = router;
