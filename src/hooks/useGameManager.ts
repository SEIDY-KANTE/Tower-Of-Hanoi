import { useState, useCallback } from "react";

export const useGameManager = (initialDiscs: number) => {
    const [pegs, setPegs] = useState<number[][]>([[3, 2, 1], [], []]);
    const [moves, setMoves] = useState(0);
  const [expectedMoves, setExpectedMoves] = useState(
    Math.pow(2, initialDiscs) - 1
  );

  const resetGame = useCallback((numDiscs: number) => {
    const newPegs: number[][] = [[], [], []];
    for (let i = numDiscs; i >= 1; i--) {
      newPegs[0].push(i);
    }
    setPegs(newPegs);
    setMoves(0);
    setExpectedMoves(Math.pow(2, numDiscs) - 1);
  }, []);

  const moveDisc = (fromIndex: number, toIndex: number) => {
    setPegs((prevPegs) => {
      const newPegs = prevPegs.map((peg) => [...peg]);
      const disc = newPegs[fromIndex].pop();
      newPegs[toIndex].push(disc!);
      return newPegs;
    });
    setMoves((m) => m + 1);
  };

  return { pegs, moves, expectedMoves, resetGame, moveDisc, setPegs, setMoves };
};
