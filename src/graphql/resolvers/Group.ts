
import Task from '../../models/task.model';
import TaskGroup from '../../models/group.model'

/**
 * This resolver suffices the nested object of Task when Groups are fetched
 */
const Group = {
    tasks: (group: TaskGroup) => {
        return Task.findAll(
            {
                where: { groupid: group.id }
            }
        );
    }
}

export default Group