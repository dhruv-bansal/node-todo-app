
import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, HasMany } from "sequelize-typescript";
import Task from "./task.model";

export interface TaskGroupI {

    id: number
    name: string

}

@Table(
    {
        tableName: "taskgroup",
        timestamps: false
    }
)
export default class TaskGroup extends Model implements TaskGroupI {

    @AutoIncrement
    @PrimaryKey
    @Column
    public id!: number;

    @AllowNull
    @NotEmpty
    @Column({
        unique: true
    })
    public name!: string;

    @HasMany(() => Task, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        hooks: true
    })
    tasks!: Task[] 

}