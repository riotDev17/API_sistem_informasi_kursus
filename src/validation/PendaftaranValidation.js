import Joi from 'joi';

const GetPendaftaranValidation = Joi.string().max(100).required();

const CreatePendaftaranValidation = Joi.object({
  kursus_ID: Joi.string().required(),
  nisn: Joi.number().required(),
  nis: Joi.number().required(),
  nik: Joi.number().required(),
  nama_lengkap: Joi.string().max(50).required(),
  jenis_kelamin: Joi.string().max(50).required(),
  pas_foto: Joi.string().required(), // image
  tempat_lahir: Joi.string().max(50).required(),
  tanggal_lahir: Joi.string().max(50).required(),
  agama_ID: Joi.string().required(),
  email: Joi.string().max(50).required(),
  no_telepon: Joi.string().max(25).required(),
  alamat: Joi.string().required(),
  provinsi_ID: Joi.string().required(),
  kabupaten_ID: Joi.string().required(),
  kecamatan_ID: Joi.string().required(),
  kelurahan_ID: Joi.string().required(),
  nama_ayah: Joi.string().max(50).required(),
  pekerjaan_ayah_ID: Joi.string().required(),
  no_telepon_ayah: Joi.string().max(25).required(),
  pendidikan_ayah_ID: Joi.string().required(),
  penghasilan_ayah_ID: Joi.string().required(),
  nama_ibu: Joi.string().max(50).required(),
  pekerjaan_ibu_ID: Joi.string().required(),
  no_telepon_ibu: Joi.string().max(25).required(),
  pendidikan_ibu_ID: Joi.string().required(),
  penghasilan_ibu_ID: Joi.string().required(),
  slip_gaji_ayah_ibu: Joi.string().required(), // pdf
  foto_kk: Joi.string().required(), // image
  sekolah_ID: Joi.string().required(),
  nilai_semester_1: Joi.number().required(),
  nilai_semester_2: Joi.number().required(),
  nilai_semester_3: Joi.number().required(),
  nilai_semester_4: Joi.number().required(),
  nilai_semester_5: Joi.number().optional(),
  nilai_semester_6: Joi.number().optional(),
  raport: Joi.string().required(), // pdf
  prestasi: Joi.string().optional(), // pdf
});

const UpdatePendaftaranValidation = Joi.object({
  id_pendaftaran: Joi.string().required(),
  kursus_ID: Joi.string().required(),
  nisn: Joi.number().required(),
  nis: Joi.number().required(),
  nik: Joi.number().required(),
  nama_lengkap: Joi.string().max(50).required(),
  jenis_kelamin: Joi.string().max(50).required(),
  pas_foto: Joi.string().required(), // image
  tempat_lahir: Joi.string().max(50).required(),
  tanggal_lahir: Joi.string().max(50).required(),
  agama_ID: Joi.string().required(),
  email: Joi.string().max(50).required(),
  no_telepon: Joi.string().max(25).required(),
  alamat: Joi.string().required(),
  provinsi_ID: Joi.string().required(),
  kabupaten_ID: Joi.string().required(),
  kecamatan_ID: Joi.string().required(),
  kelurahan_ID: Joi.string().required(),
  nama_ayah: Joi.string().max(50).required(),
  pekerjaan_ayah_ID: Joi.string().required(),
  no_telepon_ayah: Joi.string().max(25).required(),
  pendidikan_ayah_ID: Joi.string().required(),
  penghasilan_ayah_ID: Joi.string().required(),
  nama_ibu: Joi.string().max(50).required(),
  pekerjaan_ibu_ID: Joi.string().required(),
  no_telepon_ibu: Joi.string().max(25).required(),
  pendidikan_ibu_ID: Joi.string().required(),
  penghasilan_ibu_ID: Joi.string().required(),
  slip_gaji_ayah_ibu: Joi.string().required(), // pdf
  foto_kk: Joi.string().required(), // image
  sekolah_ID: Joi.string().required(),
  nilai_semester_1: Joi.number().required(),
  nilai_semester_2: Joi.number().required(),
  nilai_semester_3: Joi.number().required(),
  nilai_semester_4: Joi.number().required(),
  nilai_semester_5: Joi.number().optional(),
  nilai_semester_6: Joi.number().optional(),
  raport: Joi.string().required(), // pdf
  prestasi: Joi.string().optional(), // pdf
});

const DeletePendaftaranValidation = Joi.string().required();

export {
  GetPendaftaranValidation,
  CreatePendaftaranValidation,
  UpdatePendaftaranValidation,
  DeletePendaftaranValidation,
};
