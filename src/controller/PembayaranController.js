import multer from 'multer';
import PembayaranService from '../service/PembayaranService.js';
import uploadFile from '../utils/Multer.js';

// GET
const GetPembayaranController = async (req, res, next) => {
  try {
    const result = await PembayaranService.GetPembayaranService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Pembayaran!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetPembayaranByIdController = async (req, res, next) => {
  try {
    const { pembayaranId } = req.params;
    const result =
      await PembayaranService.GetPembayaranByIdService(pembayaranId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Pembayaran By Id!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY USER
const GetPembayaranByUserController = async (req, res, next) => {
  try {
    const users = req.users;
    const result = await PembayaranService.GetPembayaranByUserService(users);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Pembayaran By Users!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreatePembayaranController = async (req, res, next) => {
  try {
    uploadFile.single('bukti_pembayaran')(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: err.message,
        });
      } else if (err) {
        next(err);
      }

      const { pendaftaranId } = req.params;
      const request = req.body;
      const users = req.users;
      request.pendaftaran_ID = pendaftaranId;
      if (req.file) {
        request.bukti_pembayaran = req.file.path;
      }

      try {
        const result = await PembayaranService.CreatePembayaranService(
          users,
          request,
        );
        res.status(201).json({
          status: 'Success',
          message: 'Berhasil Mengirimkan Bukti Pembayaran!',
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

// CHANGE STATUS VERIFY
const ChangeStatusPembayaranVerifyController = async (req, res, next) => {
  try {
    const { pembayaranId } = req.params;
    await PembayaranService.ChangeStatusPembayaranVerifyService(pembayaranId);
    res.status(200).json({
      status: 'Success',
      message: 'Pembayaran Diterima!',
    });
  } catch (error) {
    next(error);
  }
};

// CHANGE STATUS REJECT
const ChangeStatusPembayaranRejectController = async (req, res, next) => {
  try {
    const { pembayaranId } = req.params;
    await PembayaranService.ChangeStatusPembayaranRejectService(pembayaranId);
    res.status(200).json({
      status: 'Success',
      message: 'Pembayaran Ditolak!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetPembayaranController,
  CreatePembayaranController,
  GetPembayaranByIdController,
  GetPembayaranByUserController,
  ChangeStatusPembayaranVerifyController,
  ChangeStatusPembayaranRejectController,
};
