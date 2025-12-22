import React from "react";
import { FeedbackDisplay } from "./components/FeedbackDisplay";

export const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <FeedbackDisplay />
      </div>
    </div>
  );
};
