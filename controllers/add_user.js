const handleAddUser = (req, res, db) =>{
  db.insert(req.body).into('users').returning('*')
  .then(_ => { res.json('user added') })
  .catch(err => { res.json(err.detail)})
}

module.exports = {
	handleAddUser: handleAddUser
};