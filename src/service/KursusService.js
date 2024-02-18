import { Validation } from '../validation/Validation.js';
import { prismaClient } from '../app/Database.js';
import { ResponseError } from '../error/ResponseError.js';
import {
  CreateKursusValidation,
  DeleteKursusValidation,
  GetKursusValidation,
  UpdateKursusValidation,
} from '../validation/KursusValidation.js';

// GET
const GetKursusService = async () => {
  return prismaClient.kursus.findMany({
    select: {
      id_kursus: true,
      nama_kursus: true,
      topik_kursus: true,
      jenjang_kursus: true,
      pengajar: {
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
      },
      jam_mulai: true,
      jam_selesai: true,
      tanggal_mulai: true,
      tanggal_selesai: true,
      hari_kursus: true,
      harga_kursus: true,
      foto_kursus: true,
      syarat_kursus: true,
      deskripsi_kursus: true,
      modul_kursus: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// CREATE
const CreateKursusService = async (request) => {
  const kursus = await Validation(CreateKursusValidation, request);
  const kursusExist = await prismaClient.kursus.count({
    where: {
      nama_kursus: kursus.nama_kursus,
    },
  });

  if (kursusExist === 1) {
    throw new ResponseError(409, 'Kursus sudah ada!');
  }

  return prismaClient.kursus.create({
    data: kursus,
    select: {
      id_kursus: true,
      nama_kursus: true,
      topik_kursus: true,
      jenjang_kursus: true,
      pengajar: {
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
      },
      jam_mulai: true,
      jam_selesai: true,
      tanggal_mulai: true,
      tanggal_selesai: true,
      hari_kursus: true,
      harga_kursus: true,
      foto_kursus: true,
      syarat_kursus: true,
      deskripsi_kursus: true,
      modul_kursus: true,
    },
  });
};

// GET BY ID
const GetKursusByIdService = async (kursusId) => {
  kursusId = await Validation(GetKursusValidation, kursusId);
  const kursus = await prismaClient.kursus.findFirst({
    where: {
      id_kursus: kursusId,
    },
    select: {
      id_kursus: true,
      nama_kursus: true,
      topik_kursus: true,
      jenjang_kursus: true,
      pengajar: {
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
      },
      jam_mulai: true,
      jam_selesai: true,
      tanggal_mulai: true,
      tanggal_selesai: true,
      hari_kursus: true,
      harga_kursus: true,
      foto_kursus: true,
      syarat_kursus: true,
      deskripsi_kursus: true,
      modul_kursus: true,
    },
  });

  if (!kursus) {
    throw new ResponseError(404, 'Kursus tidak ditemukan!');
  }

  return kursus;
};

// UPDATE
const UpdateKursusService = async (request) => {
  const kursus = await Validation(UpdateKursusValidation, request);
  const kursusExist = await prismaClient.kursus.findFirst({
    where: {
      id_kursus: kursus.id_kursus,
    },
  });

  if (!kursusExist) {
    throw new ResponseError(404, 'Kursus tidak ditemukan!');
  }

  return prismaClient.kursus.update({
    where: {
      id_kursus: kursus.id_kursus,
    },
    data: kursus,
    select: {
      id_kursus: true,
      nama_kursus: true,
      topik_kursus: true,
      jenjang_kursus: true,
      pengajar: {
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
      },
      jam_mulai: true,
      jam_selesai: true,
      tanggal_mulai: true,
      tanggal_selesai: true,
      hari_kursus: true,
      harga_kursus: true,
      foto_kursus: true,
      syarat_kursus: true,
      deskripsi_kursus: true,
      modul_kursus: true,
    },
  });
};

// DELETE
const DeleteKursusService = async (kursusId) => {
  kursusId = await Validation(DeleteKursusValidation, kursusId);
  const kursus = await prismaClient.kursus.findFirst({
    where: {
      id_kursus: kursusId,
    },
  });

  if (!kursus) {
    throw new ResponseError(404, 'Kursus tidak ditemukan!');
  }

  return prismaClient.kursus.delete({
    where: {
      id_kursus: kursusId,
    },
  });
};

export default {
  GetKursusService,
  CreateKursusService,
  GetKursusByIdService,
  UpdateKursusService,
  DeleteKursusService,
};
