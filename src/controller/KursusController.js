import multer from 'multer';
import KursusService from '../service/KursusService.js';
import uploadFile from '../utils/Multer.js';

// GET
const GetKursusController = async (req, res, next) => {
  try {
    const result = await KursusService.GetKursusService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan semua data kursus!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreateKursusController = async (req, res, next) => {
  try {
    uploadFile.fields([
      { name: 'foto_kursus', maxCount: 1 },
      { name: 'modul_kursus', maxCount: 1 },
    ])(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({
          status: 'ERROR',
          message: err.message,
        });
      } else if (err) {
        next(err);
      }

      const request = req.body;
      if (req.files['foto_kursus'] && req.files['modul_kursus']) {
        request.foto_kursus = req.files['foto_kursus'][0].path;
        request.modul_kursus = req.files['modul_kursus'][0].path;
      }

      try {
        const result = await KursusService.CreateKursusService(request);
        res.status(201).json({
          status: 'SUCCESS',
          message: 'Berhasil menambahkan data kursus!',
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
const GetKursusByIdController = async (req, res, next) => {
  try {
    const { kursusId } = req.params;
    const result = await KursusService.GetKursusByIdService(kursusId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan data kursus!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdateKursusController = async (req, res, next) => {
  try {
    uploadFile.fields([
      { name: 'foto_kursus', maxCount: 1 },
      { name: 'modul_kursus', maxCount: 1 },
    ])(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({
          status: 'ERROR',
          message: err.message,
        });
      } else if (err) {
        next(err);
      }

      const { kursusId } = req.params;
      const request = req.body;
      request.id_kursus = kursusId;
      if (req.files['foto_kursus']) {
        request.foto_kursus = req.files['foto_kursus'][0].path;
      } else if (req.files['modul_kursus']) {
        request.modul_kursus = req.files['modul_kursus'][0].path;
      }

      try {
        const result = await KursusService.UpdateKursusService(request);
        res.status(200).json({
          status: 'SUCCESS',
          message: 'Berhasil mengupdate data kursus!',
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
const DeleteKursusController = async (req, res, next) => {
  try {
    const { kursusId } = req.params;
    await KursusService.DeleteKursusService(kursusId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil menghapus data kursus!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetKursusController,
  CreateKursusController,
  GetKursusByIdController,
  UpdateKursusController,
  DeleteKursusController,
};
