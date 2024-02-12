import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import { CreatePengumumanValidation } from '../validation/PengumumanValidation.js';

// GET
const GetPengumumanService = async () => {
  return prismaClient.pengumuman.findMany({
    select: {
      users_ID: true,
      pendaftaran_ID: true,
      nilai_test: true,
      nilai_interview: true,
      nilai_rata_rata: true,
      hasil_pengumuman: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreatePengumumanService = async (users, request) => {
  const pengumuman = await Validation(CreatePengumumanValidation, request);
  const pendaftaranExist = await prismaClient.pendaftaran.findUnique({
    where: {
      id_pendaftaran: pengumuman.pendaftaran_ID,
    },
  });

  if (!pendaftaranExist) {
    throw new ResponseError(404, 'Pendaftaran Tidak Ditemukan!');
  }

  const pengumumanExist = await prismaClient.pengumuman.findFirst({
    where: {
      pendaftaran_ID: pengumuman.pendaftaran_ID,
    },
  });

  if (pengumumanExist) {
    throw new ResponseError(409, 'Pengumuman Sudah Dibuat!');
  }

  pengumuman.users_ID = users?.id_user;
  return prismaClient.pengumuman.create({
    data: pengumuman,
    select: {
      users_ID: true,
      pendaftaran_ID: true,
      nilai_test: true,
      nilai_interview: true,
      nilai_rata_rata: true,
      hasil_pengumuman: true,
    },
  });
};

// GET PENGUMUMAN BY USERS
const GetPengumumanByUserService = async (users) => {
  return prismaClient.pengumuman.findMany({
    where: {
      users_ID: users.id_user,
    },
    select: {
      users_ID: true,
      pendaftaran_ID: true,
      nilai_test: true,
      nilai_interview: true,
      nilai_rata_rata: true,
      hasil_pengumuman: true,
    },
  });
};

export default {
  GetPengumumanService,
  CreatePengumumanService,
  GetPengumumanByUserService,
};
