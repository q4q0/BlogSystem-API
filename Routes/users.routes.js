const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/users.controller');

router.get('/', usersController.getAllUsers);
router.get('/:id/posts', usersController.getPostsByUserId);
router.post('/register', usersController.createNewUser);

module.exports = router;
