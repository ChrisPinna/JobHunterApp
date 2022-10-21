import { json } from "express";
import db from "../db.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    res.status(200).json({ message: "Success", data: user.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  const { id, first_name, last_name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    if (id === req.params.id) {
      const updatedUser = await db.query(
        "UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5 RETURNING *",
        [first_name, last_name, email, hashedPassword, id]
      );
      res.status(200).json({ message: "Success", data: updatedUser.rows[0] });
    } else {
      res.status(403).json({ message: "You can only update your own account" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.body.id;
  try {
    if (id === req.params.id) {
      await db.query("DELETE FROM users WHERE id = $1", [id]);
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(403).json({ message: "You can only delete your own account" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};