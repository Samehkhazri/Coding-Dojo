require('dotenv').config({path:'../.env'})
const mongoose = require("mongoose");

const dbName = process.env.db;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;




// ! Don't forget to change the String
const uri = `mongodb+srv://${username}:${pw}@cluster0.t8umqmc.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// mongodb+srv://root:<password>@cluster0.t8umqmc.mongodb.net/
mongoose
    .connect(uri)
    .then(() =>
        console.log("🛰️🛰️🛰️ Established a connection to the database " + dbName)
    )
    .catch((err) =>
        console.log(
            " ❌❌❌Something went wrong when connecting to the database",
            err
        )
    );