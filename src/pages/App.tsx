import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TutorialPopup from "../components/TutorialPopup";
import type { Score } from "../types";
import { useExamination } from "../hooks/useExamintion";

const App = () => {
  const [onTutor, setOnTutor] = useState(false);
  const { resetGame } = useExamination();
  const savedScore = localStorage.getItem("score");
  const score: Score = savedScore ? JSON.parse(savedScore) : { value: 0 };

  const menuContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const menuItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-y-20 bg-slate-100">
      {/* Judul */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold tracking-wide text-gray-800"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
      >
        Fatality <span className="text-blue-600">Report</span>
      </motion.h1>

      {/* Menu Utama */}
      <motion.div
        className="flex flex-col gap-y-6 text-2xl md:text-3xl"
        variants={menuContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={menuItem}>
          <Link
            to={"/firstScene"}
            onClick={resetGame}
            className="px-4 py-2 rounded-md text-gray-800 hover:text-blue-600 hover:translate-x-2 transition-all"
          >
            ▶ Mulai permainan
          </Link>
        </motion.div>

        {score.value && score.value >= 1 ? (
          <motion.div variants={menuItem}>
            <Link
              to={"/play"}
              className="px-4 py-2 rounded-md text-gray-800 hover:text-blue-600 hover:translate-x-2 transition-all"
            >
              ⏸ Lanjutkan permainan
            </Link>
          </motion.div>
        ) : null}

        <motion.div variants={menuItem}>
          <Link
            to={"/documentation"}
            className="px-4 py-2 rounded-md text-gray-800 hover:text-blue-600 hover:translate-x-2 transition-all"
          >
            📑 Dokumentasi
          </Link>
        </motion.div>

        <motion.p
          onClick={() => setOnTutor(!onTutor)}
          variants={menuItem}
          whileHover={{ scale: 1.05, color: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
          className="text-left cursor-pointer px-4 py-2 w-fit rounded-md text-gray-800"
        >
          📘 Tutorial
        </motion.p>
      </motion.div>

      {/* Popup Tutorial */}
      <AnimatePresence>
        {onTutor && (
          <motion.div
            key="popup"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
            className="fixed bottom-10 right-10 max-w-sm bg-white border border-gray-300 p-4 rounded-lg shadow-xl"
          >
            <TutorialPopup setOnActive={setOnTutor} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
