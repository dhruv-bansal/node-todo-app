import { Sequelize } from 'sequelize-typescript'
import path from 'path';

/**
 * This declaration initialze the connection pool with database with given connection parameters
 */

// NOTE:
// commenting out mysql connection request
// this class can be improved by apply strategy design pattern and choose the database 
// during the boot time via external parameter

// const sequelize = new Sequelize('todo-db', 'fracon', 'root',
//     {
//         dialect: 'mysql',
//         host: '192.168.0.200',
//         models: [__dirname + '/models'],
//         logging: true
//     });

const modelsPath = path.join(__dirname,"../models")

const sequelize = new Sequelize('sqlite::memory:', {
    models: [modelsPath],
    logging: false
})

export default sequelize;