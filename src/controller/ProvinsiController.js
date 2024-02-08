import ProvinsiService from '../service/ProvinsiService.js';

// GET
const GetProvinsiController = async (req, res, next) => {
  try {
    const result = await ProvinsiService.GetProvinsiService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan semua data provinsi',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreateProvinsiController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await ProvinsiService.CreateProvinsiService(request);
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Provinsi berhasil ditambahkan',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetProvinsiByIdController = async (req, res, next) => {
  try {
    const { provinsiId } = req.params;
    const result = await ProvinsiService.GetProvinsiByIdService(provinsiId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan data provinsi',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdateProvinsiController = async (req, res, next) => {
  try {
    const { provinsiId } = req.params;
    const request = req.body;
    request.id_provinsi = provinsiId;
    const result = await ProvinsiService.UpdateProvinsiService(request);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Provinsi berhasil diubah',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeleteProvinsiController = async (req, res, next) => {
  try {
    const { provinsiId } = req.params;
    await ProvinsiService.DeleteProvinsiService(provinsiId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Provinsi berhasil dihapus',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetProvinsiController,
  CreateProvinsiController,
  GetProvinsiByIdController,
  UpdateProvinsiController,
  DeleteProvinsiController,
};
