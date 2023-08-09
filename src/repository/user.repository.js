import { db } from "../database/database.connection.js"

export function checkEmail(email, cpf, telephone){
    const result = db.query(`SELECT * FROM users WHERE email=$1 OR cpf=$2 OR telephone=$3;`, [email, cpf, telephone])
    return result
}

export function registerUser(name, cpf, telephone, email, hash){
        db.query(`
            INSERT INTO users (name, cpf, telephone, email, password) 
            VALUES ($1, $2, $3, $4, $5);`, [name, cpf, telephone, email, hash])
}

export function getUserByEmail(email){
    const result = db.query(`SELECT id, email, password FROM users WHERE email=$1;`, [email])
    return result
}

export function deleteSession(user){
    db.query(`DELETE FROM sessions WHERE "userId"=$1;`, [user.rows[0].id])
}

export function createSession(user, token){
    db.query(`
                INSERT INTO sessions ("userId", "token") 
                VALUES ($1, $2);`, [user.rows[0].id, token])
}

export function getInfoUser(user){
    return db.query(`SELECT * FROM users WHERE id=$1;`, [user.id])
}