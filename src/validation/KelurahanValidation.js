import Joi from 'joi';

const GetKelurahanValidation = Joi.string().max(100).required();

const CreateKelurahanValidation = Joi.object({
  kecamatan_ID: Joi.string().max(100).required(),
  nama_kelurahan: Joi.string().max(50).required(),
});

const UpdateKelurahanValidation = Joi.object({
  id_kelurahan: Joi.string().max(100).required(),
  nama_kelurahan: Joi.string().max(50).required(),
  kecamatan_ID: Joi.string().max(100).required(),
});

const DeleteKelurahanValidation = Joi.string().max(100).required();

export {
  GetKelurahanValidation,
  CreateKelurahanValidation,
  UpdateKelurahanValidation,
  DeleteKelurahanValidation,
};
