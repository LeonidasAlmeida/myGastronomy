const express = require('express');
const router = express.Router();
const category_create_controller = require('../../controllers/categorys/category_create_controller');
const restaurant_delete_controller = require('../../controllers/restaurants/restaurant_delete_controller');
const restaurant_update_controller = require('../../controllers/restaurants/restaurant_update_controller');
const restaurant_geter_controller = require('../../controllers/restaurants/restaurant_geter_controller');
const restaurant_get_id_controller = require('../../controllers/restaurants/restaurant_get_id_controller');
//POST | CREATE USERS
router.post('/create_category', category_create_controller);
//DELETE | DELETE USERS
router.delete('/delete_restaurants/:id',restaurant_delete_controller);
//PUT | UPDATE USERS
router.put('/update_restaurants/:id',restaurant_update_controller);
//GET | GET USERS
router.get('/get_restaurants',restaurant_geter_controller)
//POST | GET USER BY ID
router.post('/get_id_restaurants/:id',restaurant_get_id_controller);

module.exports = router;