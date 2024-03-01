import express from 'express';
import UsersController from '../controller/UsersController.js';
import AgamaController from '../controller/AgamaController.js';
import KursusController from '../controller/KursusController.js';
import SekolahController from '../controller/SekolahController.js';
import PengajarController from '../controller/PengajarController.js';
import PekerjaanController from '../controller/PekerjaanController.js';
import PengumumanController from '../controller/PengumumanController.js';
import PendidikanController from '../controller/PendidikanController.js';
import PembayaranController from '../controller/PembayaranController.js';
import PenghasilanController from '../controller/PenghasilanController.js';
import PendaftaranController from '../controller/PendaftaranController.js';
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';

const Router = express.Router();
Router.use(AuthMiddleware);

// USERS
Router.get('/api/users', UsersController.GetUserController);
Router.get('/api/users/all', UsersController.GetAllUserController);
Router.get('/api/users/:userId', UsersController.GetUserByIdController);
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

// PENGHASILAN
Router.get('/api/penghasilan', PenghasilanController.GetPenghasilanController);
Router.post(
  '/api/penghasilan',
  PenghasilanController.CreatePenghasilanController,
);
Router.get(
  '/api/penghasilan/:penghasilanId',
  PenghasilanController.GetPenghasilanByIdController,
);
Router.put(
  '/api/penghasilan/:penghasilanId',
  PenghasilanController.UpdatePenghasilanController,
);
Router.delete(
  '/api/penghasilan/:penghasilanId',
  PenghasilanController.DeletePenghasilanController,
);

// SEKOLAH
Router.get('/api/sekolah', SekolahController.GetSekolahController);
Router.post('/api/sekolah', SekolahController.CreateSekolahController);
Router.get(
  '/api/sekolah/:sekolahId',
  SekolahController.GetSekolahByIdController,
);
Router.put(
  '/api/sekolah/:sekolahId',
  SekolahController.UpdateSekolahController,
);
Router.delete(
  '/api/sekolah/:sekolahId',
  SekolahController.DeleteSekolahController,
);

// PENGAJAR
Router.get('/api/pengajar', PengajarController.GetPengajarController);
Router.post('/api/pengajar', PengajarController.CreatePengajarController);
Router.get(
  '/api/pengajar/:pengajarId',
  PengajarController.GetPengajarByIdController,
);
Router.put(
  '/api/pengajar/:pengajarId',
  PengajarController.UpdatePengajarController,
);
Router.delete(
  '/api/pengajar/:pengajarId',
  PengajarController.DeletePengajarController,
);

// KURSUS
Router.get('/api/kursus', KursusController.GetKursusController);
Router.post('/api/kursus', KursusController.CreateKursusController);
Router.get('/api/kursus/:kursusId', KursusController.GetKursusByIdController);
Router.put('/api/kursus/:kursusId', KursusController.UpdateKursusController);
Router.delete('/api/kursus/:kursusId', KursusController.DeleteKursusController);

// PENDAFTARAN
Router.get('/api/pendaftaran', PendaftaranController.GetPendaftaranController);
Router.post(
  '/api/pendaftaran',
  PendaftaranController.CreatePendaftaranController,
);
Router.get(
  '/api/pendaftaran/user',
  PendaftaranController.GetPendaftaranByUserController,
);
Router.get(
  '/api/pendaftaran/:pendaftaranId',
  PendaftaranController.GetPendaftaranByIdController,
);
Router.put(
  '/api/pendaftaran/verify/:pendaftaranId',
  PendaftaranController.ChangeStatusPendaftaranVerifyController,
);
Router.put(
  '/api/pendaftaran/reject/:pendaftaranId',
  PendaftaranController.ChangeStatusPendaftaranRejectController,
);
Router.put(
  '/api/pendaftaran/:pendaftaranId',
  PendaftaranController.UpdatePendaftaranController,
);
Router.delete(
  '/api/pendaftaran/:pendaftaranId',
  PendaftaranController.DeletePendaftaranController,
);

// PEMBAYARAN
Router.get('/api/pembayaran', PembayaranController.GetPembayaranController);
Router.get(
  '/api/pembayaran/:pembayaranId',
  PembayaranController.GetPembayaranByIdController,
);
Router.post(
  '/api/pembayaran/:pendaftaranId',
  PembayaranController.CreatePembayaranController,
);
Router.put(
  '/api/pembayaran/verify/:pembayaranId',
  PembayaranController.ChangeStatusPembayaranVerifyController,
);
Router.put(
  '/api/pembayaran/reject/:pembayaranId',
  PembayaranController.ChangeStatusPembayaranRejectController,
);

// PENGUMUMAN
Router.get('/api/pengumuman', PengumumanController.GetPengumumanController);
Router.post(
  '/api/pengumuman/:pendaftaranId',
  PengumumanController.CreatePengumumanController,
);
Router.get(
  '/api/pengumuman/user',
  PengumumanController.GetPengumumanByUserController,
);

export { Router };
