const { User } = require('../models')
module.exports = {
    getAllUsers() {
    return User.findAll()
    },
    // méthodes à implémenter
    getUsers(offset = 0, limit = 10) { 
        return User.findAll({offset: offset, limit: limit});
    },
    getAdmins() { 
        return User.findAll({
			where: {
				role: 'admin'
			}
		});
    },
    getAuthors() { 
        return User.findAll({
			where: {
				role: 'author'
			}
		});
    },
    getGuests(){
        return User.findAll({
			where: {
				role: 'guest'
			}
		});
     },
    getUser(id) {
        return User.findOne({
			where: {
				id: id
			}
		})
     },
    getUserByEmail(email) { 
        return User.findOne({
			where: {
				email: email
			}
		});
    },
    addUser(user) {
        u = this.getUserByEmail(user.email);
		if(u)
			return {
				status: 403,
				message: 'User already exists'
			};

		var user = await User.create(user)
		return {
			status: 200,
			message: 'User added succesuflly',
			user: user
		}
     },
    updateUser(id, userData) {
        return await User.update(userData, {
			where: {
				id: id
			}
		})
     },
    deleteUser(id) { 
        return await User.destroy({
			where: {
				id: id
			}
		})
    },
  
    }