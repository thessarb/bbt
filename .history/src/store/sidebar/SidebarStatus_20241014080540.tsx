import { create } from "zustand";

export const SidebarStatus = create((set) => ({
  sidebar: false,
  addSidebar: (data: boolean) => {
    console.log("Sidebar toggled: ", data);
    set(() => ({ sidebar: data }));
  },
}));