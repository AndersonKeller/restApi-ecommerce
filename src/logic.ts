import { Request, Response } from 'express'
import { QueryConfig } from 'pg'
import format from 'pg-format'
import { client } from './database'
import { IWorkOrder, IWorkOrderRequest, WorkOrderCreate, WorkOrderResult } from './interfaces'

const createWorkOrder = async (request: Request, response: Response): Promise<Response> => {
    
    const orderDataRequest: IWorkOrderRequest = request.body
    const orderData: WorkOrderCreate = {
        ...orderDataRequest,
        startdate: new Date(),
        enddate: new Date(Date.now() + 86400 * 1000)
    }

    const queryString: string = `
        INSERT INTO
            work_orders(description, mechanical, price, status, iswarranty, startdate, enddate)
        VALUES
            ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: Object.values(orderData)
    }

    console.log(queryConfig)

    const queryResult: WorkOrderResult = await client.query(queryConfig)
    const newWorkOrder: IWorkOrder = queryResult.rows[0]
    
    return response.status(201).json(newWorkOrder)
}

const createWorkOrderFormat = async (request: Request, response: Response): Promise<Response> => {
    const orderDataRequest: IWorkOrderRequest = request.body
    const orderData: WorkOrderCreate = {
        ...orderDataRequest,
        startdate: new Date(),
        enddate: new Date(Date.now() + 86400 * 1000)
    }

    const queryString: string = format(
        `
            INSERT INTO
                work_orders(%I)
            VALUES
                (%L)
            RETURNING *;
        `,
        Object.keys(orderData),
        Object.values(orderData)
    )

    const queryResult: WorkOrderResult = await client.query(queryString)
    const newWorkOrder: IWorkOrder = queryResult.rows[0]
    
    return response.status(201).json(newWorkOrder)
}

const listWorkOrder = async (request: Request, response: Response): Promise<Response> => {

    const perPage: any = request.query.perPage === undefined ? 10 : request.query.perPage
    let page: any = request.query.page === undefined ? 0 : request.query.page

    page = page * perPage

    const queryString: string = `
        SELECT
            *
        FROM
            work_orders
        LIMIT $1 OFFSET $2;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [perPage, page]
    }

    const queryResult: WorkOrderResult = await client.query(queryConfig)

    return response.status(200).json(queryResult.rows)
}

export { createWorkOrder, createWorkOrderFormat, listWorkOrder }