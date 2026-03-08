import {taskModel} from '../models/taskModel.js'
export const controller = {}



controller.getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.getTaskById = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const task = await taskModel.getTaskById(taskId)

    if (!task) {
      return res.status(404).json({
        error: 'Task not found'
      })
    }

    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.createTask = async (req, res) => {
  try {
    const newTask = req.body

    if (!newTask.title || newTask.title.trim() === '') {
      return res.status(400).json({
        error: 'Title is required'
      })
    }

    const createdTask = await taskModel.createTask({
      title: newTask.title.trim(),
      completed: Boolean(newTask.completed)
    })

    res.status(201).json(createdTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.updateTask = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const updatedData = req.body
    const existingTask = await taskModel.getTaskById(taskId)

    if (!existingTask) {
      return res.status(404).json({
        error: 'Task not found'
      })
    }

    if (updatedData.title !== undefined) {
      if (updatedData.title.trim() === '') {
        return res.status(400).json({
          error: 'Title cannot be empty'
        })
      }

      updatedData.title = updatedData.title.trim()
    }

    if (updatedData.completed !== undefined) {
      updatedData.completed = Boolean(updatedData.completed)
    }

    const updatedTask = await taskModel.updateTask(taskId, updatedData)

    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.replaceTask = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const newTaskData = req.body

    const existingTask = await taskModel.getTaskById(taskId)

    if (!existingTask) {
      return res.status(404).json({
        error: 'Task not found'
      })
    }

    if (!newTaskData.title || newTaskData.title.trim() === '') {
      return res.status(400).json({
        error: 'Title is required'
      })
    }

    const replacedTask = await taskModel.replaceTask(taskId, {
      title: newTaskData.title.trim(),
      completed: Boolean(newTaskData.completed)
    })

    res.json(replacedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.deleteTask = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const deleted = await taskModel.deleteTask(taskId)

    if (!deleted) {
      return res.status(404).json({
        error: 'Task not found'
      })
    }

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}