const handleDelUser = (req, res, db)=> {              //delete user where id is matched
   db('users').where('id', req.body.id).del()
    .then(_ => res.json('user deleted'))
    .catch(err => res.json(err))
}

module.exports = {
	handleDelUser : handleDelUser
};