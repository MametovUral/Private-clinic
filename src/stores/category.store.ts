import { Path } from "@/types";
import { create } from "zustand";

interface ICategoryState {
  categoryState: Path;
  setCategory: (path: Path) => void;
}

export const useCategoryState = create<ICategoryState>((set) => ({
  categoryState: "/clinic",
  setCategory: (path: Path) => set({ categoryState: path }),
}));
