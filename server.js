const express = require('express')
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require('dotenv').config()
const PORT = 5050; 

let db,
  dbConnectionString = process.env.DB_STRING, //What does this mean? Grabbing variable from env file.
  dbName = "sample_mflix",
  collection; 


MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database...')
        db = client.db(dbName)
        collection = db.collection('movies')
    })
    .catch(err => {
        console.log(err)
    })

    app.listen(process.env.PORT || PORT, () =>{
        console.log(`Server running on Port 5050...`)
    })