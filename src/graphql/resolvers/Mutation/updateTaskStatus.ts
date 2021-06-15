import { ApolloError, UserInputError } from 'apollo-server-express';
import Task from '../../../models/task.model';
import { TaskStatus } from '../../../utils/taskstatus';


const updateTaskStatus = async (root: any, { taskid, status }: { taskid: string, status: string }) => {

    console.log(`update task ${taskid} for status ${status}`)
    try {

        validateStatus(status);

        await Task.update({
            status: status
        },
            {
                where: {
                    id: taskid
                }
            })
        return `Task with ${taskid} updated succesfully`
    } catch (error) {
        console.log(error);
        throw new ApolloError(error.message, "500");
    }
};

export default updateTaskStatus;


/**
 * This method validates the status value for valid values
 * @param status 
 */
function validateStatus(status: string) {
    if (status != String(TaskStatus.INVALID) && status != String(TaskStatus.VALID)) {
        throw new UserInputError('Please enter valid values of status i.e. 1 or 0');
    }
}
