import { db } from "../database/database.connection.js"

export function createModel(name, picture, pictureUserPet, description, user) {
    db.query(`
        INSERT INTO models (name, description, picture, "pictureUserPet", "userId") 
        VALUES ($1, $2, $3, $4, $5);`, [name, description, picture, pictureUserPet, user.id])
}

export function checkModel(name) {
    const result = db.query(`SELECT * FROM models WHERE name=$1`, [name])
    return result
}

export function getModels() {
    return db.query(`SELECT * FROM models WHERE available='true';`)
}

export function getModel(id) {
    return db.query(`SELECT models.*, users.name AS "userName", users.cpf, users.picture AS "userPicture", users.telephone, users.email, users.description AS "userDescription"
    FROM models
    JOIN users ON models."userId" = users.id
    AND models.id = $1;`, [id])
}

export function getMyModels(user) {
    return db.query(`SELECT * FROM models WHERE "userId"=$1;`, [user.id])
}

export function setModel(id, available) {
    if (available === true) return db.query(`UPDATE models SET available=false WHERE id=$1;`, [id])
    if (available === false) return db.query(`UPDATE models SET available=true WHERE id=$1;`, [id])
}
