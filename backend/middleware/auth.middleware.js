// // In user.controller = For giving access only to the admin user, we have to protect route method means: no public access. 
// //To which route we have to make private, teha particular get garda jun request aai rako xa to request ma chai jwt is present or not or the cookies is passed or not. 
// // After knowing this we have to go further processing.

import jwt from "jsonwebtoken";
import asyncHandler from "./asynchandler.middleware.js";
import User from "../models/user.model.js";

const checkAuth = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;    // // Cookies ma token aako xa ke nai check gara.
    if (!token){   // // Sometimes we cannot find the cookies we use this below code.
        let err = new Error("You must be logged in!")
        err.status = 401;
        throw err;
    }
    try{
        let { userID } = jwt.verify(token, process.env.JWT_SECRET);// // Here jwt.verify pass the token and if the user is verified then it gives payload imported on it in them form of object. Then the object is destructurd and {userID} is taken off.
        let user = await User.findById(userID);
        req.user ={
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        };
        next();
    }
    catch(e){     // // When jwt is verifying tooken and if it finds error then it thorw its own error. To make that error into custom error we use try catch.
        let err = new Error ("Invalid Token!");
        err.status = 401;
        throw err;
    }
});


export default checkAuth;



