import Joi from 'joi';

const GetSekolahValidation = Joi.string().max(100).required();

const CreateSekolahValidation = Joi.object({
  npsn: Joi.number().required(),
  nama_sekolah: Joi.string().max(50).required(),
  alamat: Joi.string().required(),
  kode_pos: Joi.number().required(),
  provinsi: Joi.string().max(50).required(),
  kabupaten: Joi.string().max(50).required(),
  kecamatan: Joi.string().max(50).required(),
  kelurahan: Joi.string().max(50).required(),
  status_sekolah: Joi.string().max(25).required(),
  jenjang_pendidikan: Joi.string().max(25).required(),
  akreditasi: Joi.string().required(),
  email_sekolah: Joi.string().max(50).required(),
  no_telepon_sekolah: Joi.string().max(25).required(),
});

const UpdateSekolahValidation = Joi.object({
  id_sekolah: Joi.string().max(100).required(),
  npsn: Joi.number().required(),
  nama_sekolah: Joi.string().max(50).required(),
  alamat: Joi.string().required(),
  kode_pos: Joi.number().required(),
  provinsi: Joi.string().max(50).required(),
  kabupaten: Joi.string().max(50).required(),
  kecamatan: Joi.string().max(50).required(),
  kelurahan: Joi.string().max(50).required(),
  status_sekolah: Joi.string().max(25).required(),
  jenjang_pendidikan: Joi.string().required(),
  akreditasi: Joi.string().required(),
  email_sekolah: Joi.string().max(50).required(),
  no_telepon_sekolah: Joi.string().max(25).required(),
});

const DeleteSekolahValidation = Joi.string().max(100).required();

export {
  GetSekolahValidation,
  CreateSekolahValidation,
  UpdateSekolahValidation,
  DeleteSekolahValidation,
};
