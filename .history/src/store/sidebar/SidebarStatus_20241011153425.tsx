import { create } from "zustand";

export const SidebarStatus = create((set) => ({
  sidebar: true, // Ensure default is open
  addSidebar: (data: boolean) => {
    console.log("Sidebar toggled: ", data);
    set(() => ({ sidebar: data }));
  },
}));