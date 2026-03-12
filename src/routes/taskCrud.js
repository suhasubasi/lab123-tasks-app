import express from 'express'
import { controller as taskCrudController } from '../controllers/taskCrudController.js'

const router = express.Router()

router.get('/crud/tasks', taskCrudController.getAllTasks)
router.get('/crud/tasks/create', taskCrudController.createTask)
router.post('/crud/tasks/create', taskCrudController.createTaskPost)

router.get('/crud/tasks/:id', taskCrudController.getTask)
router.get('/crud/tasks/:id/update', taskCrudController.updateTask)
router.post('/crud/tasks/:id/update', taskCrudController.updateTaskPost)

router.get('/crud/tasks/:id/delete', taskCrudController.deleteTask)
router.post('/crud/tasks/:id/delete', taskCrudController.deleteTaskPost)

export { router as taskCrudRouter }