import { QueryResult } from 'pg'

//mechanical interfaces
interface IMechanicalRequest {
    description: string
    registrationNumber: string
}

interface IMechanical extends IMechanicalRequest {
    id: number
}

type MechanicalResult = QueryResult<IMechanical>

//mechanical address interfaces
interface IAddressRequest {
    street: string,
    number: string,
    postalCode: string,
    complement?: string 
}

interface IAddress extends IAddressRequest {
    id: number
}

type AddressResult = QueryResult<IAddress>

type MechanicalAddress = IMechanical & IAddressRequest

type MechanicalAddressResult = QueryResult<MechanicalAddress>

export {
    IMechanical,
    IMechanicalRequest,
    MechanicalResult,
    IAddressRequest,
    IAddress,
    AddressResult,
    MechanicalAddress,
    MechanicalAddressResult
}