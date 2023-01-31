import { QueryResult } from 'pg'

interface IWorkOrderRequest {
    description: string
    mechanical: string
    isWarranty: boolean
    status: string
    price: number
}

interface IWorkOrder extends IWorkOrderRequest {
    startdate: Date
    enddate: Date
    id: number
}

type WorkOrderResult = QueryResult<IWorkOrder>
type WorkOrderCreate = Omit<IWorkOrder, "id">

export { IWorkOrderRequest, IWorkOrder, WorkOrderResult, WorkOrderCreate }