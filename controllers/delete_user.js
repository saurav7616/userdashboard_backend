const handleDelUser = (req, res, db)=> {
   db('users').where('id', req.body.id).del()
    .then(_ => res.json('user deleted'))
    .catch(err => res.json(err))
}

module.exports = {
	handleDelUser : handleDelUser
};