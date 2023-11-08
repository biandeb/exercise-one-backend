import express from 'express';

import { getTasks, postTask } from '../controllers/taskController.js';

const router = express.Router();

// GET
router.get('/', getTasks);

// POST -----------
router.post('/', postTask);

export default router;
