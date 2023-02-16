"use strict";

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    dateCreated: DataTypes.DATE,
    dateUpdated: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  });

  return Todo;
};
