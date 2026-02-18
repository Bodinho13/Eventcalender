// External Dependencies
import { Collection, MongoClient, Db } from "mongodb";
import type { Event } from "@shared/types";
import dotenv from "dotenv";
// Global Variables
export let collections: { events?: Collection<Event> } = {};
export let db: Db;

dotenv.config();

const client = new MongoClient(process.env.DB_CONN_STRING!);
// Initialize Connection
export async function connectToDatabase () {

    await client.connect();

    db = client.db(process.env.DB_NAME);

    const eventCollection = db.collection<Event>(process.env.EVENT_COLLECTION_NAME!);

    collections.events = eventCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${collections.events.collectionName}`);
}