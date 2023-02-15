import { Router } from 'express'
import { createSubmitTasksController, createTasksController } from '../controllers/tasks.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { createTasksSchema, createTaskSubmitSchema } from '../schemas/tasks.schemas'

const tasksRoutes: Router = Router()

tasksRoutes.post('', ensureDataIsValidMiddleware(createTasksSchema), createTasksController)
tasksRoutes.post('/:id/submit', ensureDataIsValidMiddleware(createTaskSubmitSchema), createSubmitTasksController)

export default tasksRoutes