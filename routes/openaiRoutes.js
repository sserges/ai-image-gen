const express = require('express')

const { generateImage } = require('../controllers/OpenaiController')

const router = express.Router()

router.post('/generateimage', generateImage)

module.exports = router
