import { create } from "zustand";

interface SidebarState {
  sidebar: boolean;
  toggleSidebar: () => void;
}

export const SidebarStatus = create((set) => ({
  sidebar: true, // Default state
  addSidebar: (newStatus: boolean) => {
    console.log("Sidebar toggled: ", newStatus); // Log the new status each time it toggles
    set({ sidebar: newStatus });
  },
}));