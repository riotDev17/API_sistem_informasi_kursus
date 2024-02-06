import express from 'express';
import UsersController from '../controller/UsersController.js';

const Auth = express.Router();

Auth.post('/api/users/signup', UsersController.RegisterUserController);
Auth.post('/api/users/verify', UsersController.VerifikasiUserController);
Auth.post('/api/users/signin', UsersController.LoginUserController);

export { Auth };
