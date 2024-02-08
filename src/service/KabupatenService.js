import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreateKabupatenValidation,
  DeleteKabupatenValidation,
  GetKabupatenValidation,
  UpdateKabupatenValidation,
} from '../validation/KabupatenValidation.js';

// GET
const GetKabupatenService = async () => {
  return prismaClient.kabupaten.findMany({
    select: {
      provinsi: {
        select: {
          id_provinsi: true,
          nama_provinsi: true,
        },
      },
      id_kabupaten: true,
      nama_kabupaten: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreateKabupatenService = async (request) => {
  const kabupaten = await Validation(CreateKabupatenValidation, request);
  const kabupatenExist = await prismaClient.kabupaten.count({
    where: {
      nama_kabupaten: kabupaten.nama_kabupaten,
    },
  });

  if (kabupatenExist === 1) {
    throw new ResponseError(409, 'Kabupaten sudah ada!');
  }

  return prismaClient.kabupaten.create({
    data: kabupaten,
    select: {
      provinsi: {
        select: {
          id_provinsi: true,
          nama_provinsi: true,
        },
      },
      id_kabupaten: true,
      nama_kabupaten: true,
    },
  });
};

// GET BY ID
const GetKabupatenByIdService = async (kabupatenId) => {
  kabupatenId = await Validation(GetKabupatenValidation, kabupatenId);
  const kabupaten = await prismaClient.kabupaten.findFirst({
    where: {
      id_kabupaten: kabupatenId,
    },
    select: {
      provinsi: {
        select: {
          id_provinsi: true,
          nama_provinsi: true,
        },
      },
      id_kabupaten: true,
      nama_kabupaten: true,
    },
  });

  if (!kabupaten) {
    throw new ResponseError(404, 'Kabupaten Tidak Ditemukan');
  }

  return kabupaten;
};

// UPDATE
const UpdateKabupatenService = async (request) => {
  const kabupaten = await Validation(UpdateKabupatenValidation, request);
  const kabupatenExist = await prismaClient.kabupaten.count({
    where: {
      id_kabupaten: kabupaten.id_kabupaten,
    },
  });

  if (!kabupatenExist) {
    throw new ResponseError(404, 'Kabupaten Tidak Ditemukan!');
  }

  return prismaClient.kabupaten.update({
    where: {
      id_kabupaten: kabupaten.id_kabupaten,
    },
    data: kabupaten,
    select: {
      provinsi: {
        select: {
          id_provinsi: true,
          nama_provinsi: true,
        },
      },
      id_kabupaten: true,
      nama_kabupaten: true,
    },
  });
};

// DELETE
const DeleteKabupatenService = async (kabupatenId) => {
  kabupatenId = await Validation(DeleteKabupatenValidation, kabupatenId);
  const kabupatenExist = await prismaClient.kabupaten.count({
    where: {
      id_kabupaten: kabupatenId,
    },
  });

  if (kabupatenExist === 0) {
    throw new ResponseError(404, 'Kabupaten Tidak Ditemukan!');
  }

  return prismaClient.kabupaten.delete({
    where: {
      id_kabupaten: kabupatenId,
    },
  });
};

export default {
  GetKabupatenService,
  CreateKabupatenService,
  GetKabupatenByIdService,
  UpdateKabupatenService,
  DeleteKabupatenService,
};
