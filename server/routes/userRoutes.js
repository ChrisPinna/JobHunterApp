import express from "express";
import { deleteUser, getUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

// get user
router.get('/:id', getUser);
// update a user
router.put('/:id', updateUser);
// delete a user
router.delete('/:id', deleteUser);

export default router;