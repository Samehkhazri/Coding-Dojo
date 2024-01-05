const express = require ("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT



// Middlewares
app.use(cors(),express.json(),express.urlencoded({extended:true}),cors());


// DB connection
const mongoose =require ("./config/mongoose.config.js");

//ROUTES
require("./routes/manager.routes")(app);
// console.log (require("./config/mongoose.config"));


app.listen(PORT,()=>
console.log(`😒😒😒èlistenning on port${PORT} for requests`)
);