import express from "express";
// process.load_env(env)  // // This is next approach of loading .env file. Here we followed next one which is in package.json >> server.

// // routers import
import userRouter from "./routes/user.router.js"


// Initialize express app
const app = express();

// // Middlewares.
app.use(express.json()); // // It parses incoming requests with JSON payloads and is based on body-parser.

// // Routes: 
app.use("/api/v1/user", userRouter);   // // Base route.

export { app };


