import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Ingame {
  gameStarted: string;
}

const StickyNavigation: React.FC<Ingame> = ({ gameStarted = false }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    let confirmLeave;
    if (gameStarted) {
      confirmLeave = window.confirm(
        "Yakin mau kembali ke Home? Progress permainan akan tersimpan saat melanjutkan permainan"
      );
    } else {
      confirmLeave = window.confirm("Yakin mau kembali ke Home?");
    }
    if (confirmLeave) {
      navigate("/");
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed bottom-0 z-50 w-fit right-0 text-white shadow-lg rounded-br-lg"
    >
      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex space-x-4 ml-5">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgb(37,99,235)" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleHomeClick}
            className="px-3 py-1 rounded bg-blue-600 transition"
          >
            Home
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNavigation;
