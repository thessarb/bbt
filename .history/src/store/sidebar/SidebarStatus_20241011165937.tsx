import create from 'zustand';

interface SidebarState {
  sidebar: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebar: true, // Initial state
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));