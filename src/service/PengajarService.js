import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreatePengajarValidation,
  DeletePengajarValidation,
  GetPengajarValidation,
  UpdatePengajarValidation,
} from '../validation/PengajarValidation.js';

// GET
const GetPengajarService = async () => {
  return prismaClient.pengajar.findMany({
    select: {
      id_pengajar: true,
      nama_pengajar: true,
      no_telepon_pengajar: true,
      gelar_pengajar: true,
      keahlian_pengajar: true,
      pengalaman_pengajar: true,
      foto_pengajar: true,
      sertifikat_pengajar: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreatePengajarService = async (request) => {
  const pengajar = await Validation(CreatePengajarValidation, request);
  const pengajarExist = await prismaClient.pengajar.count({
    where: {
      nama_pengajar: pengajar.nama_pengajar,
    },
  });

  if (pengajarExist === 1) {
    throw new ResponseError(409, 'Pengajar sudah ada!');
  }

  return prismaClient.pengajar.create({
    data: pengajar,
    select: {
      id_pengajar: true,
      nama_pengajar: true,
      no_telepon_pengajar: true,
      gelar_pengajar: true,
      keahlian_pengajar: true,
      pengalaman_pengajar: true,
      foto_pengajar: true,
      sertifikat_pengajar: true,
    },
  });
};

// GET BY ID
const GetPengajarByIdService = async (pengajarId) => {
  pengajarId = await Validation(GetPengajarValidation, pengajarId);
  const pengajar = await prismaClient.pengajar.findFirst({
    where: {
      id_pengajar: pengajarId,
    },
    select: {
      id_pengajar: true,
      nama_pengajar: true,
      no_telepon_pengajar: true,
      gelar_pengajar: true,
      keahlian_pengajar: true,
      pengalaman_pengajar: true,
      foto_pengajar: true,
      sertifikat_pengajar: true,
    },
  });

  if (!pengajar) {
    throw new ResponseError(404, 'Pengajar Tidak Ditemukan');
  }

  return pengajar;
};

// UPDATE
const UpdatePengajarService = async (request) => {
  const pengajar = await Validation(UpdatePengajarValidation, request);
  const pengajarExist = await prismaClient.pengajar.count({
    where: {
      id_pengajar: pengajar.id_pengajar,
    },
  });

  if (!pengajarExist) {
    throw new ResponseError(404, 'Pengajar Tidak Ditemukan!');
  }

  return prismaClient.pengajar.update({
    where: {
      id_pengajar: pengajar.id_pengajar,
    },
    data: pengajar,
    select: {
      id_pengajar: true,
      nama_pengajar: true,
      no_telepon_pengajar: true,
      gelar_pengajar: true,
      keahlian_pengajar: true,
      pengalaman_pengajar: true,
      foto_pengajar: true,
      sertifikat_pengajar: true,
    },
  });
};

// DELETE
const DeletePengajarService = async (pengajarId) => {
  pengajarId = await Validation(DeletePengajarValidation, pengajarId);
  const pengajarExist = await prismaClient.pengajar.count({
    where: {
      id_pengajar: pengajarId,
    },
  });

  if (pengajarExist !== 1) {
    throw new ResponseError(404, 'Pengajar Tidak Ditemukan');
  }

  return prismaClient.pengajar.delete({
    where: {
      id_pengajar: pengajarId,
    },
  });
};

export default {
  GetPengajarService,
  CreatePengajarService,
  GetPengajarByIdService,
  UpdatePengajarService,
  DeletePengajarService,
};
