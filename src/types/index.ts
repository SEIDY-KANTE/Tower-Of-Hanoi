export const ItemTypes = {
  DISC: "disc",
};

export interface DiscProps {
  size: number;
  pegIndex: number;
}

export interface PegProps {
  discs: number[];
  pegIndex: number;
  darkMode: boolean;
  onDropDisc: (fromIndex: number, toIndex: number) => void;
}
