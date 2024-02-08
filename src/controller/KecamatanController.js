import KecamatanService from '../service/KecamatanService.js';

// GET
const GetKecamatanController = async (req, res, next) => {
  try {
    const result = await KecamatanService.GetKecamatanService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan semua data kecamatan',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreateKecamatanController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await KecamatanService.CreateKecamatanService(request);
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Kecamatan berhasil ditambahkan',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetKecamatanByIdController = async (req, res, next) => {
  try {
    const { kecamatanId } = req.params;
    const result = await KecamatanService.GetKecamatanByIdService(kecamatanId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan data kecamatan',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdateKecamatanController = async (req, res, next) => {
  try {
    const { kecamatanId } = req.params;
    const request = req.body;
    request.id_kecamatan = kecamatanId;
    const result = await KecamatanService.UpdateKecamatanService(request);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Kecamatan berhasil diubah',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeleteKecamatanController = async (req, res, next) => {
  try {
    const { kecamatanId } = req.params;
    await KecamatanService.DeleteKecamatanService(kecamatanId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Kecamatan berhasil dihapus',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetKecamatanController,
  CreateKecamatanController,
  GetKecamatanByIdController,
  UpdateKecamatanController,
  DeleteKecamatanController,
};
