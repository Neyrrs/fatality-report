import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ToolResult } from "../types";
import body from "../assets/body.png";

export interface ToolData {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface ExaminationAreaProps {
  selectedTool: ToolData | null;
  examResults: ToolResult[];
}

const ExaminationArea: React.FC<ExaminationAreaProps> = ({
  selectedTool,
  examResults,
}) => {
  return (
    <div className="p-4 shadow border-gray-500 border-2 examination">
      <h2 className="text-xl font-bold text-white mb-2">Area Pengecekan</h2>

      <div className="relative bg-slate-300 w-[70%] h-64  border-2 rounded-lg flex items-center justify-center">
        <img src={body} className="absolute w-fit h-fit -rotate-90 z-10" />
        <AnimatePresence mode="wait">
          {selectedTool ? (
            <motion.p
              key={selectedTool.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-xl font-semibold text-black backdrop-blur-2xl p-5 z-50 rounded-2xl"
            >
              Mengecek tubuh jasad dengan{" "}
              <strong className="text-blue-500">{selectedTool.name}</strong>...
            </motion.p>
          ) : (
            <motion.p
              key="no-tool"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-semibold text-black backdrop-blur-lg p-5 z-50 rounded-2xl"
            >
              Pilih alat untuk memulai pengecekan
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 bg-white p-3 w-220 rounded-md shadow-lg border-2 border-gray-400 shadow-slate-400">
        <h3 className="font-bold mb-2 text-gray-800">Hasil pengecekan:</h3>
        {examResults.length > 0 ? (
          <div className="flex gap-2 overflow-x-scroll w-full">
            <AnimatePresence>
              {examResults.map((result) => (
                <motion.p
                  key={result.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-blue-500 text-white rounded-md text-nowrap"
                >
                  {result.description}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <p className="text-gray-500">Belum ada hasil</p>
        )}
      </div>
    </div>
  );
};

export default ExaminationArea;
