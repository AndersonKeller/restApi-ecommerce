import format from "pg-format"
import { client } from "../../database"
import { IRequestSubmitTask } from "../../interfaces/tasks.interface"

const createSubmitTasksService = async (payload: IRequestSubmitTask, taskId: number) => {

    payload = {
        ...payload,
        taskId
    }

    const queryString: string = format(
        `
            INSERT INTO
                user_tasks(%I)
            VALUES
                (%L)
            RETURNING *;
        `,
        Object.keys(payload),
        Object.values(payload)
    )

    const queryResult = await client.query(queryString)

    return queryResult.rows[0]
}

export default createSubmitTasksService