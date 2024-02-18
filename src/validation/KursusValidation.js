import Joi from 'joi';

const GetKursusValidation = Joi.string().max(100).required();

const CreateKursusValidation = Joi.object({
  nama_kursus: Joi.string().max(50).required(),
  topik_kursus: Joi.string().max(50).required(),
  jenjang_kursus: Joi.string().max(50).required(),
  pengajar_ID: Joi.string().required(),
  jam_mulai: Joi.string().max(50).required(),
  jam_selesai: Joi.string().max(50).required(),
  tanggal_mulai: Joi.string().max(50).required(),
  tanggal_selesai: Joi.string().max(50).required(),
  hari_kursus: Joi.array().required(),
  harga_kursus: Joi.number().required(),
  foto_kursus: Joi.string().required(),
  syarat_kursus: Joi.string().required(),
  deskripsi_kursus: Joi.string().required(),
  modul_kursus: Joi.string().required(),
});

const UpdateKursusValidation = Joi.object({
  id_kursus: Joi.string().max(100).optional(),
  nama_kursus: Joi.string().max(50).optional(),
  topik_kursus: Joi.string().max(50).optional(),
  jenjang_kursus: Joi.string().max(50).optional(),
  pengajar_ID: Joi.string().optional(),
  jam_mulai: Joi.string().max(50).optional(),
  jam_selesai: Joi.string().max(50).optional(),
  tanggal_mulai: Joi.string().max(50).optional(),
  tanggal_selesai: Joi.string().max(50).optional(),
  hari_kursus: Joi.array().max(50).optional(),
  harga_kursus: Joi.number().optional(),
  foto_kursus: Joi.string().optional(),
  syarat_kursus: Joi.string().optional(),
  deskripsi_kursus: Joi.string().optional(),
  modul_kursus: Joi.string().optional(),
});

const DeleteKursusValidation = Joi.string().max(100).required();

export {
  GetKursusValidation,
  CreateKursusValidation,
  UpdateKursusValidation,
  DeleteKursusValidation,
};
