import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreatePenghasilanValidation,
  DeletePenghasilanValidation,
  GetPenghasilanValidation,
  UpdatePenghasilanValidation,
} from '../validation/PenghasilanValidation.js';

// GET
const GetPenghasilanService = async () => {
  return prismaClient.penghasilan.findMany({
    select: {
      id_penghasilan: true,
      jumlah_penghasilan: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreatePenghasilanService = async (request) => {
  const penghasilan = await Validation(CreatePenghasilanValidation, request);
  const penghasilanExist = await prismaClient.penghasilan.count({
    where: {
      jumlah_penghasilan: penghasilan.jumlah_penghasilan,
    },
  });

  if (penghasilanExist === 1) {
    throw new ResponseError(409, 'Penghasilan sudah ada!');
  }

  return prismaClient.penghasilan.create({
    data: penghasilan,
    select: {
      id_penghasilan: true,
      jumlah_penghasilan: true,
    },
  });
};

// GET BY ID
const GetPenghasilanByIdService = async (penghasilanId) => {
  penghasilanId = await Validation(GetPenghasilanValidation, penghasilanId);
  const penghasilan = await prismaClient.penghasilan.findFirst({
    where: {
      id_penghasilan: penghasilanId,
    },
    select: {
      id_penghasilan: true,
      jumlah_penghasilan: true,
    },
  });

  if (!penghasilan) {
    throw new ResponseError(404, 'Penghasilan tidak ditemukan!');
  }

  return penghasilan;
};

// UPDATE
const UpdatePenghasilanService = async (request) => {
  const penghasilan = await Validation(UpdatePenghasilanValidation, request);
  const penghasilanExist = await prismaClient.penghasilan.count({
    where: {
      id_penghasilan: penghasilan.id_penghasilan,
    },
  });

  if (!penghasilanExist) {
    throw new ResponseError(404, 'Penghasilan tidak ditemukan!');
  }

  return prismaClient.penghasilan.update({
    where: {
      id_penghasilan: penghasilan.id_penghasilan,
    },
    data: penghasilan,
    select: {
      id_penghasilan: true,
      jumlah_penghasilan: true,
    },
  });
};

// DELETE
const DeletePenghasilanService = async (penghasilanId) => {
  penghasilanId = await Validation(DeletePenghasilanValidation, penghasilanId);
  const penghasilanExist = await prismaClient.penghasilan.count({
    where: {
      id_penghasilan: penghasilanId,
    },
  });

  if (!penghasilanExist) {
    throw new ResponseError(404, 'Penghasilan tidak ditemukan!');
  }

  return prismaClient.penghasilan.delete({
    where: {
      id_penghasilan: penghasilanId,
    },
  });
};

export default {
  GetPenghasilanService,
  CreatePenghasilanService,
  GetPenghasilanByIdService,
  UpdatePenghasilanService,
  DeletePenghasilanService,
};
