const express = require('express')
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require('dotenv').config()
const PORT = 8000; 

let db,
  dbConnectionString = process.env.DB_STRING, //What does this mean? Grabbing variable from env file.
  dbName = "sample_mflix",
  collection; 

      app.set("view engine", "ejs");
      app.use(express.static("public"));
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json());
      app.use(cors());

      app.get("/", async (request, response) => {
        try {
          response.render('Views\index.ejs');
        } catch (error) {
          response.status(500).send({ message: error.message });
        }
      });

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database...')
        db = client.db(dbName)
        collection = db.collection('movies')
    })
    .catch(err => {
        console.log(err)
    })

    //PORT 8000
    app.listen(process.env.PORT || PORT, () =>{
        console.log(`Server running on Port 8000...`)
    })