module.exports = {	
	mongod: {
		connectString: process.env.MONGO_URL || 'mongodb://localhost:27017',		
		db:  'contacts'	,
		pageSize: 10
	}
};
