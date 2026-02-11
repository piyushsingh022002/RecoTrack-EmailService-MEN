const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/send', authMiddleware, emailController.sendEmailHandler);

module.exports = router;