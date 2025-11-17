import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const QnaCard = () => {
  const [showQna, setShowQna] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-center justify-between">
        <h3>How does this posture corrector work?</h3>
        <div className="cursor-pointer" onClick={() => setShowQna(!showQna)}>
          {showQna ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {showQna && (
        <p className="py-2.5 border-t border-gray-300/50 mt-2.5">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </p>
      )}
    </div>
  );
};

export default QnaCard;
