import express from 'express';
import UsersController from '../controller/UsersController.js';
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';

const Router = express.Router();
Router.use(AuthMiddleware);

// USERS
Router.get('/api/users', UsersController.GetUserController);
Router.get('/api/users/logout', UsersController.LogoutUserController);
Router.put('/api/users/:userId', UsersController.UpdateUserController);

export { Router };
