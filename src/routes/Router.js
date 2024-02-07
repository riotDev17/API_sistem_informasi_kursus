import express from 'express';
import UsersController from '../controller/UsersController.js';
import AgamaController from '../controller/AgamaController.js';
import PekerjaanController from '../controller/PekerjaanController.js';
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';
import PendidikanController from '../controller/PendidikanController.js';

const Router = express.Router();
Router.use(AuthMiddleware);

// USERS
Router.get('/api/users', UsersController.GetUserController);
Router.delete('/api/users/logout', UsersController.LogoutUserController);
Router.put('/api/users/:userId', UsersController.UpdateUserController);

// AGAMA
Router.get('/api/agama', AgamaController.GetAgamaController);
Router.post('/api/agama', AgamaController.CreateAgamaController);
Router.get('/api/agama/:agamaId', AgamaController.GetAgamaByIdController);
Router.put('/api/agama/:agamaId', AgamaController.UpdateAgamaController);
Router.delete('/api/agama/:agamaId', AgamaController.DeleteAgamaController);

// PEKERJAAN
Router.get('/api/pekerjaan', PekerjaanController.GetPekerjaanController);
Router.post('/api/pekerjaan', PekerjaanController.CreatePekerjaanController);
Router.get(
  '/api/pekerjaan/:pekerjaanId',
  PekerjaanController.GetPekerjaanByIdController,
);
Router.put(
  '/api/pekerjaan/:pekerjaanId',
  PekerjaanController.UpdatePekerjaanController,
);
Router.delete(
  '/api/pekerjaan/:pekerjaanId',
  PekerjaanController.DeletePekerjaanController,
);

// PENDIDIKAN
Router.get('/api/pendidikan', PendidikanController.GetPendidikanController);
Router.post('/api/pendidikan', PendidikanController.CreatePendidikanController);
Router.get(
  '/api/pendidikan/:pendidikanId',
  PendidikanController.GetPendidikanByIdController,
);
Router.put(
  '/api/pendidikan/:pendidikanId',
  PendidikanController.UpdatePendidikanController,
);
Router.delete(
  '/api/pendidikan/:pendidikanId',
  PendidikanController.DeletePendidikanController,
);

export { Router };
