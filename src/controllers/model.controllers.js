export async function postModel(req, res){
    try{
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