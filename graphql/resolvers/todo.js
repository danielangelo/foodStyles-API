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
    async updateTodo(_, { id, title, isCompleted }) {
      return Todo.update(
        {
          title,
          isCompleted,
        },
        { where: { id }, returning: true, plain: true }
      ).then(() => {
        return Todo.findByPk(id);
      });
    },
    async deleteTodo(_, { id }) {
      return Todo.destroy({ where: { id } });
    },
  },

  Query: {
    async listTodos() {
      return Todo.findAll();
    },
  },
};
