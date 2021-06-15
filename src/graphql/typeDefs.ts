
import { gql } from "apollo-server"

/**
 * typedefs defines Queries and Mutations for the graphQL
 */
const typeDefs = gql`

    type Query {
        groups: [Group!]
        tasks: [Task!]
        task(id: ID!): Task
        group(id: ID!): Group
    }

    type Mutation {
        addGroup(name: String!): Group
        addTask(input: CreateTaskInput!): Task
        deleteTask(taskid: String!): String!
        deleteGroup(name: String!): String!
        updateTaskStatus(taskid: String!, status: String!): String!
    }

    input CreateTaskInput {
        subject: String!
        groupid: ID
    }

    type Group {
        id: ID!
        name: String!
        tasks: [Task!]
    }

    type Task {
        id: ID!
        subject: String!
        status: String!
        group: Group
    }
`;

export default typeDefs;