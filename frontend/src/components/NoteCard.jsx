import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import formatDate from "../lib/utils.jsx";

export default function NoteCard({ note }) {
  return (
    <Link
      to={"/note/${note._id}"}
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
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
