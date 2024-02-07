import Joi from 'joi';

const GetPenghasilanValidation = Joi.string().max(100).required();

const CreatePenghasilanValidation = Joi.object({
  jumlah_penghasilan: Joi.string().max(50).required(),
});

const UpdatePenghasilanValidation = Joi.object({
  id_penghasilan: Joi.string().max(100).required(),
  jumlah_penghasilan: Joi.string().max(50).required(),
});

const DeletePenghasilanValidation = Joi.string().max(100).required();

export {
  GetPenghasilanValidation,
  CreatePenghasilanValidation,
  UpdatePenghasilanValidation,
  DeletePenghasilanValidation,
};
