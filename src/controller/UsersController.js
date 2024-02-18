import multer from 'multer';
import uploadFile from '../utils/Multer.js';
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
    const request = req.body;
    const result = await UsersService.LoginUserService(request);
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
const GetUserController = async (req, res, next) => {
  try {
    const email = req.users.email;
    const result = await UsersService.GetUserService(email);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil menampilkan data!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL
const GetAllUserController = async (req, res, next) => {
  try {
    const result = await UsersService.GetAllUserService();
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil menampilkan semua data users!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const GetUserByIdController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await UsersService.GetUserByIdService(userId);
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Berhasil menampilkan data user!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const UpdateUserController = async (req, res, next) => {
  try {
    uploadFile.single('foto_profil')(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        res.status(400).json({
          status: 'ERROR',
          message: error.message,
        });
      } else if (error) {
        next(error);
      }

      const { userId } = req.params;
      const request = req.body;
      request.id_users = userId;

      if (req.file) {
        request.foto_profil = req.file.path;
      }

      try {
        const result = await UsersService.UpdateUserService(request);
        res.status(200).json({
          status: 'SUCCESS',
          message: 'Berhasil update data user!',
          data: result,
        });
      } catch (error) {
        next(error);
      }
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
  GetUserController,
  GetAllUserController,
  GetUserByIdController,
  UpdateUserController,
  LogoutUserController,
};
