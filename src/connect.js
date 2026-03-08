import 'dotenv/config'
import db from './config/database.js'

let connection

try {
  connection = await db.getConnection()

  const sql = 'SELECT * FROM `user` WHERE `username` = ?'
  const args = ['alice']

  const [results] = await connection.execute(sql, args)

  console.table(results)
} catch (error) {
  console.error('Database connection test failed:', error.message)
} finally {
  if (connection) {
    await connection.end()
    console.log('Database connection closed.')
  }
}