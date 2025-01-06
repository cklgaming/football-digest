import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';
import router from './routes.js';
import url from 'url';

const DB_USER = process.env.MONGO_INITDB_ROOT_USERNAME;
const DB_PASS = process.env.MONGO_INITDB_ROOT_PASSWORD;
const DB_NAME = process.env.MONGO_INITDB_DATABASE;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}`;
const client = new MongoClient(URI);
const db = client.db(DB_NAME);
// Not used yet, update when creating collection
const collection = db.collection(DB_COLLECTION);

export default main = async () => {
    try {
        await client.connect();
        console.log('Connected to Mongo!');

        const app = express();

        app.use(express.json());
        app.use(express.static(path.join(__dirname, 'public')));
        app.use('/api', router);

        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (err) {
        console.error('Something went wrong', err);
    }
}

main()
    .then(() => console.log('Server started!'))
    .catch(err => console.error('Something went wrong...', err));
