const mongoDb = require("mongodb");

const mongoClient = mongoDb.MongoClient;

let dataBase;

async function connect() {
  try {
    const client = await mongoClient.connect("mongodb://127.0.0.1:27017");
    dataBase = client.db("first-api");
  } catch (e) {
    console.log(e);
  }
}

function getDB() {
  if (!dataBase) {
    throw new Error("Database not connected!");
  }
  return dataBase;
}

module.exports = {
  connect,
  getDB,
};
