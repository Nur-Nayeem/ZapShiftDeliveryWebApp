import React from "react";
import QnaCard from "./QnaCard";

const FrequentlyAskedqn = () => {
  return (
    <div className="w-full py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-center text-3xl font-bold mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="max-w-6xl mx-auto space-y-2.5">
        <QnaCard />
        <QnaCard />
        <QnaCard />
      </div>
    </div>
  );
};

export default FrequentlyAskedqn;
