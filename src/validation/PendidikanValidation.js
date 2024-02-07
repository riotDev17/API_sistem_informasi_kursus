import Joi from 'joi';

const GetPendidikanValidation = Joi.string().max(100).required();

const CreatePendidikanValidation = Joi.object({
  nama_pendidikan: Joi.string().max(50).required(),
});

const UpdatePendidikanValidation = Joi.object({
  id_pendidikan: Joi.string().max(100).required(),
  nama_pendidikan: Joi.string().max(50).required(),
});

const DeletePendidikanValidation = Joi.string().max(100).required();

export {
  GetPendidikanValidation,
  CreatePendidikanValidation,
  UpdatePendidikanValidation,
  DeletePendidikanValidation,
};
