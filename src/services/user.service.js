import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { checkEmail, checkInfo, checkPhone, createSession, deleteSession, getInfoUser, getUserByEmail, registerUser, setUser } from "../repository/user.repository.js"

export async function registerService({name, cpf, telephone, email, password, confirmPassword}) {
    
    const hash = bcrypt.hashSync(password, 10)
    if (confirmPassword !== password) return 422
    const existingEmail = await checkInfo(email, cpf, telephone)
    if (existingEmail.rowCount > 0) return 409

    return await registerUser(name, cpf, telephone, email, hash)
}

export async function loginService(email, password) {
    
    const user = await getUserByEmail(email)

    if (user.rows[0] && bcrypt.compareSync(password, user.rows[0].password)) {
        const token = uuid()

        await deleteSession(user)
        await createSession(user, token)

        return {token}
    } 
    
    else if (!user.rows[0]) return 401 
    else return 402
}

export async function infoUserService(user) {
    const info = await getInfoUser(user)
    return(info.rows[0])
}

export async function updateUserService(user, {name, email, telephone, picture, description}) {
    const existingEmail = await checkEmail(email)
    const existingPhone = await checkPhone(telephone)

    if (existingEmail.rows[0] && (user.email !== existingEmail.rows[0].email)) return "Email já cadastrado!";
    if (existingPhone.rows[0] && (user.telephone !== existingPhone.rows[0].telephone)) return "Telefone já cadastrado!";

    const update = await setUser(user, name, email, telephone, picture, description)
    return update
}