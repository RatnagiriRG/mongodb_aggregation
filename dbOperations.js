const { MongoClient } = require("mongodb");
const { simpleAggregation } = require("./aggregation/simple_aggregation");
const { grouping, groupingSumAndMore } = require("./aggregation/grouping");
const { unwindingandGroupingArray, unwindingandGroupingArray2 } = require("./aggregation/array_dealing");
const { simpleLookup } = require("./aggregation/lookup");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "aggregation";

async function main() {
  await client.connect();
  console.log("Connected successfully to MongoDB");
  const db = client.db(dbName);
  const userCollection = db.collection("users");
  const authorCollection = db.collection("authors");
  const booksCollections = db.collection("books");
  //

  //   const result = await simpleAggregation(userCollection);  //simple collections
  // const result = await unwindingandGroupingArray2(userCollection);

  const result = await simpleLookup(booksCollections);

  console.log(result);

  await client.close();
}

module.exports = { main };
