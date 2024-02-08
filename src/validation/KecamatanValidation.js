import Joi from 'joi';

const GetKecamatanValidation = Joi.string().max(100).required();

const CreateKecamatanValidation = Joi.object({
  kabupaten_ID: Joi.string().max(100).required(),
  nama_kecamatan: Joi.string().max(50).required(),
});

const UpdateKecamatanValidation = Joi.object({
  id_kecamatan: Joi.string().max(100).required(),
  nama_kecamatan: Joi.string().max(50).required(),
  kabupaten_ID: Joi.string().max(100).required(),
});

const DeleteKecamatanValidation = Joi.string().max(100).required();

export {
  GetKecamatanValidation,
  CreateKecamatanValidation,
  UpdateKecamatanValidation,
  DeleteKecamatanValidation,
};
