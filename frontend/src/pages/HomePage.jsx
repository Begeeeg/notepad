import React from "react";
import Navbar from "./../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import { useState } from "react";

export default function HomePage() {
  const [isRateLimited, setRateLimited] = useState(true);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
}
