import { Request, Response, NextFunction } from 'express'
import { orders } from './database'

const ensureWorkOrderExists = (request: Request, response: Response, next: NextFunction): Response | void => {
    const id: number = parseInt(request.params.id)

    const indexWorkOrder = orders.findIndex(el => el.id === id)

    if(indexWorkOrder === -1){
        return response.status(404).json({
            message: 'Work order not found!'
        })
    }

    request.workOrder = {
        indexWorkOrder: indexWorkOrder
    }

    return next()

}

export { ensureWorkOrderExists }