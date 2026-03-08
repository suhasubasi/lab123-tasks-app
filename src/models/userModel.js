import databaseService from '../service/DatabaseService.js'

export const userModel = {
  async getAllUsers() {
    const sql = 'SELECT * FROM `user` ORDER BY `id`'
    return databaseService.query(sql)
  },

  async getUserById(id) {
    const sql = 'SELECT * FROM `user` WHERE `id` = ?'
    const rows = await databaseService.query(sql, [id])

    if (rows.length === 0) {
      return null
    }

    return rows[0]
  },

  async createUser(userData) {
    const sql = 'INSERT INTO `user` (`username`, `password`, `email`) VALUES (?, ?, ?)'
    const result = await databaseService.query(sql, [
      userData.username,
      userData.password,
      userData.email
    ])

    return this.getUserById(result.insertId)
  },

  async replaceUser(id, userData) {
    const sql = 'UPDATE `user` SET `username` = ?, `password` = ?, `email` = ? WHERE `id` = ?'
    await databaseService.query(sql, [
      userData.username,
      userData.password,
      userData.email,
      id
    ])

    return this.getUserById(id)
  },

  async deleteUser(id) {
    const sql = 'DELETE FROM `user` WHERE `id` = ?'
    const result = await databaseService.query(sql, [id])

    return result.affectedRows > 0
  }
}
