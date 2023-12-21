import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
console.log(connectionString);
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("charsdb");
let collection = await db.collection("char");
console.log(collection);
let results = await collection.find()
    .toArray();
console.log('results:' + results);

export default db;