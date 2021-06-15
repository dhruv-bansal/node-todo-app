
import { ApolloServer } from "apollo-server-express";
import express from 'express'
import initializeDB from "./init/initializeDB";

import typeDefs from "./graphql/typeDefs";
import resolvers from './graphql/resolvers';


const apolloServer = new ApolloServer({ resolvers, typeDefs });
const app = express();
apolloServer.applyMiddleware({ app, path: "/graphql" });


app.listen(3000, () => {
    console.log(`Initiating todo-app`)
    initializeDB();
});



