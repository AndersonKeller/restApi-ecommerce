import { QueryResult } from "pg"

interface IWorkOrderRequest {
    description: string
    price: number
    status: string
    isWarranty: boolean
    startDate: Date
    mechanicalId: number
}

interface IWorkOrder extends IWorkOrderRequest {
    id: number
    endDate: Date
}

interface IWorkOrderMechanical extends IWorkOrder {
    name: string
    registrationNumber: string
}

interface IWorkOrderFinish {
    endDate: Date
}

type WorkOrderResult = QueryResult<IWorkOrder>
type WorkOrderMechanicalResult = QueryResult<IWorkOrderMechanical>

export {
    IWorkOrder,
    IWorkOrderRequest,
    WorkOrderResult,
    WorkOrderMechanicalResult,
    IWorkOrderFinish
}