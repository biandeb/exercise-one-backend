import TaskModel from '../models/taskSchema.js';

export const getTasks = async (_, res) => {
  try {
    const data = await TaskModel.find({});

    res.json({ data, message: 'Tareas encontradas' });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      data: null,
      message: 'Ocurrió un error al conectarse a la base de datos.',
    });
  }
};

export const postTask = async (req, res) => {
  const { body } = req;

  const newTask = new TaskModel({
    name: body.name,
  });

  try {
    await newTask.save();

    res.status(201).json({
      data: null,
      message: 'Tarea creada con éxito ✨.',
    });
  } catch (e) {
    if (e.message.includes('duplicate')) {
      res.status(400).json({
        data: null,
        message: 'La tarea ya es existente.',
      });
      return;
    }

    res.status(500).json({
      data: null,
      message: 'Ocurrió un error guardando la tarea.',
      error: e.message,
    });
  }
};
