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

const GetUsersValidation = Joi.string().max(100);
const LogoutUserValidation = Joi.string().max(100);

export {
  RegisterUserValidation,
  VerifyEmailValidation,
  LoginUserValidation,
  GetUsersValidation,
  LogoutUserValidation,
};
