import PenghasilanService from '../service/PenghasilanService.js';

// GET
const GetPenghasilanController = async (req, res, next) => {
  try {
    const result = await PenghasilanService.GetPenghasilanService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil Mendapatkan Penghasilan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
const CreatePenghasilanController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await PenghasilanService.CreatePenghasilanService(request);
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Berhasil Menambahkan Penghasilan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetPenghasilanByIdController = async (req, res, next) => {
  try {
    const { penghasilanId } = req.params;
    const result =
      await PenghasilanService.GetPenghasilanByIdService(penghasilanId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil Mendapatkan Penghasilan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdatePenghasilanController = async (req, res, next) => {
  try {
    const { penghasilanId } = req.params;
    const request = req.body;
    request.id_penghasilan = penghasilanId;
    const result = await PenghasilanService.UpdatePenghasilanService(request);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil Mengubah Penghasilan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const DeletePenghasilanController = async (req, res, next) => {
  try {
    const { penghasilanId } = req.params;
    await PenghasilanService.DeletePenghasilanService(penghasilanId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil Menghapus Penghasilan!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  GetPenghasilanController,
  CreatePenghasilanController,
  GetPenghasilanByIdController,
  UpdatePenghasilanController,
  DeletePenghasilanController,
};
