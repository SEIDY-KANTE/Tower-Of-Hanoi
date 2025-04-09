import { useCallback } from "react";

export const useHanoiSolver = () => {
  const solveHanoi = useCallback(
    (n: number, from: number, to: number, aux: number): number[][] => {
      const steps: number[][] = [];
      const recursiveSolve = (
        n: number,
        from: number,
        to: number,
        aux: number
      ) => {
        if (n === 0) return;
        recursiveSolve(n - 1, from, aux, to);
        steps.push([from, to]);
        recursiveSolve(n - 1, aux, to, from);
      };
      recursiveSolve(n, from, to, aux);
      return steps;
    },
    []
  );

  return { solveHanoi };
};
