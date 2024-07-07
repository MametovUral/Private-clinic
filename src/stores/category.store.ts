import { create } from 'zustand';

import { Path } from '@/types';

interface ICategoryState {
  categoryState: Path;
  setCategory: (path: Path) => void;
}

export const useCategoryState = create<ICategoryState>((set) => ({
  categoryState: "/clinic",
  setCategory: (path: Path) => set({ categoryState: path }),
}));
