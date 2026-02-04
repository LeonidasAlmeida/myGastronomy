const express = require('express');
const router = express.Router();

const users_create_controller = require('../../controllers/users/users_create_controller');
router.post('/create_users', users_create_controller);
module.exports = router;