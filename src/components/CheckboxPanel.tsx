import React from "react";
import { motion } from "framer-motion";
import { causes } from "../data/causes";

interface CheckboxPanelProps {
  selectedCauses: string[];
  onCauseSelect: (cause: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1, // anak-anak (checkbox) muncul satu per satu
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const CheckboxPanel: React.FC<CheckboxPanelProps> = ({
  selectedCauses,
  onCauseSelect,
}) => {
  return (
    <motion.div
      className="p-4 bg-white w-[80%] text-gray-800 shadow rounded-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Penyebab Kematian</h2>

      <motion.div
        className="flex flex-wrap gap-4 overflow-y-scroll h-28"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {causes.map((cause) => (
          <motion.label
            key={cause.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer select-none"
          >
            <motion.input
              type="checkbox"
              checked={selectedCauses.includes(cause.id)}
              onChange={() => onCauseSelect(cause.id)}
              className="form-checkbox h-5 w-5 text-blue-500"
              whileTap={{ scale: 1.3 }}
            />
            <motion.span
              animate={
                selectedCauses.includes(cause.id)
                  ? { scale: [1, 1.2, 1], color: "#3B82F6" }
                  : { scale: 1, color: "#1F2937" }
              }
              transition={{ duration: 0.3 }}
            >
              {cause.label}
            </motion.span>
          </motion.label>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CheckboxPanel;
