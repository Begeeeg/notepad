import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Here are your notes");
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "note created" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "note updated" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "note deleted" });
});

export default router;
