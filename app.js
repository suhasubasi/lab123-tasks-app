import 'dotenv/config'
import { app } from './src/express.js'
import databaseService from './src/service/DatabaseService.js'



const PORT = process.env.PORT || 3000

try {
  await databaseService.connect()
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
} catch (error) {
  console.error('Error starting the server:', error.message)
  process.exit(1)
}