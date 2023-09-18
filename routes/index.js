const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.get('/send-mail',homeController.sendMail);

module.exports = router;

