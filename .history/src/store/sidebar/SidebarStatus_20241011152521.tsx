import { create } from "zustand";

export const SidebarStatus = create((set) => ({
  sidebar: true, // Set the default to true so that the sidebar is open initially
  addSidebar: (data: boolean) => set(() => ({ sidebar: data })),
}));
