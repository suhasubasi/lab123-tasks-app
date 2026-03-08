import express from 'express'
import { controller as apiKeyController } from '../controllers/apiKeyController.js'
import { verifyApiKey } from '../middleware/verifyApiKey.js'

const router = express.Router()

router.get('/apikey/protected', verifyApiKey, apiKeyController.magicAnswer)

export { router as apiKeyRouter }