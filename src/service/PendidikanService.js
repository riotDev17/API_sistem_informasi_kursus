import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreatePendidikanValidation,
  GetPendidikanValidation,
  UpdatePendidikanValidation,
} from '../validation/PendidikanValidation.js';

// GET
const GetPendidikanService = async () => {
  return prismaClient.pendidikan.findMany({
    select: {
      id_pendidikan: true,
      nama_pendidikan: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreatePendidikanService = async (request) => {
  const pendidikan = await Validation(CreatePendidikanValidation, request);
  const pendidikanExist = await prismaClient.pendidikan.count({
    where: {
      nama_pendidikan: pendidikan.nama_pendidikan,
    },
  });

  if (pendidikanExist === 1) {
    throw new ResponseError(409, 'Pendidikan sudah ada!');
  }

  return prismaClient.pendidikan.create({
    data: pendidikan,
    select: {
      id_pendidikan: true,
      nama_pendidikan: true,
    },
  });
};

// GET BY ID
const GetPendidikanByIdService = async (pendidikanId) => {
  pendidikanId = await Validation(GetPendidikanValidation, pendidikanId);
  const pendidikan = await prismaClient.pendidikan.findUnique({
    where: {
      id_pendidikan: pendidikanId,
    },
    select: {
      id_pendidikan: true,
      nama_pendidikan: true,
    },
  });

  if (!pendidikan) {
    throw new ResponseError(404, 'Pendidikan tidak ditemukan!');
  }

  return pendidikan;
};

// UPDATE
const UpdatePendidikanService = async (request) => {
  const pendidikan = await Validation(UpdatePendidikanValidation, request);
  const pendidikanExist = await prismaClient.pendidikan.count({
    where: {
      id_pendidikan: pendidikan.id_pendidikan,
    },
  });

  if (pendidikanExist !== 1) {
    throw new ResponseError(404, 'Pendidikan tidak ditemukan!');
  }

  return prismaClient.pendidikan.update({
    where: {
      id_pendidikan: pendidikan.id_pendidikan,
    },
    data: pendidikan,
    select: {
      id_pendidikan: true,
      nama_pendidikan: true,
    },
  });
};

// DELETE
const DeletePendidikanService = async (pendidikanId) => {
  pendidikanId = await Validation(GetPendidikanValidation, pendidikanId);
  const pendidikanExist = await prismaClient.pendidikan.count({
    where: {
      id_pendidikan: pendidikanId,
    },
  });

  if (pendidikanExist !== 1) {
    throw new ResponseError(404, 'Pendidikan tidak ditemukan!');
  }

  return prismaClient.pendidikan.delete({
    where: {
      id_pendidikan: pendidikanId,
    },
  });
};

export default {
  GetPendidikanByIdService,
  GetPendidikanService,
  CreatePendidikanService,
  UpdatePendidikanService,
  DeletePendidikanService,
};
