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

// LOGIN
const LoginUserController = async (req, res, next) => {
  try {
    const result = await UsersService.LoginUserService(req.body);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil login!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET
const GetUsersController = async (req, res, next) => {
  try {
    const username = req.users.username;
    const result = await UsersService.GetUsersService(username);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil menampilkan data!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// LOGOUT
const LogoutUserController = async (req, res, next) => {
  try {
    const username = req.users.username;
    await UsersService.LogoutUserService(username);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil logout!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  RegisterUserController,
  VerifikasiUserController,
  LoginUserController,
  GetUsersController,
  LogoutUserController,
};
