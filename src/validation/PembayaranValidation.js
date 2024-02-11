import Joi from 'joi';

const CreatePembayaranValidation = Joi.object({
  pendaftaran_ID: Joi.string().required(),
  bukti_pembayaran: Joi.string().required(),
});

export { CreatePembayaranValidation };
