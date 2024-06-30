// // To use user.controller.js we make the user.router.js.

import express from "express";
import { getUsers, login, logout, signup } from "../controller/user.controller.js";
import { get } from "mongoose";
import checkAuth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);  // // Here we followed post method because through server we are maniplating in the clinet side. You can also use get method too.
router.get("/getusers", checkAuth, getUsers)

export default router;





