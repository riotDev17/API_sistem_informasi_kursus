import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreatePekerjaanValidation,
  DeletePekerjaanValidation,
  GetPekerjaanValidation,
  UpdatePekerjaanValidation,
} from '../validation/PekerjaanValidation.js';

// GET
const GetPekerjaanService = async () => {
  return prismaClient.pekerjaan.findMany({
    select: {
      id_pekerjaan: true,
      nama_pekerjaan: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreatePekerjaanService = async (request) => {
  const pekerjaan = await Validation(CreatePekerjaanValidation, request);
  const pekerjaanExist = await prismaClient.pekerjaan.count({
    where: {
      nama_pekerjaan: pekerjaan.nama_pekerjaan,
    },
  });

  if (pekerjaanExist === 1) {
    throw new ResponseError(409, 'Pekerjaan Sudah Ada');
  }

  return prismaClient.pekerjaan.create({
    data: pekerjaan,
    select: {
      id_pekerjaan: true,
      nama_pekerjaan: true,
    },
  });
};

// GET BY ID
const GetPekerjaanByIdService = async (pekerjaanId) => {
  pekerjaanId = await Validation(GetPekerjaanValidation, pekerjaanId);
  const pekerjaan = await prismaClient.pekerjaan.findFirst({
    where: {
      id_pekerjaan: pekerjaanId,
    },
    select: {
      id_pekerjaan: true,
      nama_pekerjaan: true,
    },
  });

  if (!pekerjaan) {
    throw new ResponseError(404, 'Pekerjaan Tidak Ditemukan!');
  }

  return pekerjaan;
};

// UPDATE
const UpdatePekerjaanService = async (request) => {
  const pekerjaan = await Validation(UpdatePekerjaanValidation, request);
  const pekerjaanExist = await prismaClient.pekerjaan.count({
    where: {
      id_pekerjaan: pekerjaan.id_pekerjaan,
    },
  });

  if (!pekerjaanExist) {
    throw new ResponseError(404, 'Pekerjaan Tidak Ditemukan!');
  }

  return prismaClient.pekerjaan.update({
    where: {
      id_pekerjaan: pekerjaan.id_pekerjaan,
    },
    data: pekerjaan,
    select: {
      id_pekerjaan: true,
      nama_pekerjaan: true,
    },
  });
};

// DELETE
const DeletePekerjaanService = async (pekerjaanId) => {
  pekerjaanId = await Validation(DeletePekerjaanValidation, pekerjaanId);
  const pekerjaanExist = await prismaClient.pekerjaan.count({
    where: {
      id_pekerjaan: pekerjaanId,
    },
  });

  if (!pekerjaanExist) {
    throw new ResponseError(404, 'Pekerjaan Tidak Ditemukan!');
  }

  return prismaClient.pekerjaan.delete({
    where: {
      id_pekerjaan: pekerjaanId,
    },
  });
};

export default {
  GetPekerjaanService,
  CreatePekerjaanService,
  GetPekerjaanByIdService,
  UpdatePekerjaanService,
  DeletePekerjaanService,
};
