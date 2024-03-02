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

// GET BY ID
const GetPengumumanByIdController = async (req, res, next) => {
  try {
    const { pengumumanId } = req.params;
    const result =
      await PengumumanService.GetPengumumanByIdService(pengumumanId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan pengumuman By ID',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreatePengumumanController = async (req, res, next) => {
  try {
    // const { pendaftaranId } = req.params;
    const request = req.body;
    // request.pendaftaran_ID = pendaftaranId;
    const result = await PengumumanService.CreatePengumumanService(request);
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Pengumuman berhasil dibuat',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE PENGUMUMAN
const UpdatePengumumanController = async (req, res, next) => {
  try {
    const { pengumumanId } = req.params;
    const request = req.body;
    request.id_pengumuman = pengumumanId;
    const result = await PengumumanService.UpdatePengumumanService(request);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Pengumuman berhasil diupdate',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetPengumumanController,
  GetPengumumanByIdController,
  CreatePengumumanController,
  UpdatePengumumanController,
};
