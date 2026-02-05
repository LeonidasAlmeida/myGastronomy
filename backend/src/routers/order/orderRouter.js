const express = require('express');
const order_create_controller = require('../../controllers/orders/orders_create_controller');
const order_geter_controller = require('../../controllers/orders/orders_geter_controller');
const order_get_id_controller = require('../../controllers/orders/orders_get_id_controller');
const order_update_controller = require('../../controllers/orders/orders_update_controller');
const order_delete_controller = require('../../controllers/orders/orders_delete_controller');

const router = express.Router();
//POST | CREATE USERS
router.post('/create_order', order_create_controller);
//GET | GET ITEMS
router.get('/get_order',order_geter_controller);
//GET | GET order BY ID
router.post('/get_id_order/:id',order_get_id_controller);
//PUT | UPDATE order
router.put('/update_order/:id',order_update_controller);
//DELETE | DELETE order
router.delete('/delete_order/:id',order_delete_controller);
module.exports = router;