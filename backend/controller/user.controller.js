// // Now after making models, we have to write the logic for signup and login which is done in User.controller.js.

import User from "../models/user.model.js";
// import bcrypt from "bcryptjs";  // // for another method.
import createToken from "../../utils/token.util.js";

const signup = async (req, res, next) => {
   try{
    let {email, password} = req.body;
    let userexists = await User.findOne({email}); // // Here one email is from userSchema(User) and the other email is from let(just above) but we are writing only one email because having same key and value can be passed only once.
    if(userexists){
        let err = new Error(`User with email ${email} already exists.`);
        err.status = 400;
        throw err;
    }
    // let salt = await bcrypt.genSalt(10);
    // let hashedPassword = await bcrypt.hash(password, salt);  
    // let user = await User.create({...req.body, password:hashedPassword})  // // Another method of hashing ans salting (these 3 line and above import bycript).
    let user = await User.create(req.body);
    createToken(res, user._id)
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


const login = async(req, res, next) =>{
  try{
    let{email, password} = req.body; 

    let user= await User.findOne({email});
    if(!user){
     let err = new Error(`${email} not registered!`)
     err.status = 400;
     throw err
    }
    if (await user.matchPassword(password)){  // // The matchPassword from user.model is attached to user which is called static method. 
      createToken(res, user._id);   // // Passing the jwt to cokies.
      res.send({messsage:"Login Success!"})
    }
    else {
        let err = new Error("Invalid Password!");
        err.status = 400;
        throw err;
        }
    }
  catch(err){
    next(err)
  }
  // // To check password we can create method here but we are creating in user model.
}


const logout = (req, res) => {
  res.clearCookie("jwt");
  res.send({ message: "Logout Success!"});
};


export { signup, login, logout};


