import joi from "joi"

export const schemaSignup = joi.object({
    name: joi.string().required(),
    cpf: joi.string().required().min(11).max(11),
    telephone: joi.string().required().min(10).max(11),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required(),
})

export const schemaSignin = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})

export const schemaUpdate = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    telephone: joi.string().required().min(10).max(11),
    picture: joi.string().allow("").regex(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|^$/),
    description: joi.string().min(0),
})