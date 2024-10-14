import { create } from "zustand";

export const useSidebarData = create((set) => ({
  sidebarData: [],
  addSidebarData: (data: any[]) => set(() => ({ sidebarData: data })),
}));
