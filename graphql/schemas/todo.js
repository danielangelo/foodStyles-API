const { gql } = require("apollo-server-express");

module.exports = gql`
  type Todo {
    id: Int!
    title: String!
    isCompleted: Boolean!
    userId: Int
  }

  extend type Query {
    listTodos: [Todo!]
  }

  extend type Mutation {
    createTodo(title: String!, userId: Int): CreateTodoResponse

    updateTodo(
      id: Int!
      title: String!
      isCompleted: Boolean!
    ): CreateTodoResponse

    deleteTodo(id: Int!): Int
  }

  type CreateTodoResponse {
    id: Int!
    title: String!
    isCompleted: Boolean!
  }
`;
