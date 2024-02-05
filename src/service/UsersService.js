import bcrypt from 'bcrypt';
import Transporter from '../utils/Transporter.js';
import otpGenerator from 'otp-generator';
import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  RegisterUserValidation,
  VerifyEmailValidation,
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
  const isEmailExist = await prismaClient.users.findUnique({
    where: {
      email: users.email,
    },
  });

  if (!isEmailExist) {
    throw new ResponseError(404, 'Email tidak ditemukan!');
  }

  const isOTPMatch = bcrypt.compare(users.otp, isEmailExist.otp);

  if (!isOTPMatch) {
    throw new ResponseError(400, 'OTP tidak valid!');
  } else if (isOTPMatch) {
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

export default {
  RegisterUserService,
  VerifikasiUserService,
};
