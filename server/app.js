const express = require('express');
const app = express();
const cors=require('cors')
const bodyparser=require('body-parser')
const tasks=require('./Tasks/TaskController');

app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/api/v1',tasks)

module.exports = app