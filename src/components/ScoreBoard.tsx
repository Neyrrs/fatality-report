import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Score = {
  value: number;
};

const defaultScore: Score = { value: 0 };

const ScoreBoard: React.FC = () => {
  const [score, setScore] = useState<Score>(defaultScore);
  const [animate, setAnimate] = useState(false);

  const loadScore = () => {
    const stored = localStorage.getItem("score");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.value > score.value) {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
      }
      setScore(parsed);
    }
  };

  useEffect(() => {
    loadScore();

    window.addEventListener("scoreUpdated", loadScore);
    return () => {
      window.removeEventListener("scoreUpdated", loadScore);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed top-4 right-4 bg-gray-100 shadow-lg px-4 py-2 rounded"
    >
      <p className="font-bold">
        Score:{" "}
        <motion.span
          key={score.value}
          initial={{ scale: 0.8, opacity: 0, }}
          animate={{
            scale: animate ? [1, 1.3, 1] : 1,
            opacity: 1,
            color: animate ? "#16A34A" : "#000",
          }}
          transition={{ duration: 0.4 }}
        >
          {score.value}
        </motion.span>
      </p>
    </motion.div>
  );
};

export default ScoreBoard;
