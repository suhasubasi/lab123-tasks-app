import express from 'express'
import { controller as jwtController } from '../controllers/jwtController.js'
import { middleware as jwtMiddleware } from '../middleware/jwt.js'

const router = express.Router()

router.post('/jwt/login', jwtController.login)
router.get('/jwt/token', jwtMiddleware.jwtTokenIsValid, jwtController.token)

export { router as jwtRouter }