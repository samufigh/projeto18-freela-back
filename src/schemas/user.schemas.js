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