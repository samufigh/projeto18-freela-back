import joi from 'joi';

export const schemaModel = joi.object({
  name: joi.string().max(10).required(),
  picture: joi
    .string()
    .regex(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)
    .required(),
  pictureUserPet: joi
    .string()
    .regex(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)
    .required(),
  description: joi.string().required(),
});
