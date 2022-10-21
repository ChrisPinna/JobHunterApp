import express from "express";
import { createJobHunt, deleteJobHunt, getAllJobHunts, getJobHunt, updateJobHunt } from "../controllers/jobHuntController.js";



const router = express.Router()

// get all jobhunts 
router.get('/', getAllJobHunts);
// get one jobhunt
router.get('/:id', getJobHunt);
// create a jobhunt
router.post('/', createJobHunt);
// update a jobhunt
router.put('/:id', updateJobHunt);
// delete a jobhunt
router.delete('/:id', deleteJobHunt);

export default router;