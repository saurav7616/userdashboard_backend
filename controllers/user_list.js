const handleUsers = (res, db) =>{									//returns list of all users
	db.select('*').from('users')
	.then(user => res.json(user))
	.catch(err => res.status(400).json('error getting users' + err))
}

module.exports = {
	handleUsers: handleUsers
};