const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/users.controller');
const postsController = require('../Controllers/posts.controller');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createNewUser);

module.exports = router;
