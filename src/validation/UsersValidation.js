import Joi from 'joi';

const RegisterUserValidation = Joi.object({
  nama: Joi.string().max(50).required(),
  email: Joi.string().email().max(50).required(),
  username: Joi.string().max(50).required(),
  password: Joi.string().max(50).required(),
});

const VerifyEmailValidation = Joi.object({
  email: Joi.string().max(50).required(),
  otp: Joi.string().length(6).required(),
});

const LoginUserValidation = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().max(50).required(),
});

const UpdateUserValidation = Joi.object({
  id_users: Joi.string().max(100).required(),
  nama: Joi.string().max(50).required(),
  foto_profil: Joi.string().optional(),
  tempat_lahir: Joi.string().required(),
  tanggal_lahir: Joi.string().max(50).required(),
  jenis_kelamin: Joi.string().max(50).required(),
  no_telepon: Joi.string().max(25).optional(),
  alamat: Joi.string().required(),
  instagram: Joi.string().optional(),
  whatsapp: Joi.string().max(25).optional(),
});

const GetUsersValidation = Joi.string().max(100);
const LogoutUserValidation = Joi.string().max(100);

export {
  RegisterUserValidation,
  VerifyEmailValidation,
  LoginUserValidation,
  GetUsersValidation,
  UpdateUserValidation,
  LogoutUserValidation,
};
