import { infoUserService, loginService, registerService, updateUserService } from "../services/user.service.js"

export async function register(req, res) {
    try {
        const response = await registerService(req.body)

        if(response === 422) res.status(422).send("As senhas não coincidem")

        else if (response === 409) res.status(409).send("Email, CPF ou Telefone já cadastrado")

        else res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function login(req, res) {
    const { email, password } = req.body
    try {
        const response = await loginService(email, password)

        if(response === 401) res.status(401).send("usuário não encontrado (email incorreto)");
        else if (response === 402) res.status(401).send("usuário não encontrado (senha incorreta)");

        else res.send(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function infoUser(req, res) {
    const { user } = res.locals
    try {
        const response = await infoUserService(user)
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function updateUser(req, res) {
    const { user } = res.locals
    try {
        const response = await updateUserService(user, req.body)

        if (response === "Email já cadastrado!" || response === "Telefone já cadastrado!") 
        res.status(409).send(response)

        else res.send("Atualizado")
    } catch (err) {
        res.status(500).send(err.message);
    }
}