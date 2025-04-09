import { useState, useEffect, useCallback } from "react";
import GameBoard from "./components/GameBoard";
import Controls from "./components/Controls";
import { useGameManager } from "./hooks/useGameManager";
import { useHanoiSolver } from "./hooks/useHanoiSolver";
import { useAudio } from "./hooks/useAudio";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import {
  INITIAL_AUTO_SOLVING,
  INITIAL_AUTO_STEPS,
  INITIAL_DARK_MODE,
  INITIAL_PREPARING_STEPS,
  INITIAL_SOUND_ENABLED,
  INITIAL_STEP_INDEX,
  MAX_DISCS,
  MIN_DISCS,
} from "./utils/constansts";

const App = () => {
  const [numDiscs, setNumDiscs] = useState(MIN_DISCS);
  const [darkMode, setDarkMode] = useState(INITIAL_DARK_MODE);
  const [soundEnabled, setSoundEnabled] = useState(INITIAL_SOUND_ENABLED);
  const [preparingSteps, setPreparingSteps] = useState(INITIAL_PREPARING_STEPS);
  const [autoSolving, setAutoSolving] = useState(INITIAL_AUTO_SOLVING);
  const [autoSteps, setAutoSteps] = useState<number[][]>(INITIAL_AUTO_STEPS);
  const [stepIndex, setStepIndex] = useState(INITIAL_STEP_INDEX);

  const { pegs, moves, expectedMoves, resetGame, moveDisc } =
    useGameManager(numDiscs);
  const { solveHanoi } = useHanoiSolver();
  const { play, stop } = useAudio();

  // Toggle theme handler
  const toggleTheme = useCallback(() => setDarkMode((prev) => !prev), []);
  // Toggle sound handler
  const toggleSound = () => setSoundEnabled((s) => !s);

  const handleReset = useCallback(() => {
    resetGame(numDiscs);
    setAutoSteps([]);
    setStepIndex(0);
    setPreparingSteps(false);
    setAutoSolving(false);
    stop();
    setSoundEnabled(false);
  }, [numDiscs, resetGame, stop]);

  const handlePrepareSteps = () => {
    if (preparingSteps || autoSolving) return;
    handleReset();
    const steps = solveHanoi(numDiscs, 0, 2, 1);
    setAutoSteps(steps);
    setStepIndex(0);
    setPreparingSteps(true);
  };

  const handleNextStep = () => {
    if (stepIndex >= autoSteps.length) return;
    const [from, to] = autoSteps[stepIndex];
    moveDisc(from, to);
    setStepIndex((i) => i + 1);
  };

  const handleAutoSolve = async () => {
    handleReset();
    const steps = solveHanoi(numDiscs, 0, 2, 1);
    setAutoSolving(true);
    setSoundEnabled(true);
    play();
    for (let i = 0; i < steps.length; i++) {
      const [from, to] = steps[i];
      await new Promise((resolve) => setTimeout(resolve, 500));
      moveDisc(from, to);
    }
    setAutoSolving(false);
  };

  const handlesSetNumDiscs = useCallback(
    (value: number) => {
      setNumDiscs(value);
      resetGame(value);
    },
    [resetGame]
  );

  useEffect(() => {
    if (soundEnabled) play();
    return () => stop();
  }, [soundEnabled]);

  // Check for game completion
  useEffect(() => {
    if (pegs[2].length === numDiscs && !autoSolving) {
      setTimeout(() => {
        const msg =
          moves === expectedMoves
            ? "🎉 Congratulations! Perfect solution!"
            : "👏 Well done! Try to reach the optimal steps next time!";
        confetti();
        toast.success(`${msg}\nMoves: ${moves}, Expected: ${expectedMoves}`);
        handleReset();
        handlesSetNumDiscs(Math.min(numDiscs + 1, MAX_DISCS));
      }, 1000);
    }
  }, [
    pegs,
    numDiscs,
    moves,
    expectedMoves,
    autoSolving,
    handleReset,
    handlesSetNumDiscs,
  ]);

  return (
    <div
      className={`min-h-screen p-5 relative transition-all flex flex-col items-center justify-start overflow-x-hidden w-full
        ${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl uppercase mb-4 py-10">
      Tower of Hanoi
      </h1>
      <GameBoard pegs={pegs} darkMode={darkMode} onDropDisc={moveDisc} />
      <Controls
        numDiscs={numDiscs}
        setNumDiscs={handlesSetNumDiscs}
        moves={moves}
        expectedMoves={expectedMoves}
        darkMode={darkMode}
        soundEnabled={soundEnabled}
        preparingSteps={preparingSteps}
        autoSolving={autoSolving}
        handleReset={handleReset}
        toggleSound={toggleSound}
        handleAutoSolve={handleAutoSolve}
        handlePrepareSteps={handlePrepareSteps}
        handleNextStep={handleNextStep}
        toggleTheme={toggleTheme}
      />
    </div>
  );
};

export default App;
