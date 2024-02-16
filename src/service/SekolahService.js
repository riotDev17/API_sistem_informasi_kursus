import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreateSekolahValidation,
  DeleteSekolahValidation,
  GetSekolahValidation,
  UpdateSekolahValidation,
} from '../validation/SekolahValidation.js';

// GET
const GetSekolahService = async () => {
  return prismaClient.sekolah.findMany({
    select: {
      id_sekolah: true,
      npsn: true,
      nama_sekolah: true,
      alamat: true,
      kode_pos: true,
      provinsi: true,
      kabupaten: true,
      kecamatan: true,
      kelurahan: true,
      status_sekolah: true,
      jenjang_pendidikan: true,
      akreditasi: true,
      email_sekolah: true,
      no_telepon_sekolah: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreateSekolahService = async (request) => {
  const sekolah = await Validation(CreateSekolahValidation, request);
  const sekolahExist = await prismaClient.sekolah.count({
    where: {
      nama_sekolah: sekolah.nama_sekolah,
    },
  });

  if (sekolahExist === 1) {
    throw new ResponseError(409, 'Nama Sekolah sudah ada!');
  }

  return prismaClient.sekolah.create({
    data: sekolah,
    select: {
      id_sekolah: true,
      npsn: true,
      nama_sekolah: true,
      alamat: true,
      kode_pos: true,
      provinsi: true,
      kabupaten: true,
      kecamatan: true,
      kelurahan: true,
      status_sekolah: true,
      jenjang_pendidikan: true,
      akreditasi: true,
      email_sekolah: true,
      no_telepon_sekolah: true,
    },
  });
};

// GET BY ID
const GetSekolahByIdService = async (sekolahId) => {
  sekolahId = await Validation(GetSekolahValidation, sekolahId);
  const sekolah = await prismaClient.sekolah.findUnique({
    where: {
      id_sekolah: sekolahId,
    },
    select: {
      id_sekolah: true,
      npsn: true,
      nama_sekolah: true,
      alamat: true,
      kode_pos: true,
      provinsi: true,
      kabupaten: true,
      kecamatan: true,
      kelurahan: true,
      status_sekolah: true,
      jenjang_pendidikan: true,
      akreditasi: true,
      email_sekolah: true,
      no_telepon_sekolah: true,
    },
  });

  if (!sekolah) {
    throw new ResponseError(404, 'Sekolah tidak ditemukan!');
  }

  return sekolah;
};

// UPDATE
const UpdateSekolahService = async (request) => {
  const sekolah = await Validation(UpdateSekolahValidation, request);
  const sekolahExist = await prismaClient.sekolah.count({
    where: {
      id_sekolah: sekolah.id_sekolah,
    },
  });

  if (sekolahExist !== 1) {
    throw new ResponseError(404, 'Sekolah tidak ditemukan!');
  }

  return prismaClient.sekolah.update({
    where: {
      id_sekolah: sekolah.id_sekolah,
    },
    data: sekolah,
    select: {
      id_sekolah: true,
      npsn: true,
      nama_sekolah: true,
      alamat: true,
      kode_pos: true,
      provinsi: true,
      kabupaten: true,
      kecamatan: true,
      kelurahan: true,
      status_sekolah: true,
      jenjang_pendidikan: true,
      akreditasi: true,
      email_sekolah: true,
      no_telepon_sekolah: true,
    },
  });
};

// DELETE
const DeleteSekolahService = async (sekolahId) => {
  sekolahId = await Validation(DeleteSekolahValidation, sekolahId);
  const sekolahExist = await prismaClient.sekolah.count({
    where: {
      id_sekolah: sekolahId,
    },
  });

  if (sekolahExist !== 1) {
    throw new ResponseError(404, 'Sekolah tidak ditemukan!');
  }

  return prismaClient.sekolah.delete({
    where: {
      id_sekolah: sekolahId,
    },
  });
};

export default {
  GetSekolahService,
  CreateSekolahService,
  GetSekolahByIdService,
  UpdateSekolahService,
  DeleteSekolahService,
};
