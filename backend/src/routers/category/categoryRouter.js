const express = require('express');
const router = express.Router();
const category_create_controller = require('../../controllers/categorys/category_create_controller');
const category_delete_controller = require('../../controllers/categorys/category_delete_controller');
const category_update_controller = require('../../controllers/categorys/category_update_controller');
const category_geter_controller = require('../../controllers/categorys/category_geter_controller');
const category_get_id_controller = require('../../controllers/categorys/category_get_id_controller');
//POST | CREATE USERS
router.post('/create_category', category_create_controller);
//DELETE | DELETE USERS
router.delete('/delete_category/:id',category_delete_controller);
//PUT | UPDATE USERS
router.put('/update_category/:id',category_update_controller);
//GET | GET USERS
router.get('/get_category',category_geter_controller)
//POST | GET USER BY ID
router.post('/get_id_category/:id',category_get_id_controller);

module.exports = router;