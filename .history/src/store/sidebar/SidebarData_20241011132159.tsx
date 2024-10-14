import { create } from "zustand";

export const useSidebarData = create((set) => ({
  sidebarData: [],
  addSidebarChildren: (data: any[]) => set(() => ({ sidebarData: data })),
}));
