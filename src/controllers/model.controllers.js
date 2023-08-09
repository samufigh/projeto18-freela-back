import { checkModel, createModel } from "../repository/model.repository.js";

export async function postModel(req, res){
    const {name, picture, description} = req.body
    const {user} = res.locals
    try{
        const existingModel = await checkModel(name)
        if(existingModel.rowCount>0) return res.status(409).send({message: "Você já cadastrou um pet com esse nome!"})
        await createModel(name, picture, description, user)
        res.send("postModel")
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function showModels(req, res){
    try{
        res.send("showModels")
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function infoModel(req, res){
    try{
        res.send("infoModel")
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function showMyModels(req, res){
    try{
        res.send("showMyModels")
    } catch (err) {
        res.status(500).send(err.message);
    }
}