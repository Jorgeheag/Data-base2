const express = require('express');

// Controllers
const {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
} = require('../controlls/user.controllers');

// Middlewares
/*const {
	createUserValidators,
} = require('../middlewares/validators.middleware');
const { userExists } = require('../middlewares/users.middleware');
*/
const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);

usersRouter.post('/', /*createUserValidators,*/ createUser);

usersRouter.get('/:id', /*userExists,*/ getUserById);

usersRouter.patch('/:id', /*userExists,*/ updateUser);

usersRouter.delete('/:id', /*userExists,*/ deleteUser);

module.exports = { usersRouter };
