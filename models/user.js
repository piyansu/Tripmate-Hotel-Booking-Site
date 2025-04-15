const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

function getISTDateTime() {
    return new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
    });
}

const User = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    createdAt: {
        type: String,
        default: getISTDateTime,
    },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);