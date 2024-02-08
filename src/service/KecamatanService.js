import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreateKecamatanValidation,
  DeleteKecamatanValidation,
  GetKecamatanValidation,
  UpdateKecamatanValidation,
} from '../validation/KecamatanValidation.js';

// GET
const GetKecamatanService = async () => {
  return prismaClient.kecamatan.findMany({
    select: {
      kabupaten: {
        select: {
          id_kabupaten: true,
          nama_kabupaten: true,
        },
      },
      id_kecamatan: true,
      nama_kecamatan: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreateKecamatanService = async (request) => {
  const kecamatan = await Validation(CreateKecamatanValidation, request);
  const kecamatanExist = await prismaClient.kecamatan.count({
    where: {
      nama_kecamatan: kecamatan.nama_kecamatan,
    },
  });

  if (kecamatanExist === 1) {
    throw new ResponseError(409, 'Kecamatan sudah ada!');
  }

  return prismaClient.kecamatan.create({
    data: kecamatan,
    select: {
      kabupaten: {
        select: {
          id_kabupaten: true,
          nama_kabupaten: true,
        },
      },
      id_kecamatan: true,
      nama_kecamatan: true,
    },
  });
};

// GET BY ID
const GetKecamatanByIdService = async (kecamatanId) => {
  kecamatanId = await Validation(GetKecamatanValidation, kecamatanId);
  const kecamatan = await prismaClient.kecamatan.findFirst({
    where: {
      id_kecamatan: kecamatanId,
    },
    select: {
      kabupaten: {
        select: {
          id_kabupaten: true,
          nama_kabupaten: true,
        },
      },
      id_kecamatan: true,
      nama_kecamatan: true,
    },
  });

  if (!kecamatan) {
    throw new ResponseError(404, 'Kecamatan Tidak Ditemukan');
  }

  return kecamatan;
};

// UPDATE
const UpdateKecamatanService = async (request) => {
  const kecamatan = await Validation(UpdateKecamatanValidation, request);
  const kecamatanExist = await prismaClient.kecamatan.count({
    where: {
      id_kecamatan: kecamatan.id_kecamatan,
    },
  });

  if (!kecamatanExist) {
    throw new ResponseError(404, 'Kecamatan Tidak Ditemukan!');
  }

  return prismaClient.kecamatan.update({
    where: {
      id_kecamatan: kecamatan.id_kecamatan,
    },
    data: kecamatan,
    select: {
      kabupaten: {
        select: {
          id_kabupaten: true,
          nama_kabupaten: true,
        },
      },
      id_kecamatan: true,
      nama_kecamatan: true,
    },
  });
};

// DELETE
const DeleteKecamatanService = async (kecamatanId) => {
  kecamatanId = await Validation(DeleteKecamatanValidation, kecamatanId);
  const kecamatanExist = await prismaClient.kecamatan.count({
    where: {
      id_kecamatan: kecamatanId,
    },
  });

  if (!kecamatanExist) {
    throw new ResponseError(404, 'Kecamatan Tidak Ditemukan!');
  }

  return prismaClient.kecamatan.delete({
    where: {
      id_kecamatan: kecamatanId,
    },
  });
};

export default {
  GetKecamatanService,
  CreateKecamatanService,
  GetKecamatanByIdService,
  UpdateKecamatanService,
  DeleteKecamatanService,
};
