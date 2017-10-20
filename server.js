const express = require('express');
const app = express()
const bp = require('body-parser')
const mo = require('method-override')
const mongoose = require('mongoose');

var db = require('./config/db')
mongoose.connect(db.url)

var port = process.env.port || 8080

app.use(bp.json())
app.use(bp.json({ type : 'application/vnd.api+json'}))
app.use(bp.urlencoded({ extended : true}))
app.use(mo('X-HTTP-Method-Override'))
app.use(express.static(__dirname + '/public'))

require('./app/routes')(app)
app.listen(port)
console.log('Tell me about port ' + port)

exports = module.exports = app

