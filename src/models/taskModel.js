import databaseService from '../service/DatabaseService.js'

function normalizeTask(task) {
  if (!task) {
    return null
  }

  return {
    ...task,
    completed: Boolean(task.completed)
  }
}

export const taskModel = {
  async getAllTasks() {
    const sql = 'SELECT * FROM `task` ORDER BY `id`'
    const rows = await databaseService.query(sql)
    return rows.map(normalizeTask)
  },

  async getTaskById(id) {
    const sql = 'SELECT * FROM `task` WHERE `id` = ?'
    const rows = await databaseService.query(sql, [id])

    if (rows.length === 0) {
      return null
    }

    return normalizeTask(rows[0])
  },

  async createTask(taskData) {
    const sql = 'INSERT INTO `task` (`title`, `completed`) VALUES (?, ?)'
    const result = await databaseService.query(sql, [
      taskData.title,
      taskData.completed ? 1 : 0
    ])

    return this.getTaskById(result.insertId)
  },

  async updateTask(id, updatedData) {
    const fields = []
    const values = []

    if (updatedData.title !== undefined) {
      fields.push('`title` = ?')
      values.push(updatedData.title)
    }

    if (updatedData.completed !== undefined) {
      fields.push('`completed` = ?')
      values.push(updatedData.completed ? 1 : 0)
    }

    if (fields.length === 0) {
      return this.getTaskById(id)
    }

    const sql = `UPDATE \`task\` SET ${fields.join(', ')} WHERE \`id\` = ?`
    values.push(id)

    await databaseService.query(sql, values)

    return this.getTaskById(id)
  },

  async replaceTask(id, taskData) {
    const sql = 'UPDATE `task` SET `title` = ?, `completed` = ? WHERE `id` = ?'
    await databaseService.query(sql, [
      taskData.title,
      taskData.completed ? 1 : 0,
      id
    ])

    return this.getTaskById(id)
  },

  async deleteTask(id) {
    const sql = 'DELETE FROM `task` WHERE `id` = ?'
    const result = await databaseService.query(sql, [id])

    return result.affectedRows > 0
  }
}