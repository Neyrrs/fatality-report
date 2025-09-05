import React from "react";
import { useExamination } from "../hooks/useExamintion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SuccessEnding = () => {
  const { resetGame } = useExamination();

  const handleReset = () => {
    resetGame();
    localStorage.setItem(
      "score",
      JSON.stringify({ value: 0, correct: 0, total: 0 })
    );
  };

  return (
    <motion.div
      className="flex flex-col w-screen h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full"></div>

      <motion.div
        className="bg-gray-400 text-black border-t-2 text-xl py-10 h-[50%] relative w-full p-5 font-medium"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
      >
        Anda telah menyelesaikan pemeriksaan forensik dengan teliti. Setiap luka
        memiliki cerita, dan setiap detail yang Anda amati membawa kita lebih
        dekat pada kebenaran. Ingat, dalam dunia forensik, ketelitian dan fokus
        adalah kunci. Teruslah berlatih, karena semakin Anda peka terhadap
        detail, semakin akurat laporan yang dapat Anda buat.
        <motion.div
          className="absolute -top-10 h-15 w-45 left-0 bg-white rounded-r-3xl border-2 items-center flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold">Narator</h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-0 right-0"
        >
          <Link
            to={"/"}
            onClick={handleReset}
            className="h-15 w-fit px-10 py-2 font-bold bg-blue-500 text-white rounded-md cursor-pointer items-center flex justify-center"
          >
            Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SuccessEnding;
