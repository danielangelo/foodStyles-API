const { gql } = require("apollo-server-express");

module.exports = gql`
  type Todo {
    id: Int!
    title: String!
    isCompleted: Boolean!
    userId: Int
  }

  extend type Query {
    listTodos(filter: String): [Todo!]
  }

  extend type Mutation {
    createTodo(title: String!, userId: Int): CreateTodoResponse

    markTodoCompleted(id: Int!): [Int]

    markTodoIncompleted(id: Int!): [Int]

    deleteTodo(id: Int!): Int
  }

  type CreateTodoResponse {
    id: Int!
    title: String!
    isCompleted: Boolean!
  }
`;
