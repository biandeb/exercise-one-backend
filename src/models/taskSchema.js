import mongoose from 'mongoose';

const Task = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model('Tasks', Task);
