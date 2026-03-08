import express from 'express'
import { tasksRouter } from './tasks.js'
import { usersRouter } from './users.js'
import { apiKeyRouter } from './apikey.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the lab project server',
    version: '1.0.0',
    routes: {
      home: '/',
      health: '/health',
      tasks: '/api/v1/tasks',
      users: '/api/v1/users',
      apikeyProtected: '/api/v1/apikey/protected'
    }
  })
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
export { router }