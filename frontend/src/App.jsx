import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";
import NotePage from "./pages/notePage";

const App = () => {
  return (
    <div data-theme="coffee">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </div>
  );
};

export default App;
