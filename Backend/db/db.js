import mongoose from 'mongoose';

function connectToDb() {
    try {
        mongoose.connect(process.env.DB_CONNECT);
         console.log('Connect to DB');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

export default connectToDb;