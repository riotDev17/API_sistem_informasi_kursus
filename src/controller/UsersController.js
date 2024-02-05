import UsersService from '../service/UsersService.js';

// REGISTER
const RegisterUserController = async (req, res, next) => {
  try {
    await UsersService.RegisterUserService(req.body);
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Berhasil Register , silahkan verifikasi email anda!',
    });
  } catch (error) {
    next(error);
  }
};

// VERIFIKASI EMAIL
const VerifikasiUserController = async (req, res, next) => {
  try {
    await UsersService.VerifikasiUserService(req.body);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil verifikasi email , silahkan login!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  RegisterUserController,
  VerifikasiUserController,
};