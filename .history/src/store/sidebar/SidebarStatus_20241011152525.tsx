import { create } from "zustand";

export const SidebarStatus = create((set) => ({
  sidebar: true, 
  addSidebar: (data: boolean) => set(() => ({ sidebar: data })),
}));
