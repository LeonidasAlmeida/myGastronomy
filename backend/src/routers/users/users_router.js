const express = require('express');
const router = express.Router();
const users_create_controller = require('../../controllers/users/users_create_controller');
const user_delete_controller = require('../../controllers/users/users_delete_controller');
const user_update_controller = require('../../controllers/users/users_update_controller');
const user_geter_controller = require('../../controllers/users/users_geter_controller');
const user_get_id_controller = require('../../controllers/users/users_get_id_controller');
//POST | CREATE USERS
router.post('/create_users', users_create_controller);
//DELETE | DELETE USERS
router.delete('/delete_users/:id', user_delete_controller);
//PUT | UPDATE USERS
router.put('/update_users/:id', user_update_controller);
//GET | GET USERS
router.get('/get_users', user_geter_controller)
//POST | GET USER BY ID
router.post('/get_id_user/:id', user_get_id_controller);

module.exports = router;