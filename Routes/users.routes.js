const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/users.controller');

router.get('/', usersController.getAllUsers);
router.get('/:userId:/posts', usersController.getPostsByUserId);
router.post('/', usersController.createNewUser);

module.exports = router;
