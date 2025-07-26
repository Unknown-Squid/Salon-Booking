const express = require('express');
const router = express.Router();
const AdminAccountController = require('../Controllers/AdminAccountController');


router.post('/add-admin-account', AdminAccountController.addAdminAccount);

router.post('/get-admin-account-by-key', AdminAccountController.getAdminAccountByKey);

module.exports = router;