import joi from "joi"

export const schemaModel = joi.object({
    name: joi.string().required(),
    picture: joi.string().regex(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/).required(),
    description: joi.string().required()
})