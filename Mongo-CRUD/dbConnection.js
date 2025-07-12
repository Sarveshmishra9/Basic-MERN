  const { MongoClient } = require('mongodb');

const dbConnectionUrl = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(dbConnectionUrl);

let dbInstance;

const dbConnection = async () => {
    if (!dbInstance) {
        await client.connect();
        dbInstance = client.db("mongodbproject_database");
    }
    return dbInstance;
};

module.exports = { dbConnection };
