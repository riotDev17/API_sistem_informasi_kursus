import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreateAgamaValidation,
  DeleteAgamaValidation,
  GetAgamaValidation,
  UpdateAgamaValidation,
} from '../validation/AgamaValidation.js';

// GET
const GetAgamaService = async () => {
  return prismaClient.agama.findMany({
    select: {
      id_agama: true,
      nama_agama: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreateAgamaService = async (request) => {
  const agama = await Validation(CreateAgamaValidation, request);
  const agamaExist = await prismaClient.agama.count({
    where: {
      nama_agama: agama.nama_agama,
    },
  });

  if (agamaExist === 1) {
    throw new ResponseError(409, 'Agama sudah ada!');
  }

  return prismaClient.agama.create({
    data: agama,
    select: {
      id_agama: true,
      nama_agama: true,
    },
  });
};

// GET BY ID
const GetAgamaByIdService = async (agamaId) => {
  agamaId = await Validation(GetAgamaValidation, agamaId);
  const agama = await prismaClient.agama.findFirst({
    where: {
      id_agama: agamaId,
    },
    select: {
      id_agama: true,
      nama_agama: true,
    },
  });

  if (!agama) {
    throw new ResponseError(404, 'Agama Tidak Ditemukan');
  }

  return agama;
};

// UPDATE
const UpdateAgamaService = async (request) => {
  const agama = await Validation(UpdateAgamaValidation, request);
  const agamaExist = await prismaClient.agama.count({
    where: {
      id_agama: agama.id_agama,
    },
  });

  if (!agamaExist) {
    throw new ResponseError(404, 'Agama Tidak Ditemukan!');
  }

  return prismaClient.agama.update({
    where: {
      id_agama: agama.id_agama,
    },
    data: agama,
    select: {
      id_agama: true,
      nama_agama: true,
    },
  });
};

// DELETE
const DeleteAgamaService = async (agamaId) => {
  agamaId = await Validation(DeleteAgamaValidation, agamaId);
  const agamaExist = await prismaClient.agama.count({
    where: {
      id_agama: agamaId,
    },
  });

  if (agamaExist !== 1) {
    throw new ResponseError(404, 'Agama Tidak Ditemukan');
  }

  return prismaClient.agama.delete({
    where: {
      id_agama: agamaId,
    },
  });
};

export default {
  GetAgamaService,
  CreateAgamaService,
  GetAgamaByIdService,
  UpdateAgamaService,
  DeleteAgamaService,
};
