import Joi from 'joi';

const GetPengajarValidation = Joi.string().max(100).required();

const CreatePengajarValidation = Joi.object({
  nama_pengajar: Joi.string().max(50).required(),
  no_telepon_pengajar: Joi.string().max(25).required(),
  gelar_pengajar: Joi.string().max(50).required(),
  keahlian_pengajar: Joi.string().required(),
  pengalaman_pengajar: Joi.string().required(),
  biodata_pengajar: Joi.string().required(),
  foto_pengajar: Joi.string().required(),
  sertifikat_pengajar: Joi.string().required(),
});

const UpdatePengajarValidation = Joi.object({
  id_pengajar: Joi.string().max(100).required(),
  nama_pengajar: Joi.string().max(50).required(),
  no_telepon_pengajar: Joi.string().max(25).required(),
  gelar_pengajar: Joi.string().max(50).required(),
  keahlian_pengajar: Joi.string().required(),
  pengalaman_pengajar: Joi.string().required(),
  biodata_pengajar: Joi.string().required(),
  foto_pengajar: Joi.string().required(),
  sertifikat_pengajar: Joi.string().required(),
});

const DeletePengajarValidation = Joi.string().max(100).required();

export {
  GetPengajarValidation,
  CreatePengajarValidation,
  UpdatePengajarValidation,
  DeletePengajarValidation,
};
