import multer from 'multer';
import PendaftaranService from '../service/PendaftaranService.js';
import uploadFile from '../utils/Multer.js';

// GET
const GetPendaftaranController = async (req, res, next) => {
  try {
    const result = await PendaftaranService.GetPendaftaranService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil Mendapatkan Semua Data Pendaftaran!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY USERS
const GetPendaftaranByUserController = async (req, res, next) => {
  try {
    const users = req.users;
    const result = await PendaftaranService.GetPendaftaranByUserService(users);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil Mendapatkan Data Pendaftaran!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetPendaftaranByIdController = async (req, res, next) => {
  try {
    const { pendaftaranId } = req.params;
    const result =
      await PendaftaranService.GetPendaftaranByIdService(pendaftaranId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil Mendapatkan Data Pendaftaran!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreatePendaftaranController = async (req, res, next) => {
  try {
    uploadFile.fields([
      { name: 'pas_foto', maxCount: 1 },
      { name: 'slip_gaji_ayah_ibu', maxCount: 1 },
      { name: 'foto_kk', maxCount: 1 },
      { name: 'raport', maxCount: 1 },
      { name: 'prestasi', maxCount: 1 },
    ])(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: err.message,
        });
      } else if (err) {
        next(err);
      }

      const users = req.users;
      const request = req.body;
      if (
        req.files['pas_foto'] &&
        req.files['slip_gaji_ayah_ibu'] &&
        req.files['foto_kk'] &&
        req.files['raport'] &&
        req.files['prestasi']
      ) {
        request.pas_foto = req.files['pas_foto'][0].path;
        request.slip_gaji_ayah_ibu = req.files['slip_gaji_ayah_ibu'][0].path;
        request.foto_kk = req.files['foto_kk'][0].path;
        request.raport = req.files['raport'][0].path;
        request.prestasi = req.files['prestasi'][0].path;
      }

      try {
        const result = await PendaftaranService.CreatePendaftaranService(
          users,
          request,
        );
        res.status(201).json({
          status: 'SUCCESS',
          message: 'Pendaftaran Berhasil Dilakukan',
          data: result,
        });
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
};

// CHANGE STATUS DIVERIFIKASI
const ChangeStatusPendaftaranVerifyController = async (req, res, next) => {
  try {
    const { pendaftaranId } = req.params;
    await PendaftaranService.ChangeStatusPendaftaranVerifyService(
      pendaftaranId,
    );
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Status Pendaftaran Berhasil Diverifikasi',
    });
  } catch (error) {
    next(error);
  }
};

// CHANGE STATUS DITOLAK
const ChangeStatusPendaftaranRejectController = async (req, res, next) => {
  try {
    const { pendaftaranId } = req.params;
    await PendaftaranService.ChangeStatusPendaftaranRejectService(
      pendaftaranId,
    );
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Status Pendaftaran Berhasil Ditolak',
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdatePendaftaranController = async (req, res, next) => {
  try {
    uploadFile.fields([
      { name: 'pas_foto', maxCount: 1 },
      { name: 'slip_gaji_ayah_ibu', maxCount: 1 },
      { name: 'foto_kk', maxCount: 1 },
      { name: 'raport', maxCount: 1 },
      { name: 'prestasi', maxCount: 1 },
    ])(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: err.message,
        });
      } else if (err) {
        next(err);
      }

      const { pendaftaranId } = req.params;
      const users = req.users;
      const request = req.body;
      request.id_pendaftaran = pendaftaranId;
      if (
        req.files['pas_foto'] &&
        req.files['slip_gaji_ayah_ibu'] &&
        req.files['foto_kk'] &&
        req.files['raport'] &&
        req.files['prestasi']
      ) {
        request.pas_foto = req.files['pas_foto'][0].path;
        request.slip_gaji_ayah_ibu = req.files['slip_gaji_ayah_ibu'][0].path;
        request.foto_kk = req.files['foto_kk'][0].path;
        request.raport = req.files['raport'][0].path;
        request.prestasi = req.files['prestasi'][0].path;
      }

      try {
        const result = await PendaftaranService.UpdatePendaftaranService(
          users,
          request,
        );
        res.status(200).json({
          status: 'SUCCESS',
          message: 'Pendaftaran Berhasil Diupdate!',
          data: result,
        });
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeletePendaftaranController = async (req, res, next) => {
  try {
    const { pendaftaranId } = req.params;
    await PendaftaranService.DeletePendaftaranService(pendaftaranId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Pendaftaran Berhasil Dibatalkan!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetPendaftaranController,
  CreatePendaftaranController,
  GetPendaftaranByUserController,
  GetPendaftaranByIdController,
  ChangeStatusPendaftaranVerifyController,
  ChangeStatusPendaftaranRejectController,
  UpdatePendaftaranController,
  DeletePendaftaranController,
};
