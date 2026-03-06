import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the lab project server',
    version: '1.0.0',
    routes: {
      home: '/',
      health: '/health'
    }
  })
})

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'lab123-tasks-app'
  })
})

export { router }