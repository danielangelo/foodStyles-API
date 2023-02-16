const server = require("./api/server");

const port = 3301;

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

process.on("uncaughtException", (err) => {
  console.error(`${new Date().toUTCString()} uncaughtException:`, err);
  process.exit(0);
});

process.on("unhandledRejection", (err) => {
  console.error(`${new Date().toUTCString()} unhandledRejection:`, err);
});

server.start().then(() => {
  server.applyMiddleware({ app, path: "/api", cors: false });
  app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}/api`)
  );
});
