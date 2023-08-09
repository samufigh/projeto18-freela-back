import { db } from "../database/database.connection.js"

export function createModel(name, picture, description, user){
    db.query(`
        INSERT INTO models (name, description, picture, "userId") 
        VALUES ($1, $2, $3, $4);`, [name, description, picture, user.id])
}

export function checkModel(name){
    const result = db.query(`SELECT * FROM models WHERE name=$1`, [name])
    return result
}

export function getModels(){
    return db.query(`SELECT * FROM models WHERE available='true';`)
}

export function getModel(id){
    return db.query(`SELECT * FROM models WHERE id=$1;`, [id])
}

export function getMyModels(user){
    return db.query(`SELECT * FROM models WHERE "userId"=$1`, [user.id])
}