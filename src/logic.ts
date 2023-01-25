import { Request, Response } from 'express'
import { ids, orders } from './database'
import { IWorkOrder, IWorkOrderRequest, WorkOrderRequiredKeyes } from './interfaces'

const validateDataOrder = (payload: any): IWorkOrderRequest => {

    const keys: Array<string> = Object.keys(payload)
    const requiredKeys: Array<WorkOrderRequiredKeyes> = ['description', 'mechanical', 'client', 'price']

    const containsAllRequired: boolean = requiredKeys.every((key: string) => {
        return keys.includes(key)
    })

    if(!containsAllRequired){
        throw new Error(`Required keys are: ${requiredKeys}`)
    }

    return payload

}

const createWorkOrder = (request: Request, response: Response): Response => {

    try {
        const orderData: IWorkOrderRequest = validateDataOrder(request.body)

        const id:number = Math.floor(Math.random()*1000)

        const idExists = ids.find(el => el === id)

        if(idExists){
            return response.status(409).json({
                message: "id exists, try again"
            })
        }

        const newOrderData: IWorkOrder = {
            id: id,
            startDate: new Date(),
            endDate: new Date(Date.now() + 86400 * 1000),
            ...orderData
        }

        ids.push(id)
        orders.push(newOrderData)
        
        return response.status(201).json(newOrderData)
    } catch (error) {
        if(error instanceof Error){
            return response.status(400).json({
                message: error.message
            })
        }
        console.log(error)
        return response.status(500).json({
            message: 'Internal server error'
        })
    }

    
}

const listWorkOrder = (request: Request, response: Response): Response => {
    return response.json(orders)
}

export { createWorkOrder, listWorkOrder }