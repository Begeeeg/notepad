import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";
import NotePage from "./pages/notePage";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,_#000_60%,_#001fa4_100%)]" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </div>
  );
};

export default App;
