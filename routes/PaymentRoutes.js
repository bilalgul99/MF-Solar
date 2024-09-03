const express = require('express');
const { AuthenticateUser } = require("../middleware/Authenticate");
const { Makepayment, getStripeKey } = require('../controllers/paymentController');
const pay_router = express.Router();


pay_router.route('/payment').post(AuthenticateUser, Makepayment);

pay_router.route('/stripekey').get(getStripeKey);




module.exports = pay_router