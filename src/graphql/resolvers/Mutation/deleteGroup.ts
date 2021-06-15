import TaskGroup from '../../../models/group.model'

/**
 * This resolver method resolves for functionality delete group
 * @param root 
 * @param param1 
 * @returns 
 */
const deleteGroup = async (root: any, { name }: { name: string }) => {

    console.log(`deleting group with ${name}`)
    if (name === 'default') {
        // todo return different http code
        return `${name} group cannot be deleted`
    } else {
        await TaskGroup.destroy({
            where: {
                name: name
            }
        })
        return `${name} group deleted successfully`
    }
};
export default deleteGroup;