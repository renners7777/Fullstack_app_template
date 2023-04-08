const express = require('express')
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
const ejs = require("ejs")
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,//What does this mean? Grabbing variable from env file.
    dbName = 'sample_analytics',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database...')
        db = client.db(dbName)
        collection = db.collection('accounts')
    })