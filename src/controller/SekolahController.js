import SekolahService from '../service/SekolahService.js';

// GET
const GetSekolahController = async (req, res, next) => {
  try {
    const result = await SekolahService.GetSekolahService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan semua data sekolah!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreateSekolahController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await SekolahService.CreateSekolahService(request);
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Sekolah berhasil ditambahkan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetSekolahByIdController = async (req, res, next) => {
  try {
    const { sekolahId } = req.params;
    const result = await SekolahService.GetSekolahByIdService(sekolahId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan data sekolah!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdateSekolahController = async (req, res, next) => {
  try {
    const { sekolahId } = req.params;
    const request = req.body;
    request.id_sekolah = sekolahId;
    const result = await SekolahService.UpdateSekolahService(request);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Sekolah berhasil diupdate!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeleteSekolahController = async (req, res, next) => {
  try {
    const { sekolahId } = req.params;
    await SekolahService.DeleteSekolahService(sekolahId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Sekolah berhasil dihapus!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetSekolahController,
  CreateSekolahController,
  GetSekolahByIdController,
  UpdateSekolahController,
  DeleteSekolahController,
};
