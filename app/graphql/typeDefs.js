import { gql } from "graphql-tag";

export const typeDefs = gql`
    type Query {
        hello: String
        users: [User]
        user(id: ID!): User
    }

    type Mutation {
        createUser(
            name: String!, 
            second_name: String,
            lastname: String!,
            lastname_mother: String,
            email: String!,
            birthdate: String!,
            phone: Int!,
            state: Boolean
        ): User
    }

    type User {
        id: ID!
        name: String!
        second_name: String
        lastname: String!
        lastname_mother: String
        email: String!
        birthdate: String!
        phone: Int!
        state: Boolean
        createdAt: String
        updatedAt: String
    }

`;