import TaskCollection from '../models/taskSchema.js';

export const getTasks = async (_, res) => {
  try {
    const data = await TaskCollection.find({});

    res.json(data);
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: 'Ocurrió un error al conectarse a la base de datos.',
    });
  }
};
