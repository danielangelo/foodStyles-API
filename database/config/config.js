require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "postgres",
    use_env_variable: "DEV_DATABASE_URL",
  },
};
