import { MongoClient, Db, Collection } from "mongodb";

const URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const CLIENT_COLLECTION_NAME = process.env.CLIENTS_COLLECTION_NAME || "";
const options = {};

export const collections: { clients?: Collection } = {};

export async function connectToMongo() {
  if (!URI) throw new Error("Missing MongoDB URI");

  try {
    let client: MongoClient = new MongoClient(URI, options);
    await client.connect();

    console.log("Successful connection to database");

    const db: Db = client.db(DB_NAME);
    const clientCollection: Collection = db.collection(CLIENT_COLLECTION_NAME);
    collections.clients = clientCollection;
  } catch (e) {
    console.log("error connecting to Database...", e);
  }
}
