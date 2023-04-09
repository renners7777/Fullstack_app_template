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

    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(express.urlencoded((_extended) =>{
        return true
    }))
    app.use(express.json())
    app.use(cors())

    //PORT 5050
    app.listen(process.env.PORT || PORT, () =>{
        console.log(`Server running on Port 5050...`)
    })