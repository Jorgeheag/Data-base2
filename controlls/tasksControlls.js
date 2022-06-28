// Models
const { Tasks } = require('../models/tasks.model');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Tasks.findAll();

		res.status(200).json({
			status: 'success',
			tasks,
		});
	} catch (err) {
		console.log(err);
	}
};

const createTask = async (req, res) => {
	try {
		const { title, startDate, limitDate, userId } = req.body;

		const newTask = await Tasks.create({
			title,
			startDate,
            limitDate,
			userId,
		});

		res.status(201).json({
			status: 'success',
			newTask,
		});
	} catch (err) {
		next(err);
	}
};

const getTaskById = async (req, res) => {
	const { id } = req.params;

	const tasks = await Tasks.findOne({ where: { id } });

	if (!tasks) {
		return res.status(404).json({
			status: 'error',
			message: 'task not found',
		});
	}

	res.status(200).json({
		status: 'success',
		tasks,
	});
};

const updateTask = async (req, res, next) => {
	const { id } = req.params;
	const { title, limitDate, startDate } = req.body;

	const task = await Tasks.findOne({ where: { id } });

	if (!task) {
		return res.status(404).json({
			status: 'error',
			message: 'Task not found',
		});
	}

	await task.update({ title, limitDate, startDate });

	res.status(204).json({ status: 'success' });
};

const deleteTask = async (req, res) => {
	const { id } = req.params;

	const task = await Tasks.findOne({ where: { id } });

	if (!task) {
		return res.status(404).json({
			status: 'error',
			message: 'Task not found',
		});
	}

	await task.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
};

module.exports = {
	getAllTasks,
	createTask,
	getTaskById,
	updateTask,
	deleteTask,
};