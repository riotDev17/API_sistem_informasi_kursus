import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreateKelurahanValidation,
  DeleteKelurahanValidation,
  GetKelurahanValidation,
  UpdateKelurahanValidation,
} from '../validation/KelurahanValidation.js';

// GET
const GetKelurahanService = async () => {
  return prismaClient.kelurahan.findMany({
    select: {
      kecamatan: {
        select: {
          id_kecamatan: true,
          nama_kecamatan: true,
        },
      },
      id_kelurahan: true,
      nama_kelurahan: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreateKelurahanService = async (request) => {
  const kelurahan = await Validation(CreateKelurahanValidation, request);
  const kelurahanExist = await prismaClient.kelurahan.count({
    where: {
      nama_kelurahan: kelurahan.nama_kelurahan,
    },
  });

  if (kelurahanExist === 1) {
    throw new ResponseError(409, 'Kelurahan sudah ada!');
  }

  return prismaClient.kelurahan.create({
    data: kelurahan,
    select: {
      kecamatan: {
        select: {
          id_kecamatan: true,
          nama_kecamatan: true,
        },
      },
      id_kelurahan: true,
      nama_kelurahan: true,
    },
  });
};

// GET BY ID
const GetKelurahanByIdService = async (kelurahanId) => {
  kelurahanId = await Validation(GetKelurahanValidation, kelurahanId);
  const kelurahan = await prismaClient.kelurahan.findFirst({
    where: {
      id_kelurahan: kelurahanId,
    },
    select: {
      kecamatan: {
        select: {
          id_kecamatan: true,
          nama_kecamatan: true,
        },
      },
      id_kelurahan: true,
      nama_kelurahan: true,
    },
  });

  if (!kelurahan) {
    throw new ResponseError(404, 'Kelurahan tidak ditemukan!');
  }

  return kelurahan;
};

// UPDATE
const UpdateKelurahanService = async (request) => {
  const kelurahan = await Validation(UpdateKelurahanValidation, request);
  const kelurahanExist = await prismaClient.kelurahan.count({
    where: {
      id_kelurahan: kelurahan.id_kelurahan,
    },
  });

  if (!kelurahanExist) {
    throw new ResponseError(404, 'Kelurahan tidak ditemukan!');
  }

  return prismaClient.kelurahan.update({
    where: {
      id_kelurahan: kelurahan.id_kelurahan,
    },
    data: kelurahan,
    select: {
      kecamatan: {
        select: {
          id_kecamatan: true,
          nama_kecamatan: true,
        },
      },
      id_kelurahan: true,
      nama_kelurahan: true,
    },
  });
};

// DELETE
const DeleteKelurahanService = async (kelurahanId) => {
  kelurahanId = await Validation(DeleteKelurahanValidation, kelurahanId);
  const kelurahanExist = await prismaClient.kelurahan.count({
    where: {
      id_kelurahan: kelurahanId,
    },
  });

  if (!kelurahanExist) {
    throw new ResponseError(404, 'Kelurahan tidak ditemukan!');
  }

  return prismaClient.kelurahan.delete({
    where: {
      id_kelurahan: kelurahanId,
    },
  });
};

export default {
  GetKelurahanService,
  CreateKelurahanService,
  GetKelurahanByIdService,
  UpdateKelurahanService,
  DeleteKelurahanService,
};
