const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const indeedRoutes = require('./routes/indeed')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');  // allow CORS
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use(indeedRoutes)

app.get('/',(req, res, next) => {
  res.render('index')
})

app.listen(process.env.PORT || 8080)
