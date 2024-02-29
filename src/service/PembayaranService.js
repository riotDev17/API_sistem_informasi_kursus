import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { CreatePembayaranValidation } from '../validation/PembayaranValidation.js';
import { ResponseError } from '../error/ResponseError.js';

// GET
const GetPembayaranService = async () => {
  return prismaClient.pembayaran.findMany({
    select: {
      id_pembayaran: true,
      pendaftaran: {
        select: {
          id_pendaftaran: true,
          nama_lengkap: true,
          email: true,
          kursus: {
            select: {
              nama_kursus: true,
            },
          },
        },
      },
      bukti_pembayaran: true,
      status_pembayaran: true,
    },
  });
};

// CREATE
const CreatePembayaranService = async (request) => {
  const pembayaran = await Validation(CreatePembayaranValidation, request);
  const pendaftaranExist = await prismaClient.pendaftaran.findUnique({
    where: {
      id_pendaftaran: pembayaran.pendaftaran_ID,
    },
  });

  if (!pendaftaranExist) {
    throw new ResponseError(404, 'Pendaftaran Tidak Ditemukan!');
  }

  const pembayaranExist = await prismaClient.pembayaran.findFirst({
    where: {
      pendaftaran_ID: pembayaran.pendaftaran_ID,
    },
  });

  if (pembayaranExist) {
    throw new ResponseError(400, 'Pembayaran Sudah Dilakukan!');
  }

  pembayaran.status_pembayaran = 'Diproses';
  return prismaClient.pembayaran.create({
    data: pembayaran,
    select: {
      id_pembayaran: true,
      pendaftaran_ID: true,
      bukti_pembayaran: true,
      status_pembayaran: true,
    },
  });
};

// CHANGE STATUS VERIFY
const ChangeStatusPembayaranVerifyService = async (pembayaranId) => {
  const pembayaranExist = await prismaClient.pembayaran.findUnique({
    where: {
      id_pembayaran: pembayaranId,
    },
  });

  if (!pembayaranExist) {
    throw new ResponseError(404, 'Pembayaran Tidak Ditemukan!');
  }

  return prismaClient.pembayaran.update({
    where: {
      id_pembayaran: pembayaranId,
    },
    data: {
      status_pembayaran: 'Diterima',
    },
  });
};

// CHANGE STATUS REJECT
const ChangeStatusPembayaranRejectService = async (pembayaranId) => {
  const pembayaranExist = await prismaClient.pembayaran.findUnique({
    where: {
      id_pembayaran: pembayaranId,
    },
  });

  if (!pembayaranExist) {
    throw new ResponseError(404, 'Pembayaran Tidak Ditemukan!');
  }

  return prismaClient.pembayaran.update({
    where: {
      id_pembayaran: pembayaranId,
    },
    data: {
      status_pembayaran: 'Ditolak',
    },
  });
};

export default {
  GetPembayaranService,
  CreatePembayaranService,
  ChangeStatusPembayaranVerifyService,
  ChangeStatusPembayaranRejectService,
};
