const handleUsers = (res, db) =>{
	db.select('*').from('users')
	.then(user => {
		if(user.length){
			res.json(user)
		} else {
			res.status(400).json('userlist not found');
		}
	})
	.catch(err => res.status(400).json('error getting users'))
}

module.exports = {
	handleUsers: handleUsers
};