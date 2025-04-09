import Peg from "./Peg";

interface GameBoardProps {
  pegs: number[][];
  darkMode: boolean;
  onDropDisc: (fromIndex: number, toIndex: number) => void;
}

const GameBoard = ({ pegs, darkMode, onDropDisc }: GameBoardProps) => {
  return (
    <div className="flex justify-center lg:justify-around gap-4 mt-10 px-4 flex-col md:flex-row w-full  max-w-8xl  mx-auto transition-all">
      {pegs.map((peg, i) => (
        <Peg
          key={i}
          pegIndex={i}
          discs={peg}
          darkMode={darkMode}
          onDropDisc={onDropDisc}
        />
      ))}
    </div>
  );
};

export default GameBoard;
