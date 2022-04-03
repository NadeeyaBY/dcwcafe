const express = require('express');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const jwt = require('jsonwebtoken')
const mysql = require('mysql')
const port = 8080

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'dcw_order'
})


app.use(cors())

// parse application/json
app.use(bodyParser.json())

app.post('/api/facebookLogin', bodyParser.json, async (req, res) => {
  let userData = req.body.user
  //console.log('Request -->', req.body.user)
  let result = await axios.get(`https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token
                                &client_id=1376267652794479
                                &client_secret=b679121cacfb85f300340c4f10de9fff
                                &fb_exchange_token=${req.body.user.accessToken}`, {
      params: {
        fields: 'id, name, email',
        accessToken: token
    }
  })
  console.log(result)
})

app.get('/api/water', (req, res) => {
  connection.query("SELECT * FROM water", (err, result) => {
    if(err) {
      console.log(err)
    }
    else {
      res.json(result)
    }
  })
})

app.get('/api/cake', (req, res) => {
  connection.query("SELECT * FROM cake", (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.json(result)
    }
  })
})

app.get('/api/food', (req, res) => {
  connection.query("SELECT * FROM food", (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.json(result)
    }
  })
})

app.listen(8080, () => {
  console.log('Server started 8080')
})

