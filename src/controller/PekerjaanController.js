import PekerjaanService from '../service/PekerjaanService.js';

// GET
const GetPekerjaanController = async (req, res, next) => {
  try {
    const result = await PekerjaanService.GetPekerjaanService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil Mendapatkan Semua Data Pekerjaan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreatePekerjaanController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await PekerjaanService.CreatePekerjaanService(request);
    res.status(201).json({
      status: 'SUCCESS',
      message: ' Berhasil Menambahkan Pekerjaan',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetPekerjaanByIdController = async (req, res, next) => {
  try {
    const { pekerjaanId } = req.params;
    const result = await PekerjaanService.GetPekerjaanByIdService(pekerjaanId);
    res.status(200).json({
      status: 'SUCCESS',
      message: `Berhasil Mendapatkan Data Pekerjaan ${result.nama_pekerjaan}!`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdatePekerjaanController = async (req, res, next) => {
  try {
    const { pekerjaanId } = req.params;
    const request = req.body;
    request.id_pekerjaan = pekerjaanId;
    const result = await PekerjaanService.UpdatePekerjaanService(request);
    res.status(200).json({
      status: 'Success',
      message: `Berhasil Mengupdate Data Pekerjaan!`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeletePekerjaanController = async (req, res, next) => {
  try {
    const { pekerjaanId } = req.params;
    await PekerjaanService.DeletePekerjaanService(pekerjaanId);
    res.status(200).json({
      status: 'Success',
      message: `Berhasil Menghapus Data Pekerjaan!`,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetPekerjaanController,
  CreatePekerjaanController,
  GetPekerjaanByIdController,
  UpdatePekerjaanController,
  DeletePekerjaanController,
};
