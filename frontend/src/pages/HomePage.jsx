import React, { useEffect, useState } from "react";
import Navbar from "./../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import { axiosInstance } from "../lib/axiosInstance";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard.jsx";
import NoteNotFound from "../components/NoteNotFound.jsx";
import { LoaderIcon } from "lucide-react";

export default function HomePage() {
  const [isRateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axiosInstance.get("/notes");
        console.log("Fetched notes successfully:", res.data);
        setNotes(res.data);
        setRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes:", error);
        if (error.response && error.response.status === 429) {
          setRateLimited(true);
        } else {
          toast.error("An error occurred while fetching notes.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {isLoading && (
          <div className="bg-base-0">
            <LoaderIcon className="animate-spin size-6 mx-auto mt-20 text-primary" />
          </div>
        )}

        {notes.length === 0 && !isLoading && !isRateLimited && <NoteNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
