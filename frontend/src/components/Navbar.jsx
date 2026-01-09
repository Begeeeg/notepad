import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-black border-b border-black">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary tracking-tighter ">
            NotePad
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary p-2">
              <PlusIcon className="size-4" />
              <span className="ml-1">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
