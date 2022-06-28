const express = require('express');

// Controllers
const {
	getAllTasks,
	createTask,
	getTaskById,
	updateTask,
	deleteTask,
} = require('../controlls/tasksControlls');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);

tasksRouter.post('/', createTask);

tasksRouter.get('/:id', getTaskById);

tasksRouter.patch('/:id', updateTask);

tasksRouter.delete('/:id', deleteTask);

module.exports = { tasksRouter };