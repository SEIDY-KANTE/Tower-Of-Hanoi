import { StepForward, Moon, Sun } from "lucide-react";
import { MAX_DISCS, MIN_DISCS } from "../utils/constansts";

interface ControlsProps {
  numDiscs: number;
  moves: number;
  expectedMoves: number;
  darkMode: boolean;
  soundEnabled: boolean;
  preparingSteps: boolean;
  autoSolving: boolean;
  setNumDiscs: (n: number) => void;
  handleReset: () => void;
  toggleSound: () => void;
  handleAutoSolve: () => void;
  handlePrepareSteps: () => void;
  handleNextStep: () => void;
  toggleTheme: () => void;
}

const Controls = ({
  numDiscs,
  setNumDiscs,
  moves,
  expectedMoves,
  darkMode,
  soundEnabled,
  preparingSteps,
  autoSolving,
  handleReset,
  toggleSound,
  handleAutoSolve,
  handlePrepareSteps,
  handleNextStep,
  toggleTheme,
}: ControlsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4 justify-center mt-16">
      <button onClick={toggleTheme} className="absolute md:top-25 top-30 md:right-25 right-15">
        {darkMode ? <Sun color="white" /> : <Moon color="#1e293b" />}
      </button>
      <label>Discs:</label>
      <input
        type="number"
        min="3"
        max="10"
        value={numDiscs}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            setNumDiscs(Math.max(MIN_DISCS, Math.min(MAX_DISCS, value)));
          }
        }}
        className="px-2 py-1 w-[60px] text-lg"
      />
      <button
        onClick={handleReset}
        disabled={autoSolving}
        className={`bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 ${
          autoSolving ? "cursor-not-allowed" : ""
        }`}
      >
        Reset
      </button>
      <button
        onClick={toggleSound}
        className="bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-600"
      >
        {soundEnabled ? "🔊 Sound On" : "🔇 Sound Off"}
      </button>

      <button
        onClick={handleAutoSolve}
        disabled={autoSolving}
        className={`text-white px-3 py-2 rounded ${
          autoSolving
            ? "bg-cyan-400 cursor-not-allowed"
            : "bg-cyan-600 hover:bg-cyan-700"
        }`}
      >
        Auto Solve
      </button>

      {!preparingSteps ? (
        <button
          onClick={handlePrepareSteps}
          disabled={autoSolving}
          className={`px-3 py-2 rounded text-white ${
            autoSolving
              ? "bg-amber-300 cursor-not-allowed"
              : "bg-orange-400 hover:bg-amber-600"
          }`}
        >
          <span className="flex justify-between items-center">
            Steps <StepForward size={16} />
          </span>
        </button>
      ) : (
        <button
          onClick={handleNextStep}
          className="bg-pink-500 text-white px-3 py-2 rounded hover:bg-pink-600"
        >
          Next Step 🎞️
        </button>
      )}
      <div>Moves: {moves}</div>
      <div>Expected: {expectedMoves}</div>
    </div>
  );
};

export default Controls;
