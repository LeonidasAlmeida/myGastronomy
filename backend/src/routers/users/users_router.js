const express = require('express');
const router = express.Router();
const users_create_controller = require('../../controllers/users/users_create_controller');
const user_delete_controller = require('../../controllers/users/users_delete_controller');
const user_update_controller = require('../../controllers/users/users_update_controller');
//POST | CREATE USERS
router.post('/create_users', users_create_controller);
//DELETE | DELETE USERS
router.delete('/delete_users/:id', user_delete_controller);
//PUT | UPDATE USERS
router.put('/update_users/:id', user_update_controller);

module.exports = router;