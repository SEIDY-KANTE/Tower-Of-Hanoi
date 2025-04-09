import { useDrop } from "react-dnd";
import { toast } from "react-hot-toast";
import { ItemTypes, PegProps } from "../types";
import Disc from "./Disc";

const Peg = ({ discs, pegIndex, darkMode, onDropDisc }: PegProps) => {
  const [, drop] = useDrop({
    accept: ItemTypes.DISC,
    drop: (item: { size: number; pegIndex: number }) => {
      const topDisc = discs[discs.length - 1];
      if (!topDisc || item.size < topDisc) {
        onDropDisc(item.pegIndex, pegIndex);
      } else {
        toast.error("Invalid move! Can't place a bigger disc on a smaller one.");
      }
    },
  });

  const dropRef = (element: HTMLDivElement | null) => {
    if (element) drop(element);
  };

  const pegNames = ["A", "B", "C"];

  return (
    <div className="flex flex-col items-center w-full sm:w-auto mb-4 sm:mb-0">
      <div
        ref={dropRef}
        className={`w-64 h-72 bg-transparent border-b-8 rounded-b-md ${
          darkMode ? "border-white" : "border-slate-900"
        } flex flex-col-reverse items-center relative`}
      >
        <div
          className={`absolute w-2 h-full rounded-t-full ${
            darkMode ? "bg-white" : "bg-slate-900"
          } bottom-0 pointer-events-none`}
        ></div>
        {discs.map((discSize, i) => (
          <Disc key={i} size={discSize} pegIndex={pegIndex} />
        ))}
      </div>
      <div className="mb-2">{pegNames[pegIndex]}</div>
    </div>
  );
};

export default Peg;
