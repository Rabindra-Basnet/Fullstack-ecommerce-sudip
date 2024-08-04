import express from "express";
// process.load_env(env)  // // This is next approach of loading .env file. Here we followed next one which is in package.json >> server.
import notFoundHandler from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";
import logger from "./middleware/logger.middleware.js";
import cookieParser from "cookie-parser";
import path from "path";


// // routers import
import userRouter from "./routes/user.router.js";
import productRouter from "./routes/product.router.js";
import orderRouter from "./routes/order.router.js"
import uploadRouter from "./routes/upload.router.js"


// Initialize express app
const app = express();


// // Middleware;
app.use(express.json()); // // It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true })); // // parse the form data means while adding image.
app.use(cookieParser());
app.use(logger);


// // Image is static. Therefore we have to perform static deploy. Declaring /uploads as an static folder
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));  // // path.resolve gives the root directory, 

// // Routes: 
app.use("/api/v1/user", userRouter);   // // Base route for user controller and router.
app.use("/api/v1/products", productRouter); // // Base router for producte controller and router.
app.use("/api/v1/orders", orderRouter);  // // base route for order controller and router.
app.use("/api/v1/image", uploadRouter); // // base route for routes > upload.router.js for image uploda.


// // error handlers:
app.use(notFoundHandler);
app.use(errorHandler);


export { app };


