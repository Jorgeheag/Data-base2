const { app } = require('./app');

// Models
const { User } = require('./models/userModel');
const { Tasks } = require('./models/tasks.model');

// Utils
const { db } = require('./utils/dataBase');

db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

// Establish model's relations
// 1 User <----> M Post
User.hasOne(Tasks, { foreignKey: 'userId' });
Tasks.belongsTo(User);

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));

app.listen(4000, () => {
	console.log('Express app running!!');
});
