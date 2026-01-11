import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import { axiosInstance } from "../lib/axiosInstance";
import toast from "react-hot-toast";

export default function NotePage() {
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error("An error occurred while fetching the note.");
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  console.log("Note data:", note);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-0 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-6 mx-auto mt-20 text-primary" />
      </div>
    );
  }

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await axiosInstance.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete the note");
    }
  };

  const handleSave = async () => {
    if (!note) return;

    const title = note.title?.trim() ?? "";
    const content = note.content?.trim() ?? "";

    if (!title && !content) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await axiosInstance.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-400">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-5" /> Back to home
            </Link>
            <button
              className="btn btn-error btn-outline"
              onClick={handleDelete}
            >
              <Trash2Icon className="size-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
