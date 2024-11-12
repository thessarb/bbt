import { create } from "zustand";

export const useUserdata = create((set) => ({
  userData: {},
  addUserData: (data: any) => set(() => ({ userData: data })),
}));
