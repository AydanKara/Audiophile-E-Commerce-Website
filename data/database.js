const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://aydankaramehmed:WVhgmJTSXXeBEHRy@cluster0.vhewwbq.mongodb.net/audiophile-shop`
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
