import { create } from "zustand";

interface SidebarState {
  sidebar: boolean;
  toggleSidebar: () => void;
}

export const SidebarStatus = create((set) => ({
  sidebar: true, // Default state
  addSidebar: () => set((state) => ({ sidebar: !state.sidebar })) // Log the new status each time it toggles
  
}));