import express from "express";
import pinoHttp from "pino-http";
import router from "./post.routes.js";

// Create an instance of the Express.js
const app = express();

// pino logger
const logger = pinoHttp({
  transport: {
    target: "pino-pretty",
  },
});

// Add Pino logger middleware
app.use(logger);

// Add middleware for parsing URL and body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add the router middleware
app.use("/", router);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
