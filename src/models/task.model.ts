
import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, ForeignKey, BelongsTo, DataType} from "sequelize-typescript";
import { TaskStatus } from "../utils/taskstatus";
import Group from "./group.model";

export interface TaskI {

    id: number
    subject: string
    groupid: number

}

@Table(
    {
        tableName: "task",
        timestamps: false
    }
)
export default class Task extends Model implements TaskI {

    @AutoIncrement
    @PrimaryKey
    @Column
    public id!: number;

    @AllowNull
    @NotEmpty
    @Column
    public subject!: string;
   
    @Column
    public status!: TaskStatus;

    @ForeignKey(() => Group)
    public groupid!: number;

    @BelongsTo(() => Group, 'groupid')
    group!: Group;

}