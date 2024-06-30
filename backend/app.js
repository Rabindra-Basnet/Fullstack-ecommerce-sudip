import express from "express";
// process.load_env(env)  // // This is next approach of loading .env file. Here we followed next one which is in package.json >> server.
import notFoundHandler from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";
import logger from "./middleware/logger.middleware.js";
import cookieParser from "cookie-parser";

// // routers import
import userRouter from "./routes/user.router.js"

// Initialize express app
const app = express();

// // Middleware;
app.use(express.json()); // // It parses incoming requests with JSON payloads and is based on body-parser.
app.use(cookieParser());
app.use(logger);

// // Routes: 
app.use("/api/v1/user", userRouter);   // // Base route.

// // error handlers:
app.use(notFoundHandler);
app.use(errorHandler);

export { app };


