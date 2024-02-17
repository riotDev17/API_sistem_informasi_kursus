import multer from 'multer';
import PengajarService from '../service/PengajarService.js';
import uploadFile from '../utils/Multer.js';

// GET
const GetPengajarController = async (req, res, next) => {
  try {
    const result = await PengajarService.GetPengajarService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menampilkan Semua Data Pengajar!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreatePengajarController = async (req, res, next) => {
  try {
    uploadFile.fields([
      { name: 'foto_pengajar', maxCount: 1 },
      { name: 'sertifikat_pengajar', maxCount: 1 },
    ])(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: err.message,
        });
      } else if (err) {
        next(err);
      }

      const request = req.body;
      if (req.files['foto_pengajar'] && req.files['sertifikat_pengajar']) {
        request.foto_pengajar = req.files['foto_pengajar'][0].path;
        request.sertifikat_pengajar = req.files['sertifikat_pengajar'][0].path;
      }

      try {
        const result = await PengajarService.CreatePengajarService(request);
        res.status(201).json({
          status: 'Success',
          message: 'Berhasil Menambahkan Data Pengajar!',
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

// GET BY ID
const GetPengajarByIdController = async (req, res, next) => {
  try {
    const { pengajarId } = req.params;
    const result = await PengajarService.GetPengajarByIdService(pengajarId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menampilkan Data Pengajar!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdatePengajarController = async (req, res, next) => {
  try {
    uploadFile.fields([
      { name: 'foto_pengajar', maxCount: 1 },
      { name: 'sertifikat_pengajar', maxCount: 1 },
    ])(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: err.message,
        });
      } else if (err) {
        next(err);
      }

      const { pengajarId } = req.params;
      const request = req.body;
      request.id_pengajar = pengajarId;

      if (req.files['foto_pengajar'] && req.files['sertifikat_pengajar']) {
        request.foto_pengajar = req.files['foto_pengajar'][0].path;
        request.sertifikat_pengajar = req.files['sertifikat_pengajar'][0].path;
      }

      try {
        const result = await PengajarService.UpdatePengajarService(request);
        res.status(200).json({
          status: 'Success',
          message: 'Berhasil Mengupdate Data Pengajar!',
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
const DeletePengajarController = async (req, res, next) => {
  try {
    const { pengajarId } = req.params;
    await PengajarService.DeletePengajarService(pengajarId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data Pengajar!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetPengajarController,
  CreatePengajarController,
  GetPengajarByIdController,
  UpdatePengajarController,
  DeletePengajarController,
};
