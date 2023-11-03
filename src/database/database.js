import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set('strictQuery', true);

mongoose.connect(MONGODB_URI).then(() => {
    console.log('BD conectada :D')
}).catch((e) => {
    console.error(e)
});