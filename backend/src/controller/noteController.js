import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error getAllNotes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteId(req, res) {
  try {
    const noteId = await Note.findById(req.params.id);
    if (!noteId) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Fetch Note", note: noteId });
  } catch (error) {
    console.error("Error getNoteId:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    const savedNote = await newNote.save();
    res
      .status(201)
      .json({ message: "Note created successfully", note: savedNote });
  } catch (error) {
    console.error("Error createNote:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res
      .status(200)
      .json({ message: "Note updated successfully", note: updatedNote });
  } catch (error) {
    console.error("Error updateNote:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleteNote:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
