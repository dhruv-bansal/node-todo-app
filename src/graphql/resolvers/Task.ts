
import TaskModel from '../../models/task.model';
import TaskGroup from '../../models/group.model'

/**
 * This resolver suffices the nested object of Group when Tasks are fetched
 */
const Task = {
    group: (task: TaskModel) => {
        //todo see if sending empty object is required
        return TaskGroup.findByPk(task.groupid)
    }
}

export default Task