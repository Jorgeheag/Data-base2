const { db, DataTypes } = require('../utils/dataBase');

const Tasks = db.define('user', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	limitDate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	startDate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	finishDate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	status:{
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	}

});

module.exports = { Tasks };