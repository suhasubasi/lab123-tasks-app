import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import { router } from './routes/index.js'

const app = express()

app.disable('x-powered-by')

app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())

app.use('/', router)

export { app }