const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(
'mongodb+srv://eshwaribhide:mypassword@cluster0.t8gqm.mongodb.net/whiteboard-01?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true})

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempts-controller')(app)


app.listen(process.env.PORT || 3001)