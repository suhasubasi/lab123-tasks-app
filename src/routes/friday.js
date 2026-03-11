import express from 'express'
import { controller as fridayController } from '../controllers/fridayController.js'

const router = express.Router()

router.get('/friday', fridayController.showFridayPage)

export { router as fridayRouter }