import { useRef } from "react";
import { motion } from "framer-motion";
import { useDrag } from "react-dnd";
import { ItemTypes, DiscProps } from "../types";

const Disc = ({ size, pegIndex }: DiscProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.DISC,
    item: { size, pegIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  drag(ref);

  const colors = [
    "#f87171",
    "#fbbf24",
    "#34d399",
    "#60a5fa",
    "#a78bfa",
    "#f472b6",
    "#4ade80",
  ];
  const color = colors[(size - 1) % colors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-lg mb-1 cursor-grab text-center font-bold h-[30px] leading-[30px]"
      style={{
        width: `${50 + size * 30}px`,
        backgroundColor: color,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {size}
    </motion.div>
  );
};

export default Disc;
