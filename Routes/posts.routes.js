const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/posts.controller');

router.get('/', postsController.getAllPosts);
router.post('/', postsController.createNewPost);
router.get('/:id', postsController.getPostById);
router.put('/:id', postsController.updatePostById);

module.exports = router;
