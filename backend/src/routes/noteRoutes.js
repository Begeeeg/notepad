import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteId,
} from "../controller/noteController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteId);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
