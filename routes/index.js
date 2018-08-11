const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./../controllers');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/rooms/:id/bookings', ctrl.bookings.post);
router.get('/rooms/:id/bookings', ctrl.bookings.get);
router.put('/rooms/:id/bookings', ctrl.bookings.put);
router.delete('/rooms/:id/bookings', ctrl.bookings.delete);

module.exports = router;
