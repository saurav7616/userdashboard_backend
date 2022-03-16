const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'scott',
    database : 'mak_assignment'
  }
});

const app = express();

const users = require('./controllers/user_list.js')
const addUser = require('./controllers/add_user.js')
const delUser = require('./controllers/delete_user.js')

app.use(bodyParser.json());
app.use(cors());	

app.get('/', (req,res) => { res.json('working') })                                  //base endpoint
app.get('/users', (req,res) => { users.handleUsers(res, db) })                      //get users list
app.post('/adduser', (req,res) => { addUser.handleAddUser(req, res, db) })          //add user
app.delete('/deleteuser' , (req,res) => { delUser.handleDelUser(req, res, db) })    //delete user

app.listen(process.env.PORT || 3000, () => {
	console.log(`runnning fine on port ${process.env.PORT}`);
})