import mongoose from 'mongoose';

class Database {
    private DB_URL = "mongodb://localhost:27017/db_portal"
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