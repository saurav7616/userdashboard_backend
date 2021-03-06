const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
  }
});

const app = express();

const users = require('./controllers/user_list.js')
const addUser = require('./controllers/add_user.js')
const delUser = require('./controllers/delete_user.js')

app.use(bodyParser.json());
app.use(cors());	
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // handle OPTIONS method
  if ('OPTIONS' == req.method) {
      return res.sendStatus(200);
  } else {
      next();
  }
});

app.get('/', (req,res) => { res.json('working') })                                  //base endpoint
app.get('/users', (req,res) => { users.handleUsers(res, db) })                      //get users list
app.post('/adduser', (req,res) => { addUser.handleAddUser(req, res, db) })          //add user
app.delete('/deleteuser' , (req,res) => { delUser.handleDelUser(req, res, db) })    //delete user

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`runnning fine on port ${PORT}`);
})