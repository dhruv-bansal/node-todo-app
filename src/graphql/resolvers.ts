
import TaskGroup from '../models/group.model'
import TaskModel from '../models/task.model';

import * as Mutation from './resolvers/Mutation'
import Group from './resolvers/Group';
import Task from './resolvers/Task';

/**
 * For now queries code is simple so we are leaving this is main file.
 * If in future it grows complex we can refactor it in the same way as Mutations
 */
const Query = {

    groups: () => {
        return TaskGroup.findAll();
    },

    tasks: () => {
        return TaskModel.findAll();
    },

    task: (root: any, args: any) => {
        return TaskModel.findByPk(args.id)
    },

    group: (root: any, args: any) => {
        return TaskGroup.findByPk(args.id)
    },
}


const resolvers = {
    Query,
    Group,
    Task,
    Mutation
}

export default resolvers;



