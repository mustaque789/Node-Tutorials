const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm';
const client = new MongoClient(url);               // pre setup to connect mongodb

async function dbConnect() {
  let result = await client.connect();              // mongodb connected
  let db = result.db(database);                      // database fetched
  let collection = db.collection('products');           // collection fetched
   return collection;
}

module.exports = dbConnect;

