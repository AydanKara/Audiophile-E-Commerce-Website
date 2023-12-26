const mongodb = require("mongodb");
const { username, password } = require("../encode");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@$cluster0.vhewwbq.mongodb.net/`
  );
  database = client.db("audiophile-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }
  return database;
}

module.exports = {
  connectToDatabase,
  getDb,
};
