import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";
import NotePage from "./pages/notePage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      <button
        onClick={() => toast.success("This is a success message!")}
        className="text-red-500 p-2 bg-blue-700"
      >
        Show Toast
      </button>
      <button className="text-blue-500 p-2 bg-black">Check 1</button>
      <button className="text-blue-500 p-2 bg-black">Check 2</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </div>
  );
};

export default App;
