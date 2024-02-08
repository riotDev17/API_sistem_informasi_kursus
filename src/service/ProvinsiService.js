import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreateProvinsiValidation,
  DeleteProvinsiValidation,
  GetProvinsiValidation,
  UpdateProvinsiValidation,
} from '../validation/ProvinsiValidation.js';

// GET
const GetProvinsiService = async () => {
  return prismaClient.provinsi.findMany({
    select: {
      id_provinsi: true,
      nama_provinsi: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreateProvinsiService = async (request) => {
  const provinsi = await Validation(CreateProvinsiValidation, request);
  const provinsiExist = await prismaClient.provinsi.count({
    where: {
      nama_provinsi: provinsi.nama_provinsi,
    },
  });

  if (provinsiExist === 1) {
    throw new ResponseError(409, 'Provinsi sudah ada!');
  }

  return prismaClient.provinsi.create({
    data: provinsi,
    select: {
      id_provinsi: true,
      nama_provinsi: true,
    },
  });
};

// GET BY ID
const GetProvinsiByIdService = async (provinsiId) => {
  provinsiId = await Validation(GetProvinsiValidation, provinsiId);
  const provinsi = await prismaClient.provinsi.findUnique({
    where: {
      id_provinsi: provinsiId,
    },
    select: {
      id_provinsi: true,
      nama_provinsi: true,
    },
  });

  if (!provinsi) {
    throw new ResponseError(404, 'Provinsi tidak ditemukan!');
  }

  return provinsi;
};

// UPDATE
const UpdateProvinsiService = async (request) => {
  const provinsi = await Validation(UpdateProvinsiValidation, request);
  const provinsiExist = await prismaClient.provinsi.count({
    where: {
      id_provinsi: provinsi.id_provinsi,
    },
  });

  if (provinsiExist === 0) {
    throw new ResponseError(404, 'Provinsi tidak ditemukan!');
  }

  return prismaClient.provinsi.update({
    where: {
      id_provinsi: provinsi.id_provinsi,
    },
    data: provinsi,
    select: {
      id_provinsi: true,
      nama_provinsi: true,
    },
  });
};

// DELETE
const DeleteProvinsiService = async (provinsiId) => {
  provinsiId = await Validation(DeleteProvinsiValidation, provinsiId);
  const provinsiExist = await prismaClient.provinsi.count({
    where: {
      id_provinsi: provinsiId,
    },
  });

  if (provinsiExist === 0) {
    throw new ResponseError(404, 'Provinsi tidak ditemukan!');
  }

  return prismaClient.provinsi.delete({
    where: {
      id_provinsi: provinsiId,
    },
  });
};

export default {
  GetProvinsiService,
  CreateProvinsiService,
  GetProvinsiByIdService,
  UpdateProvinsiService,
  DeleteProvinsiService,
};
