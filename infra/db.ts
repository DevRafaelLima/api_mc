import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
class Database {
    private DB_URL = process.env.MONGODB_URI as string;
    async connect() {
        try {
            await mongoose.connect(this.DB_URL);
        } catch(error) {
            console.error(error);
        }
    }

    async disconnect() {
        try {
            await mongoose.disconnect();
        } catch(error) {
            console.log(error);
        }
    }

}

export default Database;