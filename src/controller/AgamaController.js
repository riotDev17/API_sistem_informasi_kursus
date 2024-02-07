import AgamaService from '../service/AgamaService.js';

// GETA
const GetAgamaController = async (req, res, next) => {
  try {
    const result = await AgamaService.GetAgamaService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Agama!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreateAgamaController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await AgamaService.CreateAgamaService(request);
    res.status(201).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Agama!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetAgamaByIdController = async (req, res, next) => {
  try {
    const { agamaId } = req.params;
    const result = await AgamaService.GetAgamaByIdService(agamaId);
    res.status(200).json({
      status: 'Success',
      message: `Berhasil Mendapatkan Data Agama ${result.nama_agama}!`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdateAgamaController = async (req, res, next) => {
  try {
    const { agamaId } = req.params;
    const request = req.body;
    request.id_agama = agamaId;
    const result = await AgamaService.UpdateAgamaService(request);
    res.status(200).json({
      status: 'Success',
      message: `Berhasil Mengupdate Data Agama!`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeleteAgamaController = async (req, res, next) => {
  try {
    const { agamaId } = req.params;
    await AgamaService.DeleteAgamaService(agamaId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data Agama!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetAgamaController,
  CreateAgamaController,
  GetAgamaByIdController,
  UpdateAgamaController,
  DeleteAgamaController,
};
