const express = require('express');
const router = express.Router();
const item_create_controller = require('../../controllers/items/items_create_controller');
const item_geter_controller = require('../../controllers/items/items_geter_controller');
const item_get_id_controller = require('../../controllers/items/items_get_id_controller');
const item_update_controller = require('../../controllers/items/items_update_controller');
const item_delete_controller = require('../../controllers/items/items_delete_controller');
//POST | CREATE USERS
router.post('/create_item', item_create_controller);
//GET | GET ITEMS
router.get('/get_items',item_geter_controller);
//GET | GET ITEM BY ID
router.post('/get_id_item/:id', item_get_id_controller);
//PUT | UPDATE ITEM
router.put('/update_item/:id',item_update_controller);
//DELETE | DELETE ITEM
router.delete('/delete_item/:id',item_delete_controller);
module.exports = router;