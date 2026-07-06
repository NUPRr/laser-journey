import db from "../config/db.js";

export const createUser = (name, email, password) => {
  return new Promise((resolve, reject) => {

    const sql =
      "INSERT INTO users(name,email,password) VALUES (?,?,?)";

    db.query(sql, [name, email, password], (err, result) => {

      if (err) reject(err);

      else resolve(result);

    });

  });
};

export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {

    db.query(

      "SELECT * FROM users WHERE email=?",

      [email],

      (err, result) => {

        if (err) reject(err);

        else resolve(result);

      }

    );

  });
};