import { useState, useEffect } from "react";
import { cases } from "../data/cases";
import type { CaseData } from "../types";

export const useExamination = () => {
  const [totalScore, setTotalScore] = useState(() => {
    const saved = localStorage.getItem("score");
    return saved ? JSON.parse(saved).value : 0;
  });

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify({ value: totalScore }));
  }, [totalScore]);

  const caseIndex = Math.floor(totalScore / 100);
  const currentCase: CaseData | null =
    caseIndex < cases.length ? cases[caseIndex] : null;

  const checkResults = (selectedCauses: string[]) => {
    if (!currentCase) {
      return {
        matched: [],
        wrong: [],
        score: 0,
        isPerfect: false,
        correctAnswers: [],
      };
    }

    const correct = currentCase.correctCauses;

    const matched = selectedCauses.filter((cause) => correct.includes(cause));

    const wrong = selectedCauses.filter((cause) => !correct.includes(cause));

    const pointPerCorrect = correct.length > 0 ? 100 / correct.length : 0;
    const scoreFromCorrect = matched.length * pointPerCorrect;

    const penaltyPerWrong = 25;
    const scoreFromWrong = wrong.length * penaltyPerWrong;

    const rawScore = scoreFromCorrect - scoreFromWrong;

    const score = Math.max(0, Math.round(rawScore));

    setTotalScore((prev) => Math.max(0, prev + score));

    return {
      matched,
      wrong,
      score,
      isPerfect: matched.length === correct.length && wrong.length === 0,
      correctAnswers: correct,
    };
  };

  const resetGame = () => {
    setTotalScore(0);
    localStorage.removeItem("score");
  };

  return {
    currentCase,
    totalScore,
    checkResults,
    resetGame,
  };
};
