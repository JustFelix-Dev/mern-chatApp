const express = require('express');
const { createMessage, getMessages } = require('../controller/messageController');
const router = express.Router()

router.post('/',createMessage);
router.post('/:chatId',getMessages);

module.exports = router;