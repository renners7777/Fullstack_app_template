const express = require('express')
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
const ejs = require("ejs")
require('dotenv').config()

