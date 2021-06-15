import Task from '../../../models/task.model';
import TaskGroup from '../../../models/group.model';
import { ApolloError } from 'apollo-server-express';
import { UserInputError } from 'apollo-server';
import { TaskStatus } from '../../../utils/taskstatus';

/**
 * This is a resolver method that resolves the add Task.
 * @param root 
 * @param param1 
 * @returns 
 */
const addTask = async (root: any, { input }: any) => {

    console.log('creating task with ' + JSON.stringify(input))
    
    if (input.groupid == null) {
        const group = await TaskGroup.findOne({ where: { name: 'default' } });
        input.groupid = group?.id;
    }

    const task = Task.create(
        {
            subject: input.subject,
            groupid: input.groupid,
            status: TaskStatus.VALID // create task by default with valid status
        }).catch((err) => {
            if (err.name === 'SequelizeForeignKeyConstraintError') {
                throw new UserInputError(`Invalid group id ${input.groupid}, please enter valid group id`);
            }
            throw new ApolloError("Some error occurred", "500");
        });

    return task
};

export default addTask;