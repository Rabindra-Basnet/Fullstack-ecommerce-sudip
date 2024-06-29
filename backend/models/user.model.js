// // For making authentication we have to store the data of user. Therefore we are creating user model to store the data of user.

import mongoose from "mongoose";

const userScheam = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, 
{timestamps: true}
);

const User = mongoose.model("User", userScheam);
export default User; // // This cannot be used for multiple import. In other place we can import by any other name.
// // Similar to module.exports like: exports.a = a
