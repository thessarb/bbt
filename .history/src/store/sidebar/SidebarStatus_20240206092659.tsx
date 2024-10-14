import { create } from "zustand";

export const SidebarStatus = create((set) => ({
  sidebar: false,
  addSidebar: (data: boolean) => set(() => ({ sidebar: data })),
}));
