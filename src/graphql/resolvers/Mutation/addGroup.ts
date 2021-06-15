
import TaskGroup from '../../../models/group.model'
import { UserInputError } from 'apollo-server';
import validator from 'validator'

/**
 * This the resolver method that resolves for funcationality of add group
 * @param root 
 * @param param1 
 * @returns 
 */
const addGroup = (root: any, { name }: { name: string }) => {

    console.log(`creating group with ${name}`)

    validateGroupName(name);

    const newTaskGroup = TaskGroup.create({ name: name })
        .catch((err) => {
            validateGroupNameUniqueness(err, name);
        })

    return newTaskGroup
};

export default addGroup;

/**
 * This function validates the group name during the group creation
 * @param name 
 */
function validateGroupName(name: string) {

    const validationErrors: {
        groupName: string;
    }[] = new Array();

    if (validator.isEmpty(name)) {
        validationErrors.push({ groupName: `This is not valid group name : ${name}` });
    }

    if (null != name && name.length > 8) {
        validationErrors.push({ groupName: `Group name : ${name} should be less then 8 charaters` });
    }

    if (Object.keys(validationErrors).length > 0) {
        throw new UserInputError(
            'Failed to get events due to validation errors',
            { validationErrors }
        );
    }
}

/**
 * This function checks for uniqueness of group name
 * @param err 
 * @param name 
 */
function validateGroupNameUniqueness(err: any, name: string) {

    const validationErrors: {
        groupName: string;
    }[] = new Array();

    if (err.name === 'SequelizeUniqueConstraintError') {
        validationErrors.push({ groupName: `Group name : ${name} must be unique` });
        throw new UserInputError(
            'Failed to get events due to validation errors',
            { validationErrors }
        );
    }
}
