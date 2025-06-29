// const { MongoClient } = require('mongodb');

// let dbConnectionUrl='mongodb://127.0.0.1:27017';
// const client = new MongoClient(dbConnectionUrl);

// let dbConnection=async ()=>{ // async await handlle the promises : jb tk response ni milega tb tk wait 
//     await client.connect();
//     let db=client.db("mongodbproject_database")
//     return db;
// } 
// module.exports={dbConnection}  
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
