import { ApolloError } from 'apollo-server-express';
import Task from '../../../models/task.model';


const deleteTask = async (root: any, { taskid }: { taskid: string }) => {

    console.log(`deleting task with ${taskid}`)
    try {
        await Task.destroy({
            where: {
                id: taskid
            }
        })
        return `Task with ${taskid} deleted succesfully`
    } catch (error) {
        console.log(error);
        throw new ApolloError(error.message, "500");
    }
};

export default deleteTask;