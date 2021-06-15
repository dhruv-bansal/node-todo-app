
import TaskGroup from '../models/group.model';
import sequelize from '../utils/database';


/**
 * This function initialized the database and help to prepare some default data
 */
const initializeDB = function () {
    sequelize.authenticate().then(async () => {
        console.log("database connect");
        await sequelize.sync(
            //{ force: true }
        );
        await prepareInitData();
    }).catch((err: any) => {
        console.log(err);
    });
}

/**
 * This function initilization database with the default group.
 * For all the task where group is not specified, they will by default go in default group.
 */
const prepareInitData = async () => {

    console.log('initializing database..');
    const group = await TaskGroup.findOne({ where: { name: 'default' } });
    if (group?.id == null) {

        const group = await TaskGroup.create({
            name: 'default',
        });
        console.log(group.toJSON());
    }
}

export default initializeDB;