import PendidikanService from '../service/PendidikanService.js';

// GET
const GetPendidikanController = async (req, res, next) => {
  try {
    const result = await PendidikanService.GetPendidikanService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Pendidikan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreatePendidikanController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await PendidikanService.CreatePendidikanService(request);
    res.status(201).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Pendidikan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetPendidikanByIdController = async (req, res, next) => {
  try {
    const { pendidikanId } = req.params;
    const result =
      await PendidikanService.GetPendidikanByIdService(pendidikanId);
    res.status(200).json({
      status: 'Success',
      message: `Berhasil Mendapatkan Data Pendidikan ${result.nama_pendidikan} !`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdatePendidikanController = async (req, res, next) => {
  try {
    const { pendidikanId } = req.params;
    const request = req.body;
    request.id_pendidikan = pendidikanId;
    const result = await PendidikanService.UpdatePendidikanService(request);
    res.status(200).json({
      status: 'Success',
      message: `Berhasil Mengubah Data Pendidikan!`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeletePendidikanController = async (req, res, next) => {
  try {
    const { pendidikanId } = req.params;
    await PendidikanService.DeletePendidikanService(pendidikanId);
    res.status(200).json({
      status: 'Success',
      message: `Berhasil Menghapus Data Pendidikan!`,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetPendidikanController,
  CreatePendidikanController,
  GetPendidikanByIdController,
  UpdatePendidikanController,
  DeletePendidikanController,
};
