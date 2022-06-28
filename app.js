const express = require('express');

// Routers
const { usersRouter } = require('./routers/usersRoutes');
const { tasksRouter } = require('./routers/tasksRoutes');

// Global err controller
const { globalErrorHandler } = require('./controlls/error.controller');

// Utils
const { AppError } = require('./utils/appError.util');

// Init express app
const app = express();

app.use(express.json());

// Define endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/tasks', tasksRouter);

// Handle incoming unknown routes to the server
app.all('*', (req, res, next) => {
	next(
		new AppError(
			`${req.method} ${req.originalUrl} not found in this server`,
			404
		)
	);
});

app.use(globalErrorHandler);

module.exports = { app };
