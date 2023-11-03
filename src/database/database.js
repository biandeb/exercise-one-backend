import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('BD conectada :D');
  })
  .catch((e) => {
    console.error(e);
  });
