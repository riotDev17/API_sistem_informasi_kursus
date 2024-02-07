import Joi from 'joi';

const GetAgamaValidation = Joi.string().max(100).required();

const CreateAgamaValidation = Joi.object({
  nama_agama: Joi.string().max(50).required(),
});

const UpdateAgamaValidation = Joi.object({
  id_agama: Joi.string().max(100).required(),
  nama_agama: Joi.string().max(50).required(),
});

const DeleteAgamaValidation = Joi.string().max(100).required();

export {
  GetAgamaValidation,
  CreateAgamaValidation,
  UpdateAgamaValidation,
  DeleteAgamaValidation,
};
