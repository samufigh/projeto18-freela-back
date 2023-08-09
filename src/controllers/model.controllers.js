import { checkModel, createModel, getModel, getModels, getMyModels, setModel } from "../repository/model.repository.js";

export async function postModel(req, res){
    const {name, picture, description} = req.body
    const {user} = res.locals
    try{
        const existingModel = await checkModel(name)
        if(existingModel.rowCount>0) return res.status(409).send({message: "Você já cadastrou um pet com esse nome!"})
        await createModel(name, picture, description, user)
        res.status(200).send("Seu pet foi adicionado!")
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function showModels(req, res){
    try{
        const models = await getModels() 
        res.send(models.rows)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function infoModel(req, res){
    const {id} = req.params
    try{
        const model = await getModel(id)
        if(!model.rows[0]) return res.status(404).send({message: "pet não existe"})
        res.send(model.rows[0])
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function showMyModels(req, res){
    const {user} = res.locals
    try{
        const myModels = await getMyModels(user)
        res.send(myModels.rows)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function setAvailable(req, res){
    const {id} = req.params
    const {available} = req.body
    try{
        const model = await setModel(id, available)
        res.send("Atualizado")
    } catch (err) {
        res.status(500).send(err.message);
    }
}