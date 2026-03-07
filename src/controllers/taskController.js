export const controller = {}

const tasks = [
  {
    id: 1,
    title: 'Read Express notes',
    completed: false
  },
  {
    id: 2,
    title: 'Practice REST API routes',
    completed: true
  },
  {
    id: 3,
    title: 'Prepare for database step',
    completed: false
  }
]

function getNextId() {
  if (tasks.length === 0) {
    return 1
  }

  return Math.max(...tasks.map(task => task.id)) + 1
}

controller.getTasks = (req, res) => {
  res.json(tasks)
}

controller.getTaskById = (req, res) => {
  const taskId = Number.parseInt(req.params.id, 10)
  const task = tasks.find(task => task.id === taskId)

  if (!task) {
    return res.status(404).json({
      error: 'Task not found'
    })
  }

  res.json(task)
}

controller.createTask = (req, res) => {
  const newTask = req.body

  if (!newTask.title || newTask.title.trim() === '') {
    return res.status(400).json({
      error: 'Title is required'
    })
  }

  newTask.id = getNextId()
  newTask.title = newTask.title.trim()
  newTask.completed = Boolean(newTask.completed)

  tasks.push(newTask)

  res.status(201).json(newTask)
}

controller.updateTask = (req, res) => {
  const taskId = Number.parseInt(req.params.id, 10)
  const updatedData = req.body
  const task = tasks.find(task => task.id === taskId)

  if (!task) {
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

  Object.assign(task, updatedData)

  if (updatedData.completed !== undefined) {
    task.completed = Boolean(updatedData.completed)
  }

  res.json(task)
}

controller.replaceTask = (req, res) => {
  const taskId = Number.parseInt(req.params.id, 10)
  const newTaskData = req.body
  const taskIndex = tasks.findIndex(task => task.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({
      error: 'Task not found'
    })
  }

  if (!newTaskData.title || newTaskData.title.trim() === '') {
    return res.status(400).json({
      error: 'Title is required'
    })
  }

  newTaskData.id = taskId
  newTaskData.title = newTaskData.title.trim()
  newTaskData.completed = Boolean(newTaskData.completed)

  tasks[taskIndex] = newTaskData

  res.json(newTaskData)
}

controller.deleteTask = (req, res) => {
  const taskId = Number.parseInt(req.params.id, 10)
  const taskIndex = tasks.findIndex(task => task.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({
      error: 'Task not found'
    })
  }

  tasks.splice(taskIndex, 1)

  res.status(204).send()
}