import 'express-async-errors'
import express, { Application } from 'express'
import userRoutes from './routers/users.routes'
import taskRoutes from './routers/tasks.routes'
import { handleErrors } from './errors'

const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)

app.use(handleErrors)

export default app