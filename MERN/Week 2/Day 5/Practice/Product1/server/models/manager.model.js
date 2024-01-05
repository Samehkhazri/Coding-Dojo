// import mongoose to buiild the model
const mongoose = require("mongoose");


// the model - the rules the entries need to follow
const ManagerSchema = new mongoose.Schema ({
    title: {
        type : String,
        // trim : true,
        required : [true,"{PATH} is required"],
        minLength : [3,"{PATH} must be at least 3 chars"],
    },
    price:{
        type: Number,
        // trim: true,
        required : [true,"{PATH} is required"],
        minLength : [2,"{PATH} must be at least 2 chars"],
    },
    description:{
        type:String,
        // default:false,
        minLength : [8,"{PATH} must be at least 8 chars"],
        required : [true,"{PATH} is required"],

    },

},
{timestamps:true}
);
// module.exports.Manager=mongoose.model("Manager",ManagerSchema);
const Manager =mongoose.model("Manager",ManagerSchema);
module.exports= Manager;