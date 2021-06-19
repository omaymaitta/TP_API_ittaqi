const router = require('express').Router();
const usersRepo = require('../repositories/users')
/* GET users listing. */
router.get('/', async function(req, res, next) {
    if(req.user.role != 'admin')
				return res.status(403).send({
					message: 'Access denied'
				});
res.send(await usersRepo.getAllUsers())
});
module.exports = router;