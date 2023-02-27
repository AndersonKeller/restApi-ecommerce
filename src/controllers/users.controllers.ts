import { Request, Response } from 'express'
import { IUser, IUserUpdate } from '../interfaces/users.interfaces'
import createUserService from '../services/users/createUser.service'
import deleteUserService from '../services/users/deleteUser.service'
import { listUserService } from '../services/users/listUser.service'
import updateUserService from '../services/users/updateUser.service'

const createUserController = async (req: Request, res: Response) => {

    const userData: IUser = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)

}

const listUserController = async (req: Request, res: Response) => {

    console.log(req.headers.authorization);
    const users = await listUserService(req.headers.authorization?.split(" ")[1]!)

    return res.json(users)

}

const deleteUserController = async (req: Request, res: Response) => {

    await deleteUserService(parseInt(req.params.id))

    return res.status(204).send()
}

const updateUserController = async (req: Request, res: Response) => {

    const userData: IUserUpdate = req.body
    const idUser = parseInt(req.params.id)

    const updatedUser = await updateUserService(userData, idUser)

    return res.json(updatedUser)
}
 

export {
    createUserController,
    listUserController,
    deleteUserController,
    updateUserController
}