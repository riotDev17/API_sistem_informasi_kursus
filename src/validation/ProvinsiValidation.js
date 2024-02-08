import Joi from 'joi';

const GetProvinsiValidation = Joi.string().max(100).required();

const CreateProvinsiValidation = Joi.object({
  nama_provinsi: Joi.string().max(50).required(),
});

const UpdateProvinsiValidation = Joi.object({
  id_provinsi: Joi.string().max(100).required(),
  nama_provinsi: Joi.string().max(50).required(),
});

const DeleteProvinsiValidation = Joi.string().max(100).required();

export {
  GetProvinsiValidation,
  CreateProvinsiValidation,
  UpdateProvinsiValidation,
  DeleteProvinsiValidation,
};
