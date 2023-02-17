const { Todo } = require("../../database/models");

module.exports = {
  Mutation: {
    async createTodo(_, { title, userId = null }) {
      return Todo.create({
        title,
        userId,
        isCompleted: false,
      });
    },
    async markTodoCompleted(_, { id }) {
      return Todo.update(
        {
          isCompleted: true,
        },
        { where: { id } }
      );
    },
    async markTodoIncompleted(_, { id }) {
      return Todo.update(
        {
          isCompleted: false,
        },
        { where: { id } }
      );
    },
    async deleteTodo(_, { id }) {
      return Todo.destroy({ where: { id } });
    },
  },

  Query: {
    async listTodos(_, { filter }) {
      switch (filter) {
        case "completed":
          return Todo.findAll({ where: { isCompleted: true } });
        case "incompleted":
          return Todo.findAll({ where: { isCompleted: false } });
        case "all":
        default:
          return Todo.findAll();
      }
    },
  },
};
