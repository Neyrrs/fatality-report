import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Drawer from "../components/Drawer";
import ExaminationArea from "../components/ExaminationArea";
import CheckboxPanel from "../components/CheckboxPanel";
import { useExamination } from "../hooks/useExamintion";
import type { ToolData, ToolResult } from "../types";
import { causes } from "../data/causes";
import ScoreBoard from "../components/ScoreBoard";
import StickyNavigation from "../components/StickyNavigation";
import SuccessEnding from "./SuccessEnding";

const GamePlay: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolData | null>(null);
  const [examResults, setExamResults] = useState<ToolResult[]>([]);
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 🔹 Tambahan

  const { currentCase, checkResults, totalScore } = useExamination();

  const handleToolSelect = (tool: ToolData) => {
    setSelectedTool(tool);

    if (!currentCase) return;

    const result = currentCase.results.find((r) => r.toolId === tool.id);
    if (result && !examResults.some((r) => r.id === result.id)) {
      setExamResults((prev) => [...prev, result]);
    }
  };

  const handleCauseSelect = (cause: string) => {
    setSelectedCauses((prev) =>
      prev.includes(cause) ? prev.filter((c) => c !== cause) : [...prev, cause]
    );
  };

  const handleSubmit = () => {
    if (!currentCase) {
      alert("Tidak ada kasus tersedia lagi!");
      return;
    }

    if (selectedCauses.length === 0) {
      setErrorMessage("Pilih setidaknya satu penyebab kematian sebelum submit!");
      return;
    }

    const selectedLabels = selectedCauses.map(
      (id) => causes.find((c) => c.id === id)?.label || ""
    );

    const result = checkResults(selectedLabels);

    // 🔹 Kalau salah
    if (result.wrong.length > 0 || result.matched.length === 0) {
      setErrorMessage("Jawaban masih salah, coba lagi!");
      return;
    }

    // 🔹 Kalau benar
    const newScore = {
      value: totalScore + result.score,
    };

    localStorage.setItem("score", JSON.stringify(newScore));
    window.dispatchEvent(new Event("scoreUpdated"));

    setErrorMessage(null); // reset error
    setIsSubmitted(true);
  };

  const handleNextCase = () => {
    setSelectedTool(null);
    setExamResults([]);
    setSelectedCauses([]);
    setIsSubmitted(false);
    setErrorMessage(null); // reset error saat lanjut
  };

  return (
    <div className="flex h-screen bg-white relative overflow-hidden">
      {currentCase ? (
        <>
          <ScoreBoard />
          <StickyNavigation />
        </>
      ) : (
        ""
      )}
      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {currentCase ? (
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col flex-1"
            >
              <ExaminationArea
                selectedTool={selectedTool}
                examResults={examResults}
              />

              <CheckboxPanel
                selectedCauses={selectedCauses}
                onCauseSelect={handleCauseSelect}
              />

              {/* 🔹 Pesan Error */}
              {errorMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 font-semibold text-center my-2"
                >
                  {errorMessage}
                </motion.p>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={!isSubmitted ? handleSubmit : handleNextCase}
                className={`px-4 w-[80%] h-full py-2 font-bold text-white ${
                  !isSubmitted ? "bg-blue-500" : "bg-green-500"
                }`}
              >
                {!isSubmitted ? "Submit Report" : "Next Case"}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="finished"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center flex-1"
            >
              <SuccessEnding />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {currentCase ? (
        <Drawer selectedTool={selectedTool} onToolSelect={handleToolSelect} />
      ) : null}
    </div>
  );
};

export default GamePlay;
