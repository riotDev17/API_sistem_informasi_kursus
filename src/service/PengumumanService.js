import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreatePengumumanValidation,
  GetPengumumanValidation,
  UpdatePengumumanValidation,
} from '../validation/PengumumanValidation.js';

// GET
const GetPengumumanService = async () => {
  return prismaClient.pengumuman.findMany({
    select: {
      id_pengumuman: true,
      pendaftaran: {
        select: {
          id_pendaftaran: true,
          nama_lengkap: true,
          email: true,
          kursus: {
            select: {
              id_kursus: true,
              nama_kursus: true,
            },
          },
        },
      },
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

// GET BY ID
const GetPengumumanByIdService = async (pengumumanId) => {
  pengumumanId = await Validation(GetPengumumanValidation, pengumumanId);
  const pengumuman = await prismaClient.pengumuman.findFirst({
    where: {
      id_pengumuman: pengumumanId,
    },
    select: {
      id_pengumuman: true,
      pendaftaran: {
        select: {
          id_pendaftaran: true,
          nama_lengkap: true,
          email: true,
          kursus: {
            select: {
              id_kursus: true,
              nama_kursus: true,
            },
          },
        },
      },
      nilai_test: true,
      nilai_interview: true,
      nilai_rata_rata: true,
      hasil_pengumuman: true,
    },
  });

  if (!pengumuman) {
    throw new ResponseError(404, 'Pengumuman Tidak Ditemukan');
  }

  return pengumuman;
};

// CREATE
const CreatePengumumanService = async (request) => {
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

  return prismaClient.pengumuman.create({
    data: pengumuman,
    select: {
      id_pengumuman: true,
      pendaftaran: {
        select: {
          id_pendaftaran: true,
          nama_lengkap: true,
          email: true,
          kursus: {
            select: {
              id_kursus: true,
              nama_kursus: true,
            },
          },
        },
      },
      nilai_test: true,
      nilai_interview: true,
      nilai_rata_rata: true,
      hasil_pengumuman: true,
    },
  });
};

// UPDATE
const UpdatePengumumanService = async (request) => {
  const pengumuman = await Validation(UpdatePengumumanValidation, request);
  const pengumumanExist = await prismaClient.pengumuman.count({
    where: {
      id_pengumuman: pengumuman.id_pengumuman,
    },
  });

  if (pengumumanExist === 0) {
    throw new ResponseError(404, 'Pengumuman Tidak Ditemukan!');
  }

  return prismaClient.pengumuman.update({
    where: {
      id_pengumuman: pengumuman.id_pengumuman,
    },
    data: pengumuman,
    select: {
      id_pengumuman: true,
      pendaftaran: {
        select: {
          id_pendaftaran: true,
          nama_lengkap: true,
          email: true,
          kursus: {
            select: {
              id_kursus: true,
              nama_kursus: true,
            },
          },
        },
      },
      nilai_test: true,
      nilai_interview: true,
      nilai_rata_rata: true,
      hasil_pengumuman: true,
    },
  });
};

export default {
  GetPengumumanService,
  GetPengumumanByIdService,
  CreatePengumumanService,
  UpdatePengumumanService,
};
