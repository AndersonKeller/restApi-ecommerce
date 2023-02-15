import format from 'pg-format'
import { client } from '../../database'
import { IRequestTasks } from '../../interfaces/tasks.interface'
import { createTasksSchema } from "../../schemas/tasks.schemas"

const createTasksService = async(taskData: IRequestTasks) => {

    const queryString: string = format(
        `
            INSERT INTO
                tasks
            (%I)
                VALUES(%L)
            RETURNING *;
        `,
        Object.keys(taskData),
        Object.values(taskData)
    )

    const queryResult = await client.query(queryString)

    return queryResult.rows[0]

}

export default createTasksService