import express, { Application, Request, Response } from 'express'
import { createWorkOrder, listWorkOrder } from './logic'

const app: Application = express()
app.use(express.json())

app.post('/work-order', createWorkOrder)
app.get('/work-order', listWorkOrder)

app.listen(3000, () => {
    console.log('Server is running!')
})