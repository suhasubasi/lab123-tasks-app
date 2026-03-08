import db from '../config/database.js'

class DatabaseService {
  #connection = null

  async connect() {
    if (!this.#connection) {
      this.#connection = await db.getConnection()
      console.log('Database connected.')
    }
  }

  async query(sql, params = []) {
    if (!this.#connection) {
      throw new Error('Database is not connected.')
    }

    const [rows] = await this.#connection.execute(sql, params)
    return rows
  }

  async closeConnection() {
    if (this.#connection) {
      await this.#connection.end()
      this.#connection = null
      console.log('Database connection closed.')
    }
  }
}

export default new DatabaseService()