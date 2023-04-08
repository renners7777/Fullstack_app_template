const express = require('express')
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,//What does this mean? Grabbing variable from env file.
    dbName = 'sample_restaurants',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database...')
        db = client.db(dbName)
        collection = db.collection('restaurants')
    })

    app.listen(process.env.PORT || PORT, () =>{
        console.log(`Server running on Port 5050...`)
    })