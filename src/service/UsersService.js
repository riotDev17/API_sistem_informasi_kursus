import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Transporter from '../utils/Transporter.js';
import otpGenerator from 'otp-generator';
import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  RegisterUserValidation,
  VerifyEmailValidation,
  LoginUserValidation,
  GetUsersValidation,
  LogoutUserValidation,
  UpdateUserValidation,
} from '../validation/UsersValidation.js';

// REGISTER
const RegisterUserService = async (request) => {
  const users = await Validation(RegisterUserValidation, request);
  const isEmailExist = await prismaClient.users.findFirst({
    where: {
      email: users.email,
    },
  });

  if (isEmailExist) {
    throw new ResponseError(409, 'Email sudah terdaftar!');
  }

  const otp = otpGenerator.generate(6, {
    digits: true,
    upperCase: false,
    specialChars: false,
    alphabets: false,
  });

  users.password = await bcrypt.hash(users.password, 10);
  users.role = 'user';
  users.otp = await bcrypt.hash(otp, 10);

  Transporter.sendMail({
    from: {
      name: 'Riot X',
      address: process.env.SMTP_EMAIL,
    },
    to: users.email,
    subject: 'Verifikasi Email',
    html: `<p>Silakan verifikasi email Anda dengan menggunakan kode OTP berikut: <strong>${otp}</strong></p>`,
  });

  return prismaClient.users.create({
    data: users,
  });
};

// VERIFIKASI EMAIL
const VerifikasiUserService = async (request) => {
  const users = await Validation(VerifyEmailValidation, request);
  const emailExist = await prismaClient.users.findUnique({
    where: {
      email: users.email,
    },
  });

  if (!emailExist) {
    throw new ResponseError(404, 'Email tidak ditemukan!');
  }

  const isOTPMatch = await bcrypt.compare(users.otp, emailExist.otp);

  if (!isOTPMatch) {
    throw new ResponseError(400, 'OTP tidak valid!');
  } else {
    return prismaClient.users.update({
      where: {
        email: users.email,
      },
      data: {
        verifikasi_email: true,
        tanggal_verifikasi_email: new Date().toDateString(),
        otp: null,
      },
    });
  }
};

// LOGIN
const LoginUserService = async (request) => {
  const users = await Validation(LoginUserValidation, request);
  const usersData = await prismaClient.users.findFirst({
    where: {
      username: users.username,
    },
  });

  if (!usersData) {
    throw new ResponseError(401, 'Username atau password salah!');
  }

  if (
    !usersData.verifikasi_email &&
    usersData.tanggal_verifikasi_email === null
  ) {
    throw new ResponseError(403, 'Email anda belum diverifikasi!');
  }

  const isPasswordMatch = await bcrypt.compare(
    users.password,
    usersData.password,
  );

  if (!isPasswordMatch) {
    throw new ResponseError(401, 'Username atau password salah!');
  } else if (isPasswordMatch) {
    const payload = {
      id_user: usersData.id_users,
      email: usersData.email,
      role: usersData.role,
    };

    const accessToken = process.env.ACCESS_TOKEN;
    const tokenExpired = 24 * 60 * 60 * 1000;
    const token = jwt.sign(payload, accessToken, {
      expiresIn: tokenExpired,
    });

    return {
      username: usersData.username,
      email: usersData.email,
      nama: usersData.nama,
      role: usersData.role,
      token: token,
    };
  }
};

// GET
const GetUserService = async (email) => {
  email = Validation(GetUsersValidation, email);
  const users = await prismaClient.users.findFirst({
    where: {
      email: email,
    },
    select: {
      id_users: true,
      nama: true,
      email: true,
      username: true,
      role: true,
      verifikasi_email: true,
      tanggal_verifikasi_email: true,
      foto_profil: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      jenis_kelamin: true,
      no_telepon: true,
      alamat: true,
      instagram: true,
      whatsapp: true,
    },
  });

  if (!users) {
    throw new ResponseError(404, 'Username tidak ditemukan!');
  }

  return users;
};

// GET ALL
const GetAllUserService = async () => {
  const users = await prismaClient.users.findMany({
    select: {
      id_users: true,
      nama: true,
      email: true,
      username: true,
      role: true,
      verifikasi_email: true,
      tanggal_verifikasi_email: true,
      foto_profil: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      jenis_kelamin: true,
      no_telepon: true,
      alamat: true,
      instagram: true,
      whatsapp: true,
    },
  });

  if (!users) {
    throw new ResponseError(404, 'User tidak ditemukan!');
  }

  return users;
};

// UPDATE
const UpdateUserService = async (request) => {
  const users = await Validation(UpdateUserValidation, request);
  const usersExist = await prismaClient.users.count({
    where: {
      id_users: users.id_users,
    },
  });

  if (usersExist !== 1) {
    throw new ResponseError(404, 'User tidak ditemukan!');
  }

  return prismaClient.users.update({
    where: {
      id_users: users.id_users,
    },
    data: users,
    select: {
      id_users: true,
      nama: true,
      email: true,
      username: true,
      role: true,
      foto_profil: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      jenis_kelamin: true,
      no_telepon: true,
      alamat: true,
      instagram: true,
      whatsapp: true,
      verifikasi_email: true,
      tanggal_verifikasi_email: true,
    },
  });
};

// LOGOUT
const LogoutUserService = async (username) => {
  username = await Validation(LogoutUserValidation, username);
  const users = await prismaClient.users.findFirst({
    where: {
      username: username,
    },
  });

  if (!users) {
    throw new ResponseError(404, 'Username tidak ditemukan!');
  }

  return users;
};

export default {
  RegisterUserService,
  VerifikasiUserService,
  LoginUserService,
  GetUserService,
  GetAllUserService,
  UpdateUserService,
  LogoutUserService,
};
