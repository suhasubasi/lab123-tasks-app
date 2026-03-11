import express from 'express'
import { tasksRouter } from './tasks.js'
import { usersRouter } from './users.js'
import { apiKeyRouter } from './apikey.js'
import { jwtRouter } from './jwt.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home/index')
})

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'lab123-tasks-app'
  })
})

router.use('/api/v1', tasksRouter)
router.use('/api/v1', usersRouter)
router.use('/api/v1', apiKeyRouter)
router.use('/api/v1', jwtRouter)
export { router }