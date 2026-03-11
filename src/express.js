import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import path from 'path'
import expressLayouts from 'express-ejs-layouts'
import { localsMiddleware } from './middleware/locals.js'
import { router } from './routes/index.js'

const app = express()

app.disable('x-powered-by')

app.set('view engine', 'ejs')
app.set('views', path.join('src', 'views'))
app.use(expressLayouts)
app.set('layout', path.join('layouts', 'default'))

app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(localsMiddleware.injectBaseUrl)

app.use('/', router)

export { app }