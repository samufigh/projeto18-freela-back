import { db } from '../database/database.connection.js';

export function checkInfo(email, cpf, telephone) {
  const result = db.query(`SELECT * FROM users WHERE email=$1 OR cpf=$2 OR telephone=$3;`, [email, cpf, telephone]);
  return result;
}

export function registerUser(name, cpf, telephone, email, hash) {
  db.query(
    `
            INSERT INTO users (name, cpf, telephone, email, password) 
            VALUES ($1, $2, $3, $4, $5);`,
    [name, cpf, telephone, email, hash],
  );
}

export function getUserByEmail(email) {
  const result = db.query(`SELECT id, email, password FROM users WHERE email=$1;`, [email]);
  return result;
}

export function deleteSession(user) {
  db.query(`DELETE FROM sessions WHERE "userId"=$1;`, [user.rows[0].id]);
}

export function createSession(user, token) {
  db.query(
    `
                INSERT INTO sessions ("userId", "token") 
                VALUES ($1, $2);`,
    [user.rows[0].id, token],
  );
}

export function getInfoUser(user) {
  return db.query(`SELECT * FROM users WHERE id=$1;`, [user.id]);
}

export function setUser(user, name, email, telephone, picture, description) {
  return db.query(
    `UPDATE users 
        SET name=$1, email=$2, telephone=$3, picture=$4, description=$5
        WHERE id=$6;`,
    [name, email, telephone, picture, description, user.id],
  );
}

export function checkEmail(email) {
  return db.query(`SELECT email, telephone FROM users WHERE email=$1;`, [email]);
}

export function checkPhone(telephone) {
  return db.query(`SELECT telephone, telephone FROM users WHERE telephone=$1;`, [telephone]);
}
