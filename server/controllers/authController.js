import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  createUser,
  findUserByEmail,
} from "../models/userModel.js";

export const signup = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const user = await findUserByEmail(email);

    if (user.length > 0) {

      return res.status(400).json({
        message: "Email already exists",
      });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await createUser(name, email, hashedPassword);

    res.json({
      message: "Account Created Successfully",
    });

  } catch (err) {

  console.log("SIGNUP ERROR:", err);

  res.status(500).json({
    message: err.message,
  });

}

};

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (user.length === 0) {

      return res.status(400).json({
        message: "Invalid Email",
      });

    }

    const valid = await bcrypt.compare(
      password,
      user[0].password
    );
    


    if (!valid) {

      return res.status(400).json({
        message: "Wrong Password",
      });

    }

    const token = jwt.sign(

      { id: user[0].id },

      process.env.JWT_SECRET,

      { expiresIn: "7d" }

    );

    res.json({

      token,

      user: {

        id: user[0].id,

        name: user[0].name,

        email: user[0].email,

      },

    });

  } catch (err) {

  console.log("LOGIN ERROR:", err);

  res.status(500).json({
    message: err.message,
  });

}

};