import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import Category from "../models/category";

// Global Variables
export var collections: { categories: mongoDB.Collection<Category> };

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    collections = {
        categories: db.collection(process.env.CATEGORIES_COLLECTION_NAME)
    }
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${collections.categories.collectionName}`);
}