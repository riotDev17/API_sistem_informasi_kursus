import PengumumanService from '../service/PengumumanService.js';

// GET
const GetPengumumanController = async (req, res, next) => {
  try {
    const result = await PengumumanService.GetPengumumanService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan pengumuman',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreatePengumumanController = async (req, res, next) => {
  try {
    const { pendaftaranId } = req.params;
    const users = req.users;
    const request = req.body;
    request.pendaftaran_ID = pendaftaranId;
    const result = await PengumumanService.CreatePengumumanService(
      users,
      request,
    );
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Pengumuman berhasil dibuat',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET PENGUMUMAN BY USER
const GetPengumumanByUserController = async (req, res, next) => {
  try {
    const users = req.users;
    const result = await PengumumanService.GetPengumumanByUserService(users);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan pengumuman',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetPengumumanController,
  CreatePengumumanController,
  GetPengumumanByUserController,
};
