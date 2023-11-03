import express from 'express';

import { getTasks } from '../controllers/taskController.js'

// import {
//   deleteUser,
//   getUser,
//   getUsers,
//   postUser,
//   putUser,
// } from '../controllers/userControllers.js';

// import isAdmin from '../middlewares/isAdmin.js';
// import isAuthenticated from '../middlewares/isAuthenticated.js';
// import validateBody from '../middlewares/validateBody.js';
// import validateParams from '../middlewares/validateParams.js';

// import {
//   delete_params_userSchema,
//   get_params_userSchema,
//   post_userSchema,
//   put_params_userSchema,
//   put_userSchema,
// } from '../helpers/validationSchemas/userSchemas.js';

const routerTasks = express.Router();

// GET
routerTasks.get('/', getTasks)

// routerTasks.get('/', isAuthenticated, isAdmin, getUsers);
// routerTasks.get(
//   '/:id',
//   isAuthenticated,
//   (req, res, next) => validateParams(req, res, next, get_params_userSchema),
//   getUser,
// );

// POST -----------
// routerTasks.post(
//   '/',
//   (req, res, next) => validateBody(req, res, next, post_userSchema),
//   postUser,
// );

// PUT -----------
// routerTasks.put(
//   '/:id',
//   isAuthenticated,
//   (req, res, next) => validateParams(req, res, next, put_params_userSchema),
//   (req, res, next) => validateBody(req, res, next, put_userSchema),
//   putUser,
// );

// DELETE -----------
// routerTasks.delete(
//   '/:id',
//   isAuthenticated,
//   (req, res, next) => validateParams(req, res, next, delete_params_userSchema),
//   deleteUser,
// );

export default routerTasks;