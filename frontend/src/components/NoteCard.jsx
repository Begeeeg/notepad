import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router";
import formatDate from "../lib/utils.jsx";
import { axiosInstance } from "../lib/axiosInstance.jsx";
import toast from "react-hot-toast";

export default function NoteCard({ note, setNotes }) {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    // Implement delete functionality here

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await axiosInstance.delete(`/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      toast.error("Failed to delete the note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card hover:shadow-lg transition-all duration-100 border-t-4 border-2 border-primary"
    >
      <div className="card-body">
        <h3 className="card-title text-based-content">{note.title}</h3>
        <h4 className="text-based-content/70">{note.content}</h4>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-based-content/10">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
