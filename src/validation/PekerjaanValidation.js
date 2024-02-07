import Joi from 'joi';

const GetPekerjaanValidation = Joi.string().max(100).required();

const CreatePekerjaanValidation = Joi.object({
  nama_pekerjaan: Joi.string().max(50).required(),
});

const UpdatePekerjaanValidation = Joi.object({
  id_pekerjaan: Joi.string().max(100).required(),
  nama_pekerjaan: Joi.string().max(50).required(),
});

const DeletePekerjaanValidation = Joi.string().max(100).required();

export {
  GetPekerjaanValidation,
  CreatePekerjaanValidation,
  UpdatePekerjaanValidation,
  DeletePekerjaanValidation,
};
