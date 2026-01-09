import React from "react";

export default function RateLimitedUI() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-yellow-100 border border-yellow-300 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-800">
        Rate Limit Exceeded
      </h2>
      <p className="text-yellow-700">
        You have exceeded the number of allowed requests. Please wait a moment
        before trying again.
      </p>
    </div>
  );
}
