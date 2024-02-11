import express from 'express';
import UsersController from '../controller/UsersController.js';
import AgamaController from '../controller/AgamaController.js';
import KursusController from '../controller/KursusController.js';
import SekolahController from '../controller/SekolahController.js';
import PengajarController from '../controller/PengajarController.js';
import ProvinsiController from '../controller/ProvinsiController.js';
import KabupatenController from '../controller/KabupatenController.js';
import PekerjaanController from '../controller/PekerjaanController.js';
import KecamatanController from '../controller/KecamatanController.js';
import KelurahanController from '../controller/KelurahanController.js';
import PendidikanController from '../controller/PendidikanController.js';
import PenghasilanController from '../controller/PenghasilanController.js';
import PendaftaranController from '../controller/PendaftaranController.js';
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';
import PembayaranController from '../controller/PembayaranController.js';

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

// PROVINSI
Router.get('/api/provinsi', ProvinsiController.GetProvinsiController);
Router.post('/api/provinsi', ProvinsiController.CreateProvinsiController);
Router.get(
  '/api/provinsi/:provinsiId',
  ProvinsiController.GetProvinsiByIdController,
);
Router.put(
  '/api/provinsi/:provinsiId',
  ProvinsiController.UpdateProvinsiController,
);
Router.delete(
  '/api/provinsi/:provinsiId',
  ProvinsiController.DeleteProvinsiController,
);

// KABUPATEN
Router.get('/api/kabupaten', KabupatenController.GetKabupatenController);
Router.post('/api/kabupaten', KabupatenController.CreateKabupatenController);
Router.get(
  '/api/kabupaten/:kabupatenId',
  KabupatenController.GetKabupatenByIdController,
);
Router.put(
  '/api/kabupaten/:kabupatenId',
  KabupatenController.UpdateKabupatenController,
);
Router.delete(
  '/api/kabupaten/:kabupatenId',
  KabupatenController.DeleteKabupatenController,
);

// KECAMATAN
Router.get('/api/kecamatan', KecamatanController.GetKecamatanController);
Router.post('/api/kecamatan', KecamatanController.CreateKecamatanController);
Router.get(
  '/api/kecamatan/:kecamatanId',
  KecamatanController.GetKecamatanByIdController,
);
Router.put(
  '/api/kecamatan/:kecamatanId',
  KecamatanController.UpdateKecamatanController,
);
Router.delete(
  '/api/kecamatan/:kecamatanId',
  KecamatanController.DeleteKecamatanController,
);

// KELURAHAN
Router.get('/api/kelurahan', KelurahanController.GetKelurahanController);
Router.post('/api/kelurahan', KelurahanController.CreateKelurahanController);
Router.get(
  '/api/kelurahan/:kelurahanId',
  KelurahanController.GetKelurahanByIdController,
);
Router.put(
  '/api/kelurahan/:kelurahanId',
  KelurahanController.UpdateKelurahanController,
);
Router.delete(
  '/api/kelurahan/:kelurahanId',
  KelurahanController.DeleteKelurahanController,
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

export { Router };
