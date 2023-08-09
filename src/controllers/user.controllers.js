import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { checkEmail, createSession, deleteSession, getInfoUser, getUserByEmail, registerUser } from "../repository/user.repository.js"

export async function register(req, res) {
    const { name, cpf, telephone, email, password, confirmPassword } = req.body
    const hash = bcrypt.hashSync(password, 10)
    try {
        if (confirmPassword !== password) return res.status(422).send("As senhas não coincidem")
        const existingEmail = await checkEmail(email, cpf, telephone)
        if (existingEmail.rowCount > 0) return res.status(409).send("Email, CPF ou Telefone já cadastrado")

        await registerUser(name, cpf, telephone, email, hash)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await getUserByEmail(email)

        if (user.rows[0] && bcrypt.compareSync(password, user.rows[0].password)) {
            const token = uuid()

            await deleteSession(user)
            await createSession(user, token)

            res.send({ token })

        } else if (!user.rows[0]) {
            return res.status(401).send("usuário não encontrado (email incorreto)");
        } else {
            return res.status(401).send("usuário não encontrado (senha incorreta)");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function infoUser(req, res){
    const {user} = res.locals
    try{
        const info = await getInfoUser(user)
        res.send(info.rows[0])
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function updateUser(req, res){
    try{
        res.send("updateUser")
    } catch (err) {
        res.status(500).send(err.message);
    }
}