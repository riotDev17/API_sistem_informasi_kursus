import KabupatenService from '../service/KabupatenService.js';

// GET
const GetKabupatenController = async (req, res, next) => {
  try {
    const result = await KabupatenService.GetKabupatenService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan semua data kabupaten',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreateKabupatenController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await KabupatenService.CreateKabupatenService(request);
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Kabupaten berhasil ditambahkan',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetKabupatenByIdController = async (req, res, next) => {
  try {
    const { kabupatenId } = req.params;
    const result = await KabupatenService.GetKabupatenByIdService(kabupatenId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil mendapatkan data kabupaten',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdateKabupatenController = async (req, res, next) => {
  try {
    const { kabupatenId } = req.params;
    const request = req.body;
    request.id_kabupaten = kabupatenId;
    const result = await KabupatenService.UpdateKabupatenService(request);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Kabupaten berhasil diubah',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeleteKabupatenController = async (req, res, next) => {
  try {
    const { kabupatenId } = req.params;
    await KabupatenService.DeleteKabupatenService(kabupatenId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Kabupaten berhasil dihapus',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetKabupatenController,
  CreateKabupatenController,
  GetKabupatenByIdController,
  UpdateKabupatenController,
  DeleteKabupatenController,
};
