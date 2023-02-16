import { Router } from 'express'
import { createSubmitTasksController, createTasksController } from '../controllers/tasks.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import { createTasksSchema, createTaskSubmitSchema } from '../schemas/tasks.schemas'
import ensureIsInstructor from '../middlewares/ensureIsInstructor.middleware'

const tasksRoutes: Router = Router()

tasksRoutes.post('', ensureTokenIsValidMiddleware, ensureIsInstructor, ensureDataIsValidMiddleware(createTasksSchema), createTasksController)
tasksRoutes.post('/:id/submit', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(createTaskSubmitSchema), createSubmitTasksController)

export default tasksRoutes