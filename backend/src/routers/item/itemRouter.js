const express = require('express');
const router = express.Router();
const item_create_controller = require('../../controllers/items/items_create_controller');
const item_geter_controller = require('../../controllers/items/items_geter_controller');
//POST | CREATE USERS
router.post('/create_item', item_create_controller);
//GET | GET ITEMS
router.get('/get_items',item_geter_controller)

module.exports = router;