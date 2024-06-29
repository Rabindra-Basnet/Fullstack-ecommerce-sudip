// // Now after making models, we have to write the logic for signup and login which is done in User.controller.js.

import User from "../models/user.model.js";

const signup = async (req, res, next) => {
   try{
    let {email} = req.body;
    let userexists = await User.findOne({email}); // // Here one email is from userSchema(User) and the other email is from let(just above) but we are writing only one email because having same key and value can be passed only once.
    if(userexists){
        let err = new Error(`User with email ${email} already exists.`);
        err.status = 400;
        throw err;
    }
    let user = await User.create(req.body);
    res.send({
        message: "User Registered!",
        user: {
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
    });
   }
   catch(err){
    next(err);
   }
};


export { signup };


