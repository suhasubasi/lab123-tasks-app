import { taskModel } from '../models/taskModel.js'

export const controller = {}

controller.getAllTasks = async (req, res) => {
  try {
    const data = {
      tasks: await taskModel.getAllTasks()
    }

    res.render('tasks/view_all', data)
  } catch (error) {
    res.status(500).send('Failed to load tasks.')
  }
}

controller.getTask = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const task = await taskModel.getTaskById(taskId)

    if (!task) {
      return res.status(404).send('Task not found.')
    }

    res.render('tasks/view_one', { task })
  } catch (error) {
    res.status(500).send('Failed to load task.')
  }
}

controller.createTask = async (req, res) => {
  res.render('tasks/create')
}

controller.createTaskPost = async (req, res) => {
  try {
    const title = req.body.title?.trim() || ''
    const completed = req.body.completed === 'on'

    if (!title) {
      return res.status(400).render('tasks/create', {
        error: 'Title is required.'
      })
    }

    const createdTask = await taskModel.createTask({
      title,
      completed
    })

    req.session.flashMessage = `Task with id: ${createdTask.id} created.`
    res.redirect(`/crud/tasks/${createdTask.id}`)
  } catch (error) {
    res.status(500).send('Failed to create task.')
  }
}

controller.updateTask = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const task = await taskModel.getTaskById(taskId)

    if (!task) {
      return res.status(404).send('Task not found.')
    }

    res.render('tasks/update', { task })
  } catch (error) {
    res.status(500).send('Failed to load update form.')
  }
}

controller.updateTaskPost = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const title = req.body.title?.trim() || ''
    const completed = req.body.completed === 'on'

    const existingTask = await taskModel.getTaskById(taskId)

    if (!existingTask) {
      return res.status(404).send('Task not found.')
    }

    if (!title) {
      return res.status(400).render('tasks/update', {
        task: existingTask,
        error: 'Title is required.'
      })
    }

    await taskModel.replaceTask(taskId, {
      title,
      completed
    })

    req.session.flashMessage = `Task with id: ${taskId} updated.`
    res.redirect(`/crud/tasks/${taskId}`)
  } catch (error) {
    res.status(500).send('Failed to update task.')
  }
}

controller.deleteTask = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const task = await taskModel.getTaskById(taskId)

    if (!task) {
      return res.status(404).send('Task not found.')
    }

    res.render('tasks/delete', { task })
  } catch (error) {
    res.status(500).send('Failed to load delete form.')
  }
}

controller.deleteTaskPost = async (req, res) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    const deleted = await taskModel.deleteTask(taskId)

    if (!deleted) {
      return res.status(404).send('Task not found.')
    }

    req.session.flashMessage = `Task with id: ${taskId} deleted.`
    res.redirect('/crud/tasks')
  } catch (error) {
    res.status(500).send('Failed to delete task.')
  }
}