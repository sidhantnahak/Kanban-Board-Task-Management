const express = require('express');
const app = express();
const cors=require('cors')
const bodyparser=require('body-parser')
const user=require('./User/UserController');

app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/api/v1',user)

module.exports = app