const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        default: ""
    },
    last_name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    wallet: {
        type: String,
        default: ""
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;