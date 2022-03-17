const handleUsers = (res, db) =>{									//returns list of all users
	db.select('*').from('users')
	.then(user => {
		if(user.length){
			res.json(user)
		} else {
			res.status(400).json('userlist not found');
		}
	})
	.catch(err => res.status(400).json('error getting users' + err))
}

module.exports = {
	handleUsers: handleUsers
};