import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gameGuide } from "../data/documentations";
import StickyNavigation from "../components/StickyNavigation";

const Documentations = () => {
  const [section, setSection] = useState<"causes" | "tools">("causes");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const data = section === "causes" ? gameGuide.causes : gameGuide.tools;
  const selectedItem = data.find((d) => d.id === selectedId);

  const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };

  const sidebarItemVariant = {
    rest: { scale: 1, x: 0 },
    hover: {
      scale: 1.05,
      x: 5,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
    active: {
      scale: 1.08,
      x: 10,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen w-full p-10 overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <StickyNavigation />
      <motion.div
        className="p-5 w-full h-fit border border-slate-600 backdrop-blur-xl rounded-2xl shadow-2xl box-border"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Judul Section */}
        <motion.h1
          key={section}
          className="text-3xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {section === "causes"
            ? "Penyebab Kematian"
            : "Alat Investigasi"}
        </motion.h1>

        <div className="flex w-full h-full">
          <motion.div
            layout
            className="w-1/3 h-80 overflow-y-auto overflow-x-hidden border-r border-slate-600 pr-3 space-y-2"
          >
            {data.map((item) => (
              <motion.p
                key={item.id}
                variants={sidebarItemVariant}
                initial="rest"
                animate={selectedId === item.id ? "active" : "rest"}
                whileHover="hover"
                onClick={() => setSelectedId(item.id)}
                className={`cursor-pointer p-2 rounded-md font-medium select-none transition-colors ${
                  selectedId === item.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-500/20 hover:text-blue-300"
                }`}
              >
                {item.icon ? `${item.icon} ` : ""} {item.label || item.name}
              </motion.p>
            ))}
          </motion.div>

          <div className="w-2/3 h-80 p-5 bg-slate-800/70 rounded-md overflow-y-auto relative overflow-x-hidden">
            <AnimatePresence mode="wait">
              {selectedItem ? (
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                >
                  {section === "causes" ? (
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-blue-400">
                        {selectedItem.label}
                      </h2>
                      <p className="text-gray-200">{selectedItem.hint}</p>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-bold mb-3 text-blue-400">
                        {selectedItem.icon} {selectedItem.name}
                      </h2>
                      <p className="text-gray-200 mb-2">
                        <span className="font-semibold">🔧 Penggunaan: </span>
                        {selectedItem.usage}
                      </p>
                      <p className="text-gray-200">
                        <span className="font-semibold">📌 Contoh Kasus: </span>
                        {selectedItem.example}
                      </p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  className="h-full flex items-center justify-center text-gray-400 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Pilih salah satu {section === "causes" ? "penyebab" : "alat"}{" "}
                  di sebelah kiri
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="w-full px-5 h-15 flex justify-between mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-10 text-sm rounded bg-slate-700 hover:bg-slate-600"
            onClick={() => {
              if (section === "tools") {
                setSection("causes");
                setSelectedId(null);
              }
            }}
          >
            Previous
          </motion.button>
           <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-10 text-sm rounded bg-slate-700 hover:bg-slate-600"
            onClick={() => {
              if (section === "causes") {
                setSection("tools");
                setSelectedId(null);
              }
            }}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Documentations;
