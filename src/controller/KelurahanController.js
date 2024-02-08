import KelurahanService from '../service/KelurahanService.js';

// GET
const GetKelurahanController = async (req, res, next) => {
  try {
    const result = await KelurahanService.GetKelurahanService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan data kelurahan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreateKelurahanController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await KelurahanService.CreateKelurahanService(request);
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Berhasil menambahkan data kelurahan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetKelurahanByIdController = async (req, res, next) => {
  try {
    const { kelurahanId } = req.params;
    const result = await KelurahanService.GetKelurahanByIdService(kelurahanId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan data kelurahan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdateKelurahanController = async (req, res, next) => {
  try {
    const { kelurahanId } = req.params;
    const request = req.body;
    request.id_kelurahan = kelurahanId;
    const result = await KelurahanService.UpdateKelurahanService(request);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mengubah data kelurahan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeleteKelurahanController = async (req, res, next) => {
  try {
    const { kelurahanId } = req.params;
    await KelurahanService.DeleteKelurahanService(kelurahanId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil menghapus data kelurahan!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetKelurahanController,
  CreateKelurahanController,
  GetKelurahanByIdController,
  UpdateKelurahanController,
  DeleteKelurahanController,
};
