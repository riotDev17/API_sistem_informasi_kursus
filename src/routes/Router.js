import express from 'express';
import UsersController from '../controller/UsersController.js';
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';

const Router = express.Router();
Router.use(AuthMiddleware);

// USERS
Router.get('/api/users', UsersController.GetUsersController);
Router.delete('/api/users/logout', UsersController.LogoutUserController);

export { Router };
