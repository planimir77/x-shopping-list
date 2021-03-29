const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { itemController } = require('../controllers');

// middleware that is specific to this router

router.get('/:id', auth(), itemController.getItem);
router.get('/by-name/:itemName', auth(), itemController.getItemByName);

router.put('/subscribe', itemController.subscribe);
router.put('/unsubscribe', itemController.unsubscribe);
router.post('/create', auth() ,itemController.createItem);

router.put('/:Id', auth(), itemController.editItem);
router.delete('/:Id', auth(), itemController.deleteItem);

module.exports = router