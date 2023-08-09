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