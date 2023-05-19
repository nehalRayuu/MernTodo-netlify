import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();



const Connection = () => {
    mongoose.set('strictQuery', true);
    const MONGODB_URL = process.env.MONGODB_URL
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ');
    })
}

export default Connection;
