import Joi from 'joi';

const GetPengumumanValidation = Joi.string().required();

const CreatePengumumanValidation = Joi.object({
  pendaftaran_ID: Joi.string().required(),
  nilai_test: Joi.number().required(),
  nilai_interview: Joi.number().required(),
  nilai_rata_rata: Joi.number().required(),
  hasil_pengumuman: Joi.string().max(50).required(),
});

export { GetPengumumanValidation, CreatePengumumanValidation };
