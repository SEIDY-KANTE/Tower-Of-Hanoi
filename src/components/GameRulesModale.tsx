import { motion } from "framer-motion";
import { useEffect } from "react";

interface GameRulesModalProps {
  show: boolean;
  onClose: () => void;
}

const GameRulesModal = ({ show, onClose }: GameRulesModalProps) => {
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-2xl shadow-xl p-6 max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-4">🎮 Game Rules: Tower of Hanoi</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>You have 3 pegs and a set of discs.</li>
          <li>You can only move one disc at a time.</li>
          <li>You can only place a smaller disc on top of a larger one.</li>
          <li>Move all discs from the first peg (A) to the last one (C).</li>
        </ul>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-600 text-white rounded-xl hover:bg-slate-900 transition"
          >
            Got it!
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default GameRulesModal;
