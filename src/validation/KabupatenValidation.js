import Joi from 'joi';

const GetKabupatenValidation = Joi.string().max(100).required();

const CreateKabupatenValidation = Joi.object({
  provinsi_ID: Joi.string().max(100).required(),
  nama_kabupaten: Joi.string().max(50).required(),
});

const UpdateKabupatenValidation = Joi.object({
  id_kabupaten: Joi.string().max(100).required(),
  provinsi_ID: Joi.string().max(100).required(),
  nama_kabupaten: Joi.string().max(50).required(),
});

const DeleteKabupatenValidation = Joi.string().max(100).required();

export {
  GetKabupatenValidation,
  CreateKabupatenValidation,
  UpdateKabupatenValidation,
  DeleteKabupatenValidation,
};
