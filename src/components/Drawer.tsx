import React from "react";
import { motion } from "framer-motion";
import { tools } from "../data/tools";

interface DrawerProps {
  selectedTool: any;
  onToolSelect: (tool: any) => void;
}

const Drawer: React.FC<DrawerProps> = ({ selectedTool, onToolSelect }) => {
  return (
    <motion.div
      initial={{ x: 250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 250, opacity: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className="w-72 border-l bg-slate-100 p-4 shadow-lg"
    >
      {/* Judul */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-xl font-bold text-gray-800"
      >
        Alat Investigasi
      </motion.h2>

      {/* Deskripsi */}
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-sm text-gray-600 mb-4"
      >
        Klik alat untuk menginvestigasi
      </motion.p>

      {/* List alat */}
      <motion.div
        className="space-y-2"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {tools.map((tool) => (
          <motion.button
            key={tool.id}
            onClick={() => onToolSelect(tool)}
            variants={{
              hidden: { opacity: 0, x: 20 },
              show: { opacity: 1, x: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={
              selectedTool?.id === tool.id
                ? {
                    scale: [1, 1.1, 1],
                    backgroundColor: "#3B82F6",
                    color: "#fff",
                  }
                : {}
            }
            transition={{ duration: 0.3 }}
            className={`w-full p-2 text-left rounded cursor-pointer border ${
              selectedTool?.id === tool.id
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white hover:bg-slate-200 text-gray-800 border-gray-300"
            }`}
          >
            <span className="mr-2">{tool.icon}</span>
            {tool.name}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
