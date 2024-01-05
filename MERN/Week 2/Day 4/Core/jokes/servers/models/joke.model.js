// import mongoose to buiild the model
const mongoose = require("mongoose");


// the model - the rules the entries need to follow
const JokesSchema = new mongoose.Schema ({
    setup: {
        type : String,
        // trim : true,
        required : [true,"{PATH} is required"],
        minLength : [10,"{PATH} must be at least 10 chars"],
    },
    punchline:{
        type: String,
        // trim: true,
        required : [true,"{PATH} is required"],
        minLength : [3,"{PATH} must be at least 3 chars"],
    },


},
{timestamps:true}
);
module.exports.Joke=mongoose.model("Joke",JokesSchema);